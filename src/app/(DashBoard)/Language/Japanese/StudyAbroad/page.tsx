"use client";
import FormSection from "@/components/Reusable/FormSection";
import React, { useState } from "react";

const Page = () => {
  const handleFAQSubmit = (formData: any) => {
    console.log("FAQ Form Data:", formData);
    // You can perform further actions with the form data, such as sending it to a server
  };

  const handleInfoSectionSubmit = (formData: any) => {
    console.log("Info Section Form Data:", formData);
    // You can perform further actions with the form data, such as sending it to a server
  };
  return (
    <div className="w-full h-full flex flex-col gap-5 p-4">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        Study Abroad Page:
      </label>
      {/* FAQ&apos;s */}
      <FormSection title="FAQ&apos;s" onSubmit={handleFAQSubmit} />
      <FormSection
        title="Everything you need to know section"
        onSubmit={handleInfoSectionSubmit}
      />
    </div>
  );
};

export default Page;
