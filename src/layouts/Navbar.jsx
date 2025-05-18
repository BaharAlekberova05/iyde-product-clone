import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FaChevronDown, FaChevronRight, FaWhatsapp } from "react-icons/fa";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { TbBasket } from "react-icons/tb";
import { RiCloseLargeFill } from "react-icons/ri";
import { CiFacebook } from "react-icons/ci";
import {
  PiInstagramLogoLight,
  PiTiktokLogo,
  PiYoutubeLogoThin,
} from "react-icons/pi";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isParfumesOpen, setIsParfumesOpen] = useState(false);
  const [isCarParfumesOpen, setIsCarParfumesOpen] = useState(false);
  const [isHomeParfumesOpen, setIsHomeParfumesOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="relative">
      {/* MOBILE NAVBAR */}
      <div
        className={`flex items-center justify-between h-16 fixed top-0 left-0 w-full bg-white mb-16 z-10 px-4 md:hidden ${
          isSidebarOpen && "hidden"
        }`}
      >
        <FiMenu
          className="text-2xl cursor-pointer"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        />

        <div className="size-[50px]">
          <a href="#">
            <img src="/src/assets/img/logo.svg" alt="Iyde Logo" />
          </a>
        </div>

        <FiSearch className="text-2xl" />
      </div>

      {/* MOBILE HEADER */}
      <div
        className={`flex items-center justify-between h-16 fixed bottom-0 left-0 w-full z-10 bg-(--custom-bg) px-4 md:hidden ${
          isSidebarOpen && "hidden"
        }`}
      >
        <div className="flex flex-col items-center space-y-2">
          <FaWhatsapp className="size-[30px] text-(--custom-green)" />
          <span className="text-(--custom-black) text-xs">WhatsApp</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <MdOutlineLocalPhone className="size-[30px]" />
          <span className="text-(--custom-black) text-xs">Zəng et</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <FaRegUser className="size-[30px]" />
          <span className="text-(--custom-black) text-xs">Daxil ol</span>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <div className="relative">
            <TbBasket className="size-[30px]" />
            <div className="bg-(--custom-green) rounded-full px-2 py-0.5 text-white absolute -top-3 -right-4">
              0
            </div>
          </div>
          <span className="text-(--custom-black) text-xs">Səbət</span>
        </div>
      </div>

      {/* MOBILE SIDEBAR */}
      {isSidebarOpen && (
        <div className="container py-4 flex flex-col space-y-4 h-dvh w-full bg-white absolute z-20 overflow-scroll">
          <div className="flex justify-between items-center w-full h-20">
            <RiCloseLargeFill
              className="text-2xl"
              onClick={() => setIsSidebarOpen(false)}
            />

            <div className="size-[50px]">
              <img src="/src/assets/img/logo.svg" alt="Iyde logo" />
            </div>

            <div className="flex space-x-3 font-medium text-sm">
              <span>en</span>
              <span>ru</span>
            </div>
          </div>

          <ul className="flex flex-col space-y-4 relative">
            <li
              className="flex flex-col text-lg font-semibold"
              onClick={() => setIsCollectionOpen(!isCollectionOpen)}
            >
              <span className="flex items-center justify-between">
                Özəl kolleksiya
                {isCollectionOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>

              <ul
                className={`${
                  isCollectionOpen
                    ? "flex flex-col max-h-full space-y-2 mt-2 text-base"
                    : "hidden"
                }`}
              >
                <li>Yeddi gözəl</li>
                <li>Xəmsə</li>
                <li>Qarabağ</li>
                <li>Sport</li>
                <li>Baku</li>
                <li>Day&Night</li>
                <li>Kids</li>
                <li>Twins</li>
                <li>Love</li>
              </ul>
            </li>

            <li
              className="flex flex-col text-lg font-semibold"
              onClick={() => setIsParfumesOpen(!isParfumesOpen)}
            >
              <span className="flex items-center justify-between">
                Ətirlər
                {isParfumesOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>

              <ul
                className={`${
                  isParfumesOpen
                    ? "flex flex-col max-h-full space-y-2 mt-2 text-base"
                    : "hidden"
                }`}
              >
                <li>Kişi ətirlər</li>
                <li>Qadın ətirləri</li>
                <li>Unisex ətirlər</li>
                <li>Uşaq ətirləri</li>
              </ul>
            </li>

            <li
              className="flex flex-col text-lg font-semibold"
              onClick={() => setIsCarParfumesOpen(!isCarParfumesOpen)}
            >
              <span className="flex items-center justify-between">
                Maşın ətirləri
                {isCarParfumesOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>

              <ul
                className={`${
                  isCarParfumesOpen
                    ? "flex flex-col max-h-full space-y-2 mt-2 text-base"
                    : "hidden"
                }`}
              >
                <li>Rudder</li>
                <li>Romantik</li>
                <li>Secretr</li>
                <li>Speed</li>
                <li>Envy</li>
                <li>Mery</li>
              </ul>
            </li>

            <li
              className="flex flex-col text-lg font-semibold"
              onClick={() => setIsHomeParfumesOpen(!isHomeParfumesOpen)}
            >
              <span className="flex items-center justify-between">
                Ev ətirləri
                {isHomeParfumesOpen ? <FaChevronDown /> : <FaChevronRight />}
              </span>

              <ul
                className={`${
                  isHomeParfumesOpen
                    ? "flex flex-col max-h-full space-y-2 mt-2 text-base"
                    : "hidden"
                }`}
              >
                <li>Soft</li>
                <li>Powder</li>
              </ul>
            </li>
          </ul>
        </div>
      )}

      {/* NAVBAR */}
      <div className="flex-col hidden md:flex">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-2 py-3 text-md">
            <CiFacebook className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 cursor-pointer" />
            <PiInstagramLogoLight className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 cursor-pointer" />
            <PiYoutubeLogoThin className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 cursor-pointer" />
            <PiTiktokLogo className="text-(--custom-gray) hover:text-(--custom-red) transition-all duration-300 cursor-pointer" />
          </div>

          <div className="flex items-center space-x-2 text-(--custom-gray) text-xs font-semibold">
            <span className="cursor-pointer hover:text-(--custom-red) transition-all duration-300">
              en
            </span>
            <span>|</span>
            <span className="cursor-pointer hover:text-(--custom-red) transition-all duration-300">
              ru
            </span>
          </div>
        </div>

        <hr className="text-(--custom-border)" />

        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8 w-1/2">
            <div className="size-[120px]">
              <a href="#">
                <img
                  src="/src/assets/img/logo.svg"
                  alt="Iyde logo"
                  className="size-full"
                />
              </a>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                placeholder="Öz ətrini axtar"
                className="w-full rounded-3xl py-2 px-8 border border-(--custom-input-border) outline-none placeholder:text-(--custom-black) placeholder:font-semibold"
              />

              <FiSearch className="absolute top-3 right-4 text-(--custom-input-border)" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 cursor-pointer">
              <FaWhatsapp className="text-4xl text-(--custom-green)" />
              <span className="underline text-2xl font-semibold pl-3 border-l border-(--custom-input-border) hover:text-(--custom-red) transition-all duration-300">
                +994 50 820 55 55
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                <FaRegUser className="size-[30px] group-hover:text-(--custom-red) transition-all duration-300" />
                <span className="text-(--custom-black) text-sm font-semibold group-hover:text-(--custom-red) transition-all duration-300">
                  Daxil ol
                </span>
              </div>

              <div className="flex flex-col items-center space-y-2 cursor-pointer group">
                <div className="relative">
                  <TbBasket className="size-[30px] group-hover:text-(--custom-red) transition-all duration-300" />
                  <div className="bg-(--custom-green) rounded-full px-2 py-0.5 text-white absolute -top-3 -right-4">
                    0
                  </div>
                </div>
                <span className="text-(--custom-black) text-sm font-semibold group-hover:text-(--custom-red) transition-all duration-300">
                  Səbət
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* NAVBAR DROPDOWNS */}
        <div className="container flex items-center justify-center relative">
          <ul className="flex items-center space-x-8">
            <li className="group relative">
              <a
                style={{ fontFamily: "Playfair Display" }}
                href="#"
                className="mb-1 flex items-center text-xl uppercase font-semibold text-[var(--custom-black)] transition-all duration-300"
              >
                Ətirlər
                <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-transform duration-300" />
              </a>

              {/* underline */}
              <div className="h-1 w-full bg-(--custom-black) absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

              {/* Dropdown */}
              <div className="absolute top-full left-0 z-50 w-[400px] rounded-xl bg-white shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-6 flex space-x-8">
                {/* Column 1 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    ÖZƏL KOLLEKSİYA
                  </span>
                  {[
                    "Yeddi gözəl",
                    "Xəmsə",
                    "Qarabağ",
                    "Sport",
                    "Baku",
                    "Baldini",
                    "Day&Night",
                    "Kids",
                    "Twins",
                    "Love",
                    "Billionarie",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    ƏTİRLƏR
                  </span>
                  {[
                    "Kişi ətirləri",
                    "Qadın ətirləri",
                    "Unisex ətirlər",
                    "Uşaq ətirləri",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    MAŞIN ƏTİRLƏRİ
                  </span>
                  {[
                    "Rudder",
                    "Romantik",
                    "Secret",
                    "Speed",
                    "Envy",
                    "Mery",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li className="group relative">
              <a
                style={{ fontFamily: "Playfair Display" }}
                href="#"
                className="mb-1 flex items-center text-xl uppercase font-semibold text-[var(--custom-black)] transition-all duration-300"
              >
                BRENDLƏR
                <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-transform duration-300" />
              </a>

              {/* underline */}
              <div className="h-1 w-full bg-(--custom-black) absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

              {/* Dropdown */}
              <div className="absolute top-full left-0 z-50 w-[400px] rounded-xl bg-white shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-6 flex space-x-8">
                {/* Column 1 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    ÖZƏL KOLLEKSİYA
                  </span>
                  {[
                    "Yeddi gözəl",
                    "Xəmsə",
                    "Qarabağ",
                    "Sport",
                    "Baku",
                    "Baldini",
                    "Day&Night",
                    "Kids",
                    "Twins",
                    "Love",
                    "Billionarie",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    BRENDLƏR
                  </span>
                  {[
                    "Kişi ətirləri",
                    "Qadın ətirləri",
                    "Unisex ətirlər",
                    "Uşaq ətirləri",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    MAŞIN ƏTİRLƏRİ
                  </span>
                  {[
                    "Rudder",
                    "Romantik",
                    "Secret",
                    "Speed",
                    "Envy",
                    "Mery",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li className="group relative">
              <a
                style={{ fontFamily: "Playfair Display" }}
                href="#"
                className="mb-1 flex items-center text-xl uppercase font-semibold text-[var(--custom-black)] transition-all duration-300"
              >
                İYDƏ PERFUMERY
                <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-transform duration-300" />
              </a>

              {/* underline */}
              <div className="h-1 w-full bg-(--custom-black) absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

              {/* Dropdown */}
              <div className="absolute top-full left-0 z-50 w-[400px] rounded-xl bg-white shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-6 flex space-x-8">
                {/* Column 1 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    ÖZƏL KOLLEKSİYA
                  </span>
                  {[
                    "Yeddi gözəl",
                    "Xəmsə",
                    "Qarabağ",
                    "Sport",
                    "Baku",
                    "Baldini",
                    "Day&Night",
                    "Kids",
                    "Twins",
                    "Love",
                    "Billionarie",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    BRENDLƏR
                  </span>
                  {[
                    "Kişi ətirləri",
                    "Qadın ətirləri",
                    "Unisex ətirlər",
                    "Uşaq ətirləri",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    MAŞIN ƏTİRLƏRİ
                  </span>
                  {[
                    "Rudder",
                    "Romantik",
                    "Secret",
                    "Speed",
                    "Envy",
                    "Mery",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </li>

            <li className="group relative">
              <a
                style={{ fontFamily: "Playfair Display" }}
                href="#"
                className="mb-1 flex items-center text-xl uppercase font-semibold text-[var(--custom-black)] transition-all duration-300"
              >
                DƏSTƏK
                <FaChevronDown className="ml-2 group-hover:-rotate-180 transition-transform duration-300" />
              </a>

              {/* underline */}
              <div className="h-1 w-full bg-(--custom-black) absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

              {/* Dropdown */}
              <div className="absolute top-full left-0 z-50 w-[400px] rounded-xl bg-white shadow-lg border border-gray-200 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 p-6 flex space-x-8">
                {/* Column 1 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    ÖZƏL KOLLEKSİYA
                  </span>
                  {[
                    "Yeddi gözəl",
                    "Xəmsə",
                    "Qarabağ",
                    "Sport",
                    "Baku",
                    "Baldini",
                    "Day&Night",
                    "Kids",
                    "Twins",
                    "Love",
                    "Billionarie",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 2 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    BRENDLƏR
                  </span>
                  {[
                    "Kişi ətirləri",
                    "Qadın ətirləri",
                    "Unisex ətirlər",
                    "Uşaq ətirləri",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>

                {/* Column 3 */}
                <div className="flex flex-col space-y-2 text-sm">
                  <span className="font-bold text-[var(--custom-black)]">
                    MAŞIN ƏTİRLƏRİ
                  </span>
                  {[
                    "Rudder",
                    "Romantik",
                    "Secret",
                    "Speed",
                    "Envy",
                    "Mery",
                  ].map((item, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="text-[var(--custom-gray)] hover:text-[var(--custom-red)] transition-colors duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </li>
          </ul>
        </div>

        <hr className="text-(--custom-border)" />
      </div>
    </div>
  );
};

export default Navbar;
