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

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};
