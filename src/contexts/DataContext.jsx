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


// <div className="container flex items-center justify-center relative">
//   <ul className="flex items-center space-x-8">
//     <li className="group">
//       <a
//         style={{ fontFamily: "Playfair Display" }}
//         href="#"
//         className="mb-1 flex items-center text-xl uppercase font-semibold"
//       >
//         Ətirlər
//         <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-all duration-300" />
//       </a>

//       <div className="h-1 w-full bg-black absolute bottom-1 left-0 hidden group-hover:block transition-all duration-300"></div>

//       {/* DROPDOWN */}
//       <div className="container flex space-x-8 absolute left-0 bg-fuchsia-500">
//         <div className="flex flex-col space-y-4">
//           <a
//             href="#"
//             className="font-bold hover:text-(--custom-red) transition-all duration-300"
//           >
//             ÖZƏL KOLLEKSİYA
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Yeddi gözəl
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Xəmsə
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Qarabağ
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Sport
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Baku
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Baldini
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Day&Night
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Kids
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Twins
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Love
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Billionarie
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <a
//             href="#"
//             className="font-bold hover:text-(--custom-red) transition-all duration-300"
//           >
//             ƏTİRLƏR
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Kişi ətirləri
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Qadın ətirləri
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Unisex ətirlər
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Uşaq ətirləri
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <a
//             href="#"
//             className="font-bold hover:text-(--custom-red) transition-all duration-300"
//           >
//             MAŞIN ƏTİRLƏRİ
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Rudder
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Romantik
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Secret
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Speed
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Envy
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Mery
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <a
//             href="#"
//             className="font-bold hover:text-(--custom-red) transition-all duration-300"
//           >
//             EV ƏTİRLƏRİ
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Soft
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300"
//           >
//             Powder
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <a
//             href="#"
//             className="font-bold hover:text-(--custom-red) transition-all duration-300"
//           >
//             ƏTİRLİ ŞAMLAR
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <a
//             href="#"
//             className="font-bold hover:text-(--custom-red) transition-all duration-300"
//           >
//             YENİ
//           </a>
//           <a
//             href="#"
//             className="font-bold hover:text-(--custom-red) transition-all duration-300"
//           >
//             POPULYAR
//           </a>
//         </div>
//       </div>
//     </li>

//     <li className="group">
//       <a
//         style={{ fontFamily: "Playfair Display" }}
//         href="#"
//         className="mb-1 flex items-center text-xl uppercase font-semibold"
//       >
//         Brendlər
//         <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-all duration-300" />
//       </a>

//       <div className="h-1 w-full bg-black absolute bottom-1 left-0 hidden group-hover:block transition-all duration-300"></div>

//       {/* DROPDOWN */}
//       <div className="container flex space-x-8 absolute left-0 bg-blue-500">
//         <div className="flex flex-col space-y-2">
//           <a
//             href="#"
//             className="font-bold text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             A
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Acqua Di Parma
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Adidas
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Agent Provocateur
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Agonist
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Ajmal
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Alexandre J.
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Alfred Dunhill
//           </a>
//         </div>

//         <div className="flex flex-col space-y-4">
//           <a
//             href="#"
//             className="font-bold text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             B
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Baldessarini
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Bentley
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Boadicea The Victorious
//           </a>
//           <a
//             href="#"
//             className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-sm"
//           >
//             Bond No.9
//           </a>
//         </div>
//       </div>
//     </li>

//     <li className="group relative">
//       <a
//         style={{ fontFamily: "Playfair Display" }}
//         href="#"
//         className="mb-1 flex items-center text-xl uppercase font-semibold"
//       >
//         İydə parfumery
//         <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-all duration-300" />
//       </a>

//       <div className="h-1 w-full bg-black absolute bottom-1 left-0 hidden group-hover:block transition-all duration-300"></div>

//       {/* DROPDOWN */}
//       <div className="py-6 container rounded-lg flex flex-col absolute left-0 bg-yellow-500">
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Şirkət Haqqında
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Hədiyyə Kartları
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Hədiyyə Paketləri
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Öz Ətrini Yarat
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Özəl Ətirlər
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Endirim Kartları
//         </a>
//       </div>
//     </li>

//     <li className="group relative">
//       <a
//         style={{ fontFamily: "Playfair Display" }}
//         href="#"
//         className="mb-1 flex items-center text-xl uppercase font-semibold"
//       >
//         MAĞAZALAR
//       </a>
//       <div className="h-1 w-full bg-black absolute bottom-1 left-0 hidden group-hover:block transition-all duration-300"></div>
//     </li>

//     <li className="group relative">
//       <a
//         style={{ fontFamily: "Playfair Display" }}
//         href="#"
//         className="mb-1 flex items-center text-xl uppercase font-semibold"
//       >
//         BLOQ
//       </a>
//       <div className="h-1 w-full bg-black absolute bottom-1 left-0 hidden group-hover:block transition-all duration-300"></div>
//     </li>

//     <li className="group relative">
//       <a
//         style={{ fontFamily: "Playfair Display" }}
//         href="#"
//         className="mb-1 flex items-center text-xl uppercase font-semibold"
//       >
//         DƏSTƏK
//         <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-all duration-300" />
//       </a>

//       <div className="h-1 w-full bg-black absolute bottom-1 left-0 hidden group-hover:block transition-all duration-300"></div>

//       {/* DROPDOWN */}
//       <div className="py-6 container rounded-lg flex flex-col absolute left-0 bg-yellow-500">
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Bizimlə Əlaqə
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Sifariş Etmək
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Çatdırılma
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Ödəniş
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Loyallıq Proqramı
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Sual-Cavab
//         </a>
//         <a
//           href="#"
//           className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 text-md"
//         >
//           Məxfilik Siyasəti
//         </a>
//       </div>
//     </li>
//   </ul>
// </div>;

