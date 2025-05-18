import React, { useContext } from "react";
import { DataContext } from "../contexts/dataContext";

const Home = () => {
  const { data } = useContext(DataContext);
  console.log(data);

  return (
    <div className="container py-16 md:py-4">
      <p className="text-xl font-bold text-center md:text-left md:text-2xl">
        Ətirlər
      </p>
      <p className="text-(--custom-gray) text-md text-center md:text-left md:text-md">
        <span>0</span> nəticə
      </p>

      <div className="flex items-center space-x-2 my-4 md:hidden">
        <button className="w-1/2 border border-(--custom-input-border) rounded-3xl px-6 py-1 text-sm font-semibold">
          A-dan Z-yə
        </button>

        <button className="w- border border-(--custom-input-border) w-1/2 rounded-3xl px-6 py-1 text-sm cursor-pointer font-semibold">
          Filter
        </button>
      </div>

      <div className="flex space-x-6 mt-4">
        <div className="flex-1 bg-fuchsia-400 hidden md:flex">Slmlar</div>

        <div className="flex-3 grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
          {data.map((parfume) => (
            <div
              key={parfume.id}
              className="flex flex-col space-y-2 cursor-pointer group"
            >
              <div className="bg-white rounded-md h-[300px] py-8 group-hover:scale-110 transition-all duration-300 w-full relative">
                <img
                  src={parfume.img}
                  alt={parfume.name}
                  className="w-full h-full object-contain "
                />

                <button className="w-full rounded-full bg-white py-1 font-semibold cursor-pointer scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-300 hover:bg-(--hover-color) absolute bottom-1">
                  Səbətə əlavə et
                </button>
              </div>

              <p className="text-xl font-bold">{parfume.price} AZN</p>
              <p className="text-sm text-(--custom-black) font-medium">
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
