import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { images } from "../constants";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { MdPhoneInTalk,MdClose } from "react-icons/md";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const links = [
  { name: "О продукте", href: "/" },
  { name: "Отзывы", href: "/" },
  { name: "Доставка и оплата", href: "/" },
  { name: "Контакты", href: "/" },
];

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [catalog, setCatalog] = useState(false);
  return (
    <header className="header bg-white shadow-lg py-5 sm:py-4">
      <nav className="bg-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="sm:hidden">
              <button className="flex items-center justify-center">
                <span>
                  <HiOutlineMenuAlt1 fontSize={30} />
                </span>
              </button>
            </div>
            <Link href={"/"}>
              <a className="flex items-center justify-center max-w-[150px] h-[50px]">
                <Image src={images.logo} alt="logo" className="w-full h-full" />
              </a>
            </Link>
            <form
              action=""
              className="hidden sm:block max-w-[510px] w-full mx-[10px] lg:mx-[30px]"
            >
              <div className="search relative">
                <button className="absolute top-[30%] left-[5%]">
                  <FiSearch fontSize={20} color={`#959AAE`} />
                </button>
                <input
                  type="search"
                  placeholder="Название модели или артикул"
                  className="w-full py-3 md:py-4 pl-[50px] pr-3 rounded-lg bg-defaultGrey outline-gray"
                />
              </div>
            </form>
            <a
              href="tel:+998900198505"
              className="hidden sm:flex md:hidden lg:flex items-center justify-center text-sm text-[#2B3350] "
            >
              <span className="mr-1">
                <MdPhoneInTalk fontSize={25} color="#959AAE" />
              </span>
              <span className="hidden md:block">+998 90 019-85-05</span>
            </a>
            <a
              href="tel:+998900198505"
              className="hidden md:block bg-defaultGrey rounded-lg outline-gray lg:ml-[50px] py-4 px-7"
            >
              <span>Заказать звонок</span>
            </a>
            <button className="sm:hidden flex items-center justify-center relative">
              <span className="relative">
                <FiShoppingCart fontSize={30} />
              </span>
              <div className="w-5 h-5 flex items-center justify-center text-white rounded-full absolute top-[-8px] right-[-8px] bg-blue">
                <span className="">+1</span>
              </div>
            </button>
          </div>
        </div>
      </nav>
      <nav className="mt-5 hidden xs:block">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <button onClick={() => setCatalog(prev => !prev)} className="py-3 px-6 lg:px-8 bg-default text-white flex items-center justify-center rounded-xl catalog font-semibold text-sm mr-2 lg:mr-6">
                <span>
                  <HiOutlineMenuAlt1 fontSize={30} />
                </span>
                <span className="ml-2">Каталог</span>
              </button>
              <ul className="hidden md:flex">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      <a className="px-4 font-medium text-sm hover:text-blue duration-150">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
              {catalog && (
                <div className="md:hidden flex items-center justify-center fixed top-0 left-0 backdrop-blur-sm w-full h-full">
                  <button onClick={() => setCatalog(prev => !prev)} className='absolute top-4 right-5'><span><MdClose fontSize={25}/></span></button>
                  <ul className="flex flex-col items-center">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href}>
                      <a className="px-4 font-medium text-sm hover:text-blue duration-150">
                        {link.name}
                      </a>
                    </Link>
                  </li>
                ))}
              </ul>
                </div>
              )}
            </div>
            <div className="flex items-center justify-center">
              <select name="" id="">
                <option value="Москва">Москва</option>
              </select>
              <button className="flex items-center ml-8">
                <span>
                  <FiShoppingCart fontSize={30} />
                </span>
                <span className="mx-2 hidden lg:block">Моя корзина</span>
                <div className="flex items-center justify-center w-5 h-6 rounded-full bg-blue p-[13px] font-bold text-sm text-white ml-2 lg:ml-0">
                  +1
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
