import { createContext, useEffect, useState } from "react";

export const DataContext = createContext();

export const ContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await fetch("/src/data/data.json");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error loading parfumes data", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const brands = [
    "Acqua Di Parma",
    "Adidas",
    "Agent Provocateur",
    "Agonist",
    "Ajmal",
    "Alexandre J.",
    "Amouage",
    "Chanel",
    "YSL",
    "Victoria's Secret",
  ];
  const notes = [
    "Floral",
    "Fresh",
    "Woody",
    "Spicy",
    "Oriental",
    "Musk",
    "Fruity",
    "Citrus",
    "Amber",
    "Sweet",
  ];
  const categories = ["Women", "Men", "Unisex"];

  const priceRanges = [
    { label: "0-50 AZN", min: 0, max: 50 },
    { label: "50-100 AZN", min: 50, max: 100 },
    { label: "100-200 AZN", min: 100, max: 200 },
    { label: "200 və daha çox", min: 200, max: Infinity },
  ];

  return (
    <DataContext.Provider
      value={{ data, brands, notes, categories, priceRanges, loading }}
    >
      {children}
    </DataContext.Provider>
  );
};
