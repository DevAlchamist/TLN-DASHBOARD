"use client";
import {
  faCreditCard,
  faFile,
  faFontAwesome,
  faHouse,
  faRectangleList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import NavButtons from "./Reusable/NavButtons";
import Breadcrumbs from "./Reusable/BreadCrumbs";

const SideBar = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  //   Promo Bar
  // Banner
  // Stats Bar
  // News Section
  // Courses We offer section
  // Upcoming Batches
  // FAQs
  // Everything you need to know section
  const NavData = [
    { Title: "Home", Link: "/", Icon: faHouse },
    { Title: "About", Link: "/About", Icon: faRectangleList },
    { Title: "Promo", Link: "/Promo", Icon: faCreditCard },
    { Title: "Status Bar", Link: "/StatusBar", Icon: faUser },
    { Title: "News Section", Link: "/News", Icon: faFile },
    { Title: "Language Pages", Link: "/Language", Icon: faFontAwesome },
  ];
  //TODO:WORK ON BreadCrumbs
  return (
    <div className="relative grid h-full grid-cols-12">
      <div className="col-span-2 h-screen p-5 border-r flex flex-col justify-between shadow-xl w-full">
        <div className="flex flex-col gap-5">
          <div className="w-full text-center font-semibold">
            The Language Network
          </div>
          <hr />
          <div className="w-full text-start font-medium">
            {NavData.map((data, i) => (
              <>
                <Link
                  key={i}
                  href={data.Link}
                  className="flex items-center gap-2 py-5 pl-2 rounded-lg hover:bg-transparent/15 bg-transparent"
                >
                  <FontAwesomeIcon className="h-6 w-6" icon={data.Icon} />{" "}
                  <span>{data.Title}</span>
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="w-full text-center">
          <hr />
          <div className="p-2 mt-2">LogOut</div>
        </div>
      </div>
      <div className="col-span-10 w-full">
        {/* <Breadcrumbs paths={NavData} /> */}
        {children}
        {/* <NavButtons /> */}
      </div>
    </div>
  );
};

export default SideBar;
