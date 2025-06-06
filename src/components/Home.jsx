import React, { useContext, useState } from "react";
import { DataContext } from "../contexts/DataContext";
import { RiCloseLargeFill } from "react-icons/ri";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const Home = () => {
  const { data, brands, notes, categories, priceRanges, loading } =
    useContext(DataContext);

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [isBrandsOpen, setIsBrandsOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isNotesOpen, setIsNotesOpen] = useState(false);

  const handleCheckboxChange = (value, setter, selected) => {
    if (selected.includes(value)) {
      setter(selected.filter((item) => item !== value));
    } else {
      setter([...selected, value]);
    }
  };

  const handlePriceChange = (range) => {
    const exists = selectedPrices.some((r) => r.label === range.label);
    if (exists) {
      setSelectedPrices(selectedPrices.filter((r) => r.label !== range.label));
    } else {
      setSelectedPrices([...selectedPrices, range]);
    }
  };

  const isInPriceRange = (price) => {
    if (selectedPrices.length === 0) return true;
    return selectedPrices.some(({ min, max }) => price >= min && price < max);
  };

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
    <div className="container py-16 md:py-8 relative">
      <p className="text-xl font-bold text-center md:text-left md:text-2xl">
        Ətirlər
      </p>
      <p className="text-gray-600 text-md text-center md:text-left md:text-md">
        <span>{filteredData.length}</span> nəticə
      </p>

      <div className="flex items-center space-x-4 my-6 md:hidden">
        <button className="w-1/2 border border-(--custom-border) rounded-full px-6 py-1 text-sm  font-semibold">
          A-dan Z-yə
        </button>
        <button
          className="w-1/2 border border-(--custom-border) rounded-full px-6 py-1 text-sm  font-semibold"
          onClick={() => setIsMobileFilterOpen(true)}
        >
          Filter
        </button>
      </div>

      {/* MOLBILE FILTER */}
      {isMobileFilterOpen && (
        <div className="container py-4 flex flex-col justify-between space-y-4 h-dvh w-full bg-white absolute top-0 left-0 z-20 overflow-scroll">
          <div>
            <div className="flex justify-between items-center w-full h-20">
              <RiCloseLargeFill
                className="text-2xl"
                onClick={() => setIsMobileFilterOpen(false)}
              />

              <span className="text-2xl font-semibold">Filter</span>

              <div className="font-medium text-sm">Filteri təmizlə</div>
            </div>

            <ul className="flex flex-col space-y-4 relative">
              <li
                className="flex flex-col text-lg font-semibold"
                onClick={() => setIsBrandsOpen(!isBrandsOpen)}
              >
                <span
                  style={{ fontFamily: "Playfair Display" }}
                  className="flex items-center justify-between"
                >
                  Brendlər
                  {isBrandsOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>

                {brands.map((brand) => (
                  <div
                    key={brand}
                    className={`${
                      isBrandsOpen ? "flex items-center space-x-2" : "hidden"
                    }`}
                  >
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
                    <label
                      htmlFor={brand}
                      className="text-lg font-medium cursor-pointer hover:text-(--custom-red) transition-all duration-300"
                    >
                      {brand}
                    </label>
                  </div>
                ))}
              </li>

              <li
                className="flex flex-col text-lg font-semibold"
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              >
                <span
                  style={{ fontFamily: "Playfair Display" }}
                  className="flex items-center justify-between"
                >
                  Kateqoriyalar
                  {isCategoriesOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>

                {categories.map((cat) => (
                  <div
                    key={cat}
                    className={`${
                      isCategoriesOpen
                        ? "flex items-center space-x-2"
                        : "hidden"
                    }`}
                  >
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
                    <label
                      htmlFor={cat}
                      className="text-lg font-medium cursor-pointer hover:text-(--custom-red) transition-all duration-300"
                    >
                      {cat}
                    </label>
                  </div>
                ))}
              </li>

              <li
                className="flex flex-col text-lg font-semibold"
                onClick={() => setIsPriceOpen(!isPriceOpen)}
              >
                <span
                  style={{ fontFamily: "Playfair Display" }}
                  className="flex items-center justify-between"
                >
                  Qiymət
                  {isPriceOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>

                {priceRanges.map((range) => (
                  <div
                    key={range.label}
                    className={`${
                      isPriceOpen ? "flex items-center space-x-2" : "hidden"
                    }`}
                  >
                    <input
                      type="checkbox"
                      id={range.label}
                      checked={selectedPrices.some(
                        (r) => r.label === range.label
                      )}
                      onChange={() => handlePriceChange(range)}
                    />
                    <label
                      htmlFor={range.label}
                      className="text-lg font-medium cursor-pointer hover:text-(--custom-red) transition-all duration-300"
                    >
                      {range.label}
                    </label>
                  </div>
                ))}
              </li>

              <li
                className="flex flex-col text-lg font-semibold"
                onClick={() => setIsNotesOpen(!isNotesOpen)}
              >
                <span
                  style={{ fontFamily: "Playfair Display" }}
                  className="flex items-center justify-between"
                >
                  Notlar
                  {isNotesOpen ? <FaChevronDown /> : <FaChevronRight />}
                </span>

                {notes.map((note) => (
                  <div
                    key={note}
                    className={`${
                      isNotesOpen ? "flex items-center space-x-2" : "hidden"
                    }`}
                  >
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
              </li>
            </ul>
          </div>

          <button
            className="bg-(--custom-green) rounded-full py-2 text-white font-semibold"
            onClick={() => setIsMobileFilterOpen(false)}
          >
            Filter
          </button>
        </div>
      )}

      <div className="flex space-x-6 mt-4">
        {/* Filters Section */}
        <div className="flex-1 hidden md:flex flex-col space-y-4">
          {/* Brands */}
          <div className="flex flex-col space-y-4">
            <span
              style={{ fontFamily: "Playfair Display" }}
              className="font-medium uppercase"
            >
              Brendlər
            </span>
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
                  <label
                    htmlFor={brand}
                    className="text-lg font-medium cursor-pointer hover:text-(--custom-red) transition-all duration-300"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="text-(--custom-border)" />

          {/* Categories */}
          <div className="flex flex-col space-y-4">
            <span
              style={{ fontFamily: "Playfair Display" }}
              className="font-medium uppercase"
            >
              Kateqoriyalar
            </span>
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
                  <label
                    htmlFor={cat}
                    className="text-lg font-medium cursor-pointer hover:text-(--custom-red) transition-all duration-300"
                  >
                    {cat}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="text-(--custom-border)" />

          {/* Price Ranges */}
          <div className="flex flex-col space-y-4">
            <span
              style={{ fontFamily: "Playfair Display" }}
              className="font-medium uppercase"
            >
              Qiymət
            </span>
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
                  <label
                    htmlFor={range.label}
                    className="text-lg font-medium cursor-pointer hover:text-(--custom-red) transition-all duration-300"
                  >
                    {range.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          <hr className="text-(--custom-border)" />

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
                <button className="w-full rounded-full bg-white py-1  font-semibold cursor-pointer scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-300 absolute bottom-1 hover:bg-(--hover-color)">
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
