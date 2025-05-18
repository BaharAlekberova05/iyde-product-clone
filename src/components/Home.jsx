// import React, { useContext, useState } from "react";
// import { DataContext } from "../contexts/dataContext";

// const Home = () => {
//   const { data, loading } = useContext(DataContext);
//   const brands = [
//     "Acqua Di Parma",
//     "Adidas",
//     "Agent Provocateur",
//     "Agonist",
//     "Ajmal",
//     "Alexandre J.",
//     "Amouage",
//     "Chanel",
//     "YSL",
//     "Victoria's Secret",
//   ];

//   const notes = [
//     "Floral",
//     "Fresh",
//     "Woody",
//     "Spicy",
//     "Oriental",
//     "Musk",
//     "Fruity",
//     "Citrus",
//     "Amber",
//     "Sweet",
//   ];

//   return (
//     <div className="container py-16 md:py-4">
//       <p className="text-xl font-bold text-center md:text-left md:text-2xl">
//         Ətirlər
//       </p>
//       <p className="text-(--custom-gray) text-md text-center md:text-left md:text-md">
//         <span>0</span> nəticə
//       </p>

//       <div className="flex items-center space-x-2 my-4 md:hidden">
//         <button className="w-1/2 border border-(--custom-input-border) rounded-3xl px-6 py-1 text-sm font-semibold">
//           A-dan Z-yə
//         </button>

//         <button className="w- border border-(--custom-input-border) w-1/2 rounded-3xl px-6 py-1 text-sm cursor-pointer font-semibold">
//           Filter
//         </button>
//       </div>

//       <div className="flex space-x-6 mt-4">
//         <div className="flex-1 bg-fuchsia-400 hidden md:flex flex-col space-y-4">
//           {/* BRANDS */}
//           <div className="flex flex-col space-y-4">
//             <span
//               style={{ fontFamily: "Playfair Display" }}
//               className="font-medium uppercase"
//             >
//               Brendlər
//             </span>

//             <div className="flex flex-col space-y-3 max-h-[180px] overflow-y-scroll">
//               {brands.map((brand) => (
//                 <div className="flex items-center space-x-2">
//                   <input type="checkbox" id={brand} />
//                   <label
//                     htmlFor={brand}
//                     className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                   >
//                     {brand}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <hr className="text-(--custom-border)" />

//           {/* CATEGORIES */}
//           <div className="flex flex-col space-y-4">
//             <span
//               style={{ fontFamily: "Playfair Display" }}
//               className="font-medium uppercase"
//             >
//               Kateqoriyalar
//             </span>

//             <div className="flex flex-col space-y-3">
//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="man" />
//                 <label
//                   htmlFor="man"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   Kişi ətirləri
//                 </label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="üoman" />
//                 <label
//                   htmlFor="üoman"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   Qadın ətirləri
//                 </label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="unisex" />
//                 <label
//                   htmlFor="unisex"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   Unisex ətirlər
//                 </label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="child" />
//                 <label
//                   htmlFor="child"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   Uşaq ətirləri
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* PRİCE */}
//           <div className="flex flex-col space-y-4">
//             <span
//               style={{ fontFamily: "Playfair Display" }}
//               className="font-medium uppercase"
//             >
//               Qiymət
//             </span>

//             <div className="flex flex-col space-y-3">
//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="0-50" />
//                 <label
//                   htmlFor="0-50"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   0-50 AZN
//                 </label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="50-100" />
//                 <label
//                   htmlFor="50-100"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   50-100 AZN
//                 </label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="100-200" />
//                 <label
//                   htmlFor="100-200"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   100-200 AZN
//                 </label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <input type="checkbox" id="200-" />
//                 <label
//                   htmlFor="200-"
//                   className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                 >
//                   200 və daha çox
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* NOTES */}
//           <div className="flex flex-col space-y-4">
//             <span
//               style={{ fontFamily: "Playfair Display" }}
//               className="font-medium uppercase"
//             >
//               Notlar
//             </span>

//             <div className="flex flex-col space-y-3 max-h-[180px] overflow-y-scroll">
//               {notes.map((note) => (
//                 <div className="flex items-center space-x-2">
//                   <input type="checkbox" id={note} />
//                   <label
//                     htmlFor={note}
//                     className="text-(--custom-black) text-lg font-medium hover:text-(--custom-red) transition-all duration-300"
//                   >
//                     {note}
//                   </label>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="flex-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
//           {loading && "Yüklənir"}
//           {data.map((parfume) => (
//             <div
//               key={parfume.id}
//               className="flex flex-col space-y-2 cursor-pointer group"
//             >
//               <div className="bg-white rounded-md h-[300px] py-8 group-hover:scale-110 transition-all duration-300 w-full relative">
//                 <img
//                   src={parfume.img}
//                   alt={parfume.name}
//                   className="w-full h-full object-contain "
//                 />

//                 <button className="w-full rounded-full bg-white py-1 font-semibold cursor-pointer scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-300 hover:bg-(--hover-color) absolute bottom-1">
//                   Səbətə əlavə et
//                 </button>
//               </div>

