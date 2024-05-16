"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const initialData = {
    engagement: [
      { title: "Engagement 1", lastUpdated: "2024-05-14" },
      { title: "Engagement 2", lastUpdated: "2024-05-13" },
    ],
    components: [
      { title: "About", lastUpdated: "2024-05-12" },
      { title: "Promo", lastUpdated: "2024-05-11" },
      { title: "Stats Bar", lastUpdated: "2024-05-10" },
      { title: "News Section", lastUpdated: "2024-05-09" },
    ],
    pages: [
      {
        title: "English",
        lastUpdated: "2024-05-08",
        link: "/Language/English/Home",
      },
      {
        title: "French",
        lastUpdated: "2024-05-07",
        link: "/Language/French/Home",
      },
      {
        title: "German",
        lastUpdated: "2024-05-06",
        link: "/Language/German/Home",
      },
      {
        title: "Mandarin",
        lastUpdated: "2024-05-05",
        link: "/Language/Mandarin/Home",
      },
      {
        title: "Japanese",
        lastUpdated: "2024-05-04",
        link: "/Language/Japanese/Home",
      },
      {
        title: "Korean",
        lastUpdated: "2024-05-03",
        link: "/Language/Korean/Home",
      },
      {
        title: "Spanish",
        lastUpdated: "2024-05-02",
        link: "/Language/Spanish/Home",
      },
    ],
  };
  return (
    <div className="w-auto h-auto m-5 flex flex-col gap-5">
      <div className="ml-6 text-2xl">Engagements On The Language Network:</div>

      <div className="m-5 w-auto h-auto gap-5 flex">
        {initialData.engagement.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg w-full p-5 hover:shadow-md transition duration-300"
          >
            <div className="font-semibold text-xl">{item.title}</div>
            <div className="font-light">Last Updated: {item.lastUpdated}</div>
          </div>
        ))}
      </div>
      <div className="ml-6 text-2xl">Edit Components:</div>
      <div className="m-5 w-auto h-auto gap-5 flex">
        {initialData.components.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg w-full p-5 hover:shadow-md transition duration-300"
          >
            <div className="font-semibold text-xl">{item.title}</div>
            <div className="font-light">Last Updated: {item.lastUpdated}</div>
          </div>
        ))}
      </div>
      <div className="ml-6 text-2xl">Edit Pages:</div>
      <div className="m-5 w-auto h-auto gap-5 flex">
        {initialData.pages.map((item, index) => (
          <Link
            href={item.link}
            key={index}
            className="border rounded-lg w-full p-5 hover:shadow-md transition duration-300"
          >
            <div className="font-semibold text-xl">{item.title}</div>
            <div className="font-light">Last Updated: {item.lastUpdated}</div>
          </Link>
        ))}
      </div>
      <div className="m-5 w-auto h-auto gap-5 flex">
        <div className="border flex justify-center items-center rounded-lg w-full p-5">
          <div className="text-xl">Add Another Language</div>
        </div>
      </div>
    </div>
  );
}
