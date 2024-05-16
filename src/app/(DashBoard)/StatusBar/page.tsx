"use client";
import StatusBar from "@/components/Status";
import PromoBar from "@/components/Status";
import React, { ChangeEventHandler, useState } from "react";

const Page = () => {
  const [languages, setLanguages] = useState<number>(7);
  const [learners, setLearners] = useState<number>(5000);
  const [alphaMentors, setAlphaMentors] = useState<number>(150);
  const [hoursOfEnlightenment, setHoursOfEnlightenment] =
    useState<number>(50000);
  const [googleReviews, setGoogleReviews] = useState<number>(4.9);

  const handleLanguagesChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setLanguages(value);
    }
  };

  const handleLearnersChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setLearners(value);
    }
  };

  const handleAlphaMentorsChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setAlphaMentors(value);
    }
  };

  const handleHoursOfEnlightenmentChange: ChangeEventHandler<
    HTMLInputElement
  > = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value)) {
      setHoursOfEnlightenment(value);
    }
  };

  const handleGoogleReviewsChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = parseFloat(event.target.value);
    if (!isNaN(value)) {
      setGoogleReviews(value);
    }
  };

  const handleUpdate = () => {
    // Perform any validation or additional logic before updating the state
  };

  const StatusBarData = {
    Languages: languages,
    HappyLearners: learners,
    AlphaMentors: alphaMentors,
    HoursOfEnlightenment: hoursOfEnlightenment,
    GoogleReviewsRating: googleReviews,
  };
  return (
    <div className="w-full h-full flex flex-col gap-5 p-4 border rounded-lg shadow-lg">
      <label
        htmlFor="inputData"
        className="block mb-2 text-3xl font-bold text-gray-700"
      >
        Stats Bar:
      </label>{" "}
      <div className="w-full flex flex-col gap-5">
        <div className="flex  flex-wrap  gap-5 items-center">
          <div>
            <label
              htmlFor="inputData"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Languages
            </label>
            <input
              id="languages"
              type="number"
              value={languages}
              onChange={handleLanguagesChange}
              placeholder="Update no. of Languages"
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="inputData"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Learners
            </label>
            <input
              value={learners}
              onChange={handleLearnersChange}
              id="learners"
              type="number"
              placeholder="Update no. of Learners"
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="inputData"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Alpha Mentors
            </label>
            <input
              value={alphaMentors}
              onChange={handleAlphaMentorsChange}
              id="alphaMentors"
              type="number"
              placeholder="Update no. of Alpha Mentors"
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="inputData"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Hours of Enlightenment
            </label>
            <input
              value={hoursOfEnlightenment}
              onChange={handleHoursOfEnlightenmentChange}
              id="hoursOfEnlightenment"
              type="number"
              placeholder="Update no. of Hours of Enlightenment"
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="inputData"
              className="block mb-2 text-xl font-light text-gray-700"
            >
              Google Reviews
            </label>
            <input
              value={googleReviews}
              onChange={handleGoogleReviewsChange}
              id="googleReviews"
              type="number"
              placeholder="Update Google Reviews Rating"
              className="p-2 rounded-md border focus:outline-none"
            />
          </div>
        </div>
      </div>
      <StatusBar data={StatusBarData} />{" "}
      <div className="flex w-full gap-5">
        <button className="border rounded-md p-2">cancel</button>
        <button className="border rounded-md p-2" onClick={handleUpdate}>
          Update
        </button>
      </div>
    </div>
  );
};

export default Page;