//               <p className="text-xl font-bold">{parfume.price} AZN</p>
//               <p className="text-sm text-(--custom-black) font-medium">
//                 {parfume.name}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// ? SECOND GPT
import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/dataContext";

const Home = () => {
  const { data, loading } = useContext(DataContext);

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

  // State hooks for filters
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

  // Generic handler for checkbox toggle (brands, categories, notes)
  const handleCheckboxChange = (value, setter, selected) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  // Handler for price checkbox toggle (ranges are objects)
  const handlePriceChange = (range) => {
    const exists = selectedPrices.some((r) => r.label === range.label);
    if (exists) {
      setSelectedPrices(selectedPrices.filter((r) => r.label !== range.label));
    } else {
      setSelectedPrices([...selectedPrices, range]);
    }
  };

  // Check if a price fits in any selected price range
  const isInPriceRange = (price) => {
    if (selectedPrices.length === 0) return true;
    return selectedPrices.some(({ min, max }) => price >= min && price < max);
  };

  // Filter the data based on selected filters
  const filteredData = data.filter((item) => {
    const brandMatch =
      selectedBrands.length === 0 || selectedBrands.includes(item.brand);
    const categoryMatch =
      selectedCategories.length === 0 ||
      selectedCategories.includes(item.category);
    const noteMatch =
      selectedNotes.length === 0 ||
      selectedNotes.some((note) => item.notes?.includes(note));
    const priceMatch = isInPriceRange(item.price);

    return brandMatch && categoryMatch && noteMatch && priceMatch;
  });

  return (
    <div className="container py-16 md:py-4">
      <p className="text-xl font-bold text-center md:text-left md:text-2xl">
        Ətirlər
      </p>
      <p className="text-gray-600 text-md text-center md:text-left md:text-md">
        <span>{filteredData.length}</span> nəticə
      </p>

      <div className="flex space-x-6 mt-4">
        {/* Filters Section */}
        <div className="flex-1 hidden md:flex flex-col space-y-4">
          {/* Brands */}
          <div className="flex flex-col space-y-4">
            <span className="font-medium uppercase">Brendlər</span>
            <div className="flex flex-col space-y-3 max-h-[180px] overflow-y-scroll">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={() =>
                      handleCheckboxChange(
                        brand,
                        setSelectedBrands,
                        selectedBrands
                      )
                    }
                  />
                  <label htmlFor={brand} className="text-lg font-medium">
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr />

          {/* Categories */}
          <div className="flex flex-col space-y-4">
            <span className="font-medium uppercase">Kateqoriyalar</span>
            <div className="flex flex-col space-y-3">
              {categories.map((cat) => (
                <div key={cat} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={cat}
                    checked={selectedCategories.includes(cat)}
                    onChange={() =>
                      handleCheckboxChange(
                        cat,
                        setSelectedCategories,
                        selectedCategories
                      )
                    }
                  />
                  <label htmlFor={cat} className="text-lg font-medium">
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr />

          {/* Price Ranges */}
          <div className="flex flex-col space-y-4">
            <span className="font-medium uppercase">Qiymət</span>
            <div className="flex flex-col space-y-3">
              {priceRanges.map((range) => (
                <div key={range.label} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={range.label}
                    checked={selectedPrices.some(
                      (r) => r.label === range.label
                    )}
                    onChange={() => handlePriceChange(range)}
                  />
                  <label htmlFor={range.label} className="text-lg font-medium">
                    {range.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr />

          {/* Notes */}
          <div className="flex flex-col space-y-4">
            <span className="font-medium uppercase">Notlar</span>
            <div className="flex flex-col space-y-3 max-h-[180px] overflow-y-scroll">
              {notes.map((note) => (
                <div key={note} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id={note}
                    checked={selectedNotes.includes(note)}
                    onChange={() =>
                      handleCheckboxChange(
                        note,
                        setSelectedNotes,
                        selectedNotes
                      )
                    }
                  />
                  <label htmlFor={note} className="text-lg font-medium">
                    {note}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="flex-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
          {loading && "Yüklənir"}
          {!loading && filteredData.length === 0 && (
            <p className="col-span-full text-center text-gray-500">
              Nəticə tapılmadı
            </p>
          )}
          {filteredData.map((parfume) => (
            <div
              key={parfume.id}
              className="flex flex-col space-y-2 cursor-pointer group"
            >
              <div className="bg-white rounded-md h-[300px] py-8 group-hover:scale-110 transition-all duration-300 w-full relative">
                <img
                  src={parfume.img}
                  alt={parfume.name}
                  className="w-full h-full object-contain"
                />
                <button className="w-full rounded-full bg-white py-1 font-semibold cursor-pointer scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-300 absolute bottom-1">
                  Səbətə əlavə et
                </button>
              </div>
              <p className="text-xl font-bold">{parfume.price} AZN</p>
              <p className="text-sm text-gray-700 font-medium">
                {parfume.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
