"use client";
import React, { useState } from "react";

const Page = () => {
  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 border rounded-lg shadow-lg">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
         For Kids Page:
      </label>
      {/* FAQ&apos;s */}
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-5">
          <label
            htmlFor="inputData"
            className="block mb-2 text-xl font-light text-gray-700"
          >
            FAQ&apos;s:
          </label>
          <input
            id="question"
            type="text"
            placeholder="Write your Question here..."
            className="p-2 rounded-md border"
          />
          <textarea
            id="Answer"
            placeholder="Write your Answer here..."
            className=" p-2 rounded-md border"
          />
        </div>
        <div className="flex w-full gap-5">
          <button className="border rounded-md p-2">cancel</button>
          <button className="border rounded-md p-2">Add</button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <div className="w-full flex flex-col gap-5">
          <label
            htmlFor="inputData"
            className="block mb-2 text-xl font-light text-gray-700"
          >
            Everything you need to know section:
          </label>
          <input
            id="question"
            type="text"
            placeholder="Write your Question here..."
            className="p-2 rounded-md border"
          />
          <textarea
            id="Answer"
            placeholder="Write your Answer here..."
            className=" p-2 rounded-md border"
          />
        </div>
        <div className="flex w-full gap-5">
          <button className="border rounded-md p-2">cancel</button>
          <button className="border rounded-md p-2">Add</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
