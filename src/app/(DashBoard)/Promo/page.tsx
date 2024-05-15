// page.j
"use client";
import React, { useState } from "react";

const page = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 border rounded-lg shadow-lg">
      <label htmlFor="inputData" className="block mb-2 font-bold text-gray-700">
        Promo Bar:
      </label>
      <input
        type="text"
        id="inputData"
        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="">
        <section className="rounded-lg overflow-hidden">
          <div className="bg-black flex items-center justify-center h-[30px] lg:h-[48px] w-full">
            <h1 className=" text-[#158487] 2xl:text-[16px] xl:text-[14px] text-[10px] md:text-base text-xs font-bold">
              {inputValue ? (
                inputValue
              ) : (
                <>
                  <span className="font-normal">
                    DELF /Goethe Exam Schedule
                  </span>{" "}
                  | Batches Starting Now!
                </>
              )}
            </h1>
          </div>
        </section>
      </div>
        <div className="flex justify-start items-center gap-5">
          <button className="py-2 px-4 rounded-lg border">cancel</button>
          <button className="py-2 px-4 text-white rounded-lg border bg-[#349de3]">Update</button>
        </div>
    </div>
  );
};

export default page;
