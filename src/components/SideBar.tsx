"use client";
import {
  faCreditCard,
  faFile,
  faFontAwesome,
  faHouse,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const NavData = [
    { Title: "Home", Link: "/", Icon: faHouse },
    { Title: "About", Link: "/About", Icon: faRectangleList },
    { Title: "Promo", Link: "/Promo", Icon: faCreditCard },
    { Title: "Stats Bar", Link: "/StatusBar", Icon: faUser },
    { Title: "News Section", Link: "/News", Icon: faFile },
    { Title: "Language Pages", Link: "/Language", Icon: faFontAwesome },
  ];
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const closeSidebarOnOutsideClick = (event: MouseEvent) => {
      const sidebarElement = document.querySelector(".sidebar-content");
      if (
        isOpen &&
        sidebarElement &&
        !sidebarElement.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", closeSidebarOnOutsideClick);

    return () => {
      document.body.removeEventListener("click", closeSidebarOnOutsideClick);
    };
  }, [isOpen]);

  return (
    <div className="relative grid h-full grid-cols-12">
      {/* Sidebar for large screens */}
      <div className="lg:col-span-3 xl:col-span-2 hidden h-screen p-5 border-r lg:flex xl:flex flex-col justify-between shadow-xl w-full">
        {/* Sidebar content */}
        <div className="flex flex-col gap-5">
          <div className="w-full text-center font-semibold">
            The Language Network
          </div>
          <hr />
          <div className="w-full text-start font-medium">
            {NavData.map((data, i) => (
              <Link
                key={i}
                href={data.Link}
                className="flex items-center gap-2 py-5 pl-2 rounded-lg hover:bg-transparent/15 bg-transparent"
              >
                <FontAwesomeIcon className="h-6 w-6" icon={data.Icon} />
                <span>{data.Title}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <hr />
          <div className="p-2 mt-2">LogOut</div>
        </div>
      </div>

      {/* Sidebar for mobile view */}
      <div className="h-full overflow-y-auto lg:col-span-9 col-span-12 xl:col-span-10 w-full">
        <div className="text-center p-5 border-b lg:hidden xl:hidden flex">
          {/* Toggle button for mobile view */}
          <button className="" onClick={toggleSidebar}>
            <FontAwesomeIcon
              className="h-5 w-5"
              icon={isOpen ? faTimes : faBars}
            />
          </button>
          <div className="w-full text-center font-semibold">
            The Language Network
          </div>
        </div>

        {/* Mobile view sidebar */}
        <div
          className={`border-t fixed bottom-0 bg-white z-50 w-full h-fit transition-transform duration-300 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          } lg:hidden xl:hidden`}
        >
          <div className="sidebar-content">
            {/* Links in mobile view sidebar */}
            <div className="w-full gap-5 flex justify-around items-center overflow-x-auto text-start font-medium">
              {NavData.map((data, i) => (
                <Link
                  key={i}
                  href={data.Link}
                  className="flex justify-center items-center gap-2 py-3 px-5 pl-2 rounded-lg hover:bg-transparent/15 bg-transparent"
                >
                  <FontAwesomeIcon className="h-6 w-6" icon={data.Icon} />
                  {/* <span>{data.Title}</span> */}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        {children}
      </div>
    </div>
  );
};

export default SideBar;
