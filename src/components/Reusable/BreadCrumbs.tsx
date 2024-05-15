"use client";
import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ paths }: any) => {
  const data = paths;
  console.log(paths);
  return (
    <nav className="flex">
      <div className="list-none p-0 flex">
        {paths.map((path: any, index: any) => (
          <li key={index} className="flex items-center">
            <Link
              to={path.Link} // Replace with actual URL or route path
              className="text-blue-500 hover:text-blue-700 transition-colors duration-200"
            >
              {path.Title}
            </Link>
            {/* {index < paths.length - 1 && ( */}
            <svg
              className="h-5 w-5 mx-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M9.293 4.293a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V14a1 1 0 11-2 0V7.414L5.707 9.707a1 1 0 01-1.414-1.414l4-4zM6 12a1 1 0 100 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            {/* )} */}
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;
