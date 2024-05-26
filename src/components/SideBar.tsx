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
import BreadCrumbs from "./Reusable/BreadCrumbs";
import Image from "next/image";
import Logo from "@/assets/image 2.svg";

const SideBar = ({ children }: { children: React.ReactNode }) => {
  const NavData = [
    {
      Title: "Home",
      Link: "/",
      Icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 17.3213C8.80109 17.3213 8.61032 17.4003 8.46967 17.541C8.32902 17.6816 8.25 17.8724 8.25 18.0713C8.25 18.2702 8.32902 18.461 8.46967 18.6016C8.61032 18.7423 8.80109 18.8213 9 18.8213H15C15.1989 18.8213 15.3897 18.7423 15.5303 18.6016C15.671 18.461 15.75 18.2702 15.75 18.0713C15.75 17.8724 15.671 17.6816 15.5303 17.541C15.3897 17.4003 15.1989 17.3213 15 17.3213H9Z"
            fill="#79716B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 1.32129C11.275 1.32129 10.613 1.52129 9.89001 1.85829C9.18801 2.18529 8.37801 2.66829 7.36201 3.27329L5.90601 4.14029C4.78701 4.80729 3.89601 5.33829 3.22001 5.84629C2.52301 6.37129 2.00001 6.91129 1.66001 7.62229C1.31801 8.33329 1.22601 9.07829 1.25501 9.94729C1.28401 10.7883 1.43101 11.8113 1.61501 13.0933L1.90801 15.1253C2.14501 16.7753 2.33401 18.0843 2.61501 19.1033C2.90501 20.1533 3.31701 20.9883 4.06001 21.6273C4.80201 22.2673 5.69001 22.5523 6.77601 22.6893C7.83201 22.8213 9.16301 22.8213 10.842 22.8213H13.158C14.838 22.8213 16.168 22.8213 17.224 22.6893C18.31 22.5523 19.198 22.2673 19.94 21.6283C20.683 20.9883 21.095 20.1543 21.385 19.1033C21.666 18.0833 21.855 16.7753 22.092 15.1253L22.384 13.0933C22.569 11.8113 22.716 10.7883 22.744 9.94729C22.774 9.07729 22.682 8.33329 22.341 7.62229C22 6.91129 21.477 6.37129 20.78 5.84629C20.105 5.33829 19.213 4.80729 18.094 4.14029L16.638 3.27329C15.622 2.66829 14.812 2.18529 14.111 1.85829C13.387 1.52029 12.725 1.32129 12 1.32129ZM8.09601 4.58229C9.15301 3.95229 9.89901 3.50929 10.524 3.21729C11.133 2.93329 11.571 2.82129 12 2.82129C12.43 2.82129 12.867 2.93329 13.476 3.21729C14.101 3.50929 14.846 3.95229 15.904 4.58229L17.289 5.40729C18.454 6.10129 19.275 6.59129 19.879 7.04529C20.466 7.48829 20.789 7.85429 20.989 8.27029C21.188 8.68629 21.271 9.16429 21.246 9.89629C21.22 10.6463 21.086 11.5873 20.894 12.9223L20.614 14.8593C20.368 16.5733 20.192 17.7873 19.939 18.7043C19.692 19.6003 19.394 20.1193 18.962 20.4913C18.529 20.8643 17.968 21.0843 17.037 21.2013C16.086 21.3203 14.849 21.3213 13.107 21.3213H10.894C9.15101 21.3213 7.91401 21.3203 6.96301 21.2013C6.03301 21.0843 5.47101 20.8643 5.03801 20.4913C4.60601 20.1193 4.30801 19.6003 4.06101 18.7043C3.80801 17.7873 3.63101 16.5733 3.38501 14.8593L3.10601 12.9223C2.91401 11.5873 2.78001 10.6453 2.75401 9.89629C2.72901 9.16429 2.81201 8.68629 3.01201 8.27029C3.21201 7.85429 3.53301 7.48829 4.12201 7.04529C4.72501 6.59129 5.54601 6.10129 6.71101 5.40729L8.09601 4.58229Z"
            fill="#79716B"
          />
        </svg>
      ),
    },
    {
      Title: "About",
      Link: "/About",
      Icon: (
        <svg
          width="16"
          height="10"
          viewBox="0 0 16 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.75 0H15.25C15.4489 0 15.6397 0.0790175 15.7803 0.21967C15.921 0.360322 16 0.551088 16 0.75C16 0.948912 15.921 1.13968 15.7803 1.28033C15.6397 1.42098 15.4489 1.5 15.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790176 1.13968 0 0.948912 0 0.75C0 0.551088 0.0790176 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0ZM3 4.75C3 4.55109 3.07902 4.36032 3.21967 4.21967C3.36032 4.07902 3.55109 4 3.75 4H12.25C12.4489 4 12.6397 4.07902 12.7803 4.21967C12.921 4.36032 13 4.55109 13 4.75C13 4.94891 12.921 5.13968 12.7803 5.28033C12.6397 5.42098 12.4489 5.5 12.25 5.5H3.75C3.55109 5.5 3.36032 5.42098 3.21967 5.28033C3.07902 5.13968 3 4.94891 3 4.75ZM6 8.75C6 8.55109 6.07902 8.36032 6.21967 8.21967C6.36032 8.07902 6.55109 8 6.75 8H9.25C9.44891 8 9.63968 8.07902 9.78033 8.21967C9.92098 8.36032 10 8.55109 10 8.75C10 8.94891 9.92098 9.13968 9.78033 9.28033C9.63968 9.42098 9.44891 9.5 9.25 9.5H6.75C6.55109 9.5 6.36032 9.42098 6.21967 9.28033C6.07902 9.13968 6 8.94891 6 8.75Z"
            fill="#44403C"
          />
        </svg>
      ),
    },
    {
      Title: "Promo",
      Link: "/Promo",
      Icon: (
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.6063 4.73156L14.7937 2.54406C15.3625 1.97528 16.0378 1.52409 16.7809 1.21626C17.5241 0.908436 18.3206 0.75 19.125 0.75C19.9294 0.75 20.7259 0.908436 21.4691 1.21626C22.2122 1.52409 22.8875 1.97527 23.4562 2.54406C24.025 3.11285 24.4762 3.7881 24.784 4.53126C25.0919 5.27441 25.2503 6.07092 25.2503 6.87531C25.2503 7.6797 25.0919 8.47621 24.784 9.21937C24.4762 9.96253 24.025 10.6378 23.4562 11.2066L19.0812 15.5816C18.5125 16.1504 17.8372 16.6016 17.0941 16.9095C16.3509 17.2173 15.5544 17.3758 14.75 17.3758C13.9456 17.3758 13.1491 17.2173 12.4059 16.9095C11.6628 16.6016 10.9875 16.1504 10.4188 15.5816C10.187 15.3326 10.0609 15.0035 10.0667 14.6635C10.0726 14.3234 10.2101 13.9989 10.4502 13.7581C10.6911 13.5179 11.0156 13.3804 11.3556 13.3745C11.6957 13.3687 12.0248 13.4948 12.2737 13.7266C12.5986 14.0524 12.9845 14.3109 13.4094 14.4873C13.8344 14.6637 14.2899 14.7545 14.75 14.7545C15.2101 14.7545 15.6656 14.6637 16.0906 14.4873C16.5155 14.3109 16.9014 14.0524 17.2262 13.7266L21.6012 9.35156C22.226 8.6884 22.5679 7.80793 22.5543 6.89691C22.5408 5.98589 22.1728 5.11599 21.5286 4.47173C20.8843 3.82747 20.0144 3.45954 19.1034 3.44597C18.1924 3.4324 17.3119 3.77427 16.6487 4.39906L14.4612 6.58656C14.2123 6.81828 13.8832 6.94446 13.5431 6.93858C13.2031 6.93271 12.8786 6.79524 12.6377 6.55506C12.3976 6.31426 12.2601 5.98972 12.2542 5.64967C12.2484 5.30961 12.3745 4.98052 12.6063 4.73156ZM4.39875 21.6016C4.72357 21.9274 5.1095 22.1859 5.53443 22.3623C5.95935 22.5387 6.41492 22.6295 6.875 22.6295C7.33508 22.6295 7.79064 22.5387 8.21557 22.3623C8.64049 22.1859 9.02643 21.9274 9.35125 21.6016L11.5387 19.4141C11.7877 19.1823 12.1168 19.0562 12.4569 19.062C12.7969 19.0679 13.1214 19.2054 13.3622 19.4456C13.6024 19.6864 13.7399 20.0109 13.7458 20.351C13.7516 20.691 13.6255 21.0201 13.3938 21.2691L11.2063 23.4566C10.6375 24.0254 9.96221 24.4765 9.21906 24.7844C8.4759 25.0922 7.67939 25.2506 6.875 25.2506C5.25047 25.2506 3.69247 24.6053 2.54375 23.4566C1.39503 22.3078 0.749687 20.7498 0.749687 19.1253C0.749687 17.5008 1.39503 15.9428 2.54375 14.7941L6.91875 10.4191C7.48752 9.85024 8.16276 9.39902 8.90592 9.09117C9.64908 8.78332 10.4456 8.62487 11.25 8.62487C12.0544 8.62487 12.8509 8.78332 13.5941 9.09117C14.3372 9.39902 15.0125 9.85024 15.5813 10.4191C15.813 10.668 15.9391 10.9971 15.9333 11.3372C15.9274 11.6772 15.7899 12.0018 15.5497 12.2426C15.3089 12.4827 14.9844 12.6202 14.6444 12.6261C14.3043 12.632 13.9752 12.5058 13.7262 12.2741C13.4014 11.9482 13.0155 11.6897 12.5906 11.5133C12.1656 11.3369 11.7101 11.2461 11.25 11.2461C10.7899 11.2461 10.3344 11.3369 9.90943 11.5133C9.4845 11.6897 9.09857 11.9482 8.77375 12.2741L4.39875 16.6491C4.07291 16.9739 3.81439 17.3598 3.63799 17.7847C3.46159 18.2097 3.37079 18.6652 3.37079 19.1253C3.37079 19.5854 3.46159 20.041 3.63799 20.4659C3.81439 20.8908 4.07291 21.2767 4.39875 21.6016Z"
            fill="#1C1917"
          />
        </svg>
      ),
    },
    {
      Title: "Stats Bar",
      Link: "/StatusBar",
      Icon: (
        <svg
          width="20"
          height="22"
          viewBox="0 0 20 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6478 15.1962C19.7469 15.3681 19.7738 15.5723 19.7226 15.764C19.6715 15.9557 19.5465 16.1193 19.375 16.219L10.375 21.469C10.2603 21.5359 10.1299 21.5711 9.99719 21.5711C9.86443 21.5711 9.73406 21.5359 9.61938 21.469L0.619375 16.219C0.450338 16.1174 0.328111 15.9534 0.279156 15.7623C0.230202 15.5713 0.25846 15.3687 0.357813 15.1983C0.457166 15.028 0.619617 14.9036 0.809996 14.8521C1.00037 14.8007 1.20336 14.8263 1.375 14.9234L10 19.9531L18.625 14.9234C18.7969 14.8243 19.0011 14.7974 19.1927 14.8486C19.3844 14.8997 19.5481 15.0247 19.6478 15.1962ZM18.625 10.4234L10 15.4531L1.375 10.4234C1.20423 10.3384 1.00748 10.3216 0.824786 10.3765C0.642097 10.4315 0.487203 10.5539 0.391631 10.719C0.296059 10.8841 0.266993 11.0795 0.310348 11.2652C0.353703 11.451 0.466221 11.6133 0.625 11.719L9.625 16.969C9.73968 17.0359 9.87006 17.0711 10.0028 17.0711C10.1356 17.0711 10.2659 17.0359 10.3806 16.969L19.3806 11.719C19.4671 11.6701 19.5429 11.6045 19.6038 11.5261C19.6647 11.4476 19.7094 11.3578 19.7353 11.2619C19.7612 11.1661 19.7679 11.066 19.7548 10.9675C19.7417 10.8691 19.7092 10.7742 19.6592 10.6884C19.6091 10.6026 19.5426 10.5276 19.4633 10.4678C19.384 10.4079 19.2937 10.3644 19.1975 10.3397C19.1013 10.3151 19.0011 10.3098 18.9028 10.3241C18.8046 10.3385 18.7101 10.3722 18.625 10.4234ZM0.25 6.57121C0.250299 6.43985 0.285096 6.31087 0.350907 6.19718C0.416718 6.08349 0.511236 5.98908 0.625 5.9234L9.625 0.673402C9.73968 0.606527 9.87006 0.571289 10.0028 0.571289C10.1356 0.571289 10.2659 0.606527 10.3806 0.673402L19.3806 5.9234C19.4938 5.98945 19.5878 6.08402 19.6531 6.19769C19.7183 6.31135 19.7527 6.44014 19.7527 6.57121C19.7527 6.70229 19.7183 6.83108 19.6531 6.94474C19.5878 7.0584 19.4938 7.15298 19.3806 7.21903L10.3806 12.469C10.2659 12.5359 10.1356 12.5711 10.0028 12.5711C9.87006 12.5711 9.73968 12.5359 9.625 12.469L0.625 7.21903C0.511236 7.15335 0.416718 7.05894 0.350907 6.94525C0.285096 6.83156 0.250299 6.70258 0.25 6.57121ZM2.48875 6.57121L10 10.9531L17.5112 6.57121L10 2.18934L2.48875 6.57121Z"
            fill="#79716B"
          />
        </svg>
      ),
    },
    {
      Title: "News Section",
      Link: "/News",
      Icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 0C5.37262 0 0 5.37262 0 12C0 18.6274 5.37262 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37262 18.6274 0 12 0ZM15 1.94475C18.3802 2.95237 21.0386 5.61975 22.0477 8.99998H17.1829C16.6566 8.09608 15.9043 7.34451 15 6.81898V1.94475ZM16.4914 12.0049C16.4914 14.4878 14.4806 16.5004 12 16.5004C9.5194 16.5004 7.50865 14.4878 7.50865 12.0049C7.50865 9.522 9.51977 7.50902 12 7.50902C14.4803 7.50902 16.4914 9.52202 16.4914 12.0049ZM10.5 1.6155C10.9901 1.54537 11.4904 1.50713 12 1.50713C12.5092 1.50713 13.0099 1.54537 13.5 1.6155V6.20475C13.02 6.08063 12.519 6.00787 12 6.00787C11.481 6.00787 10.9804 6.08063 10.5 6.20475V1.6155ZM9.00002 1.94475V6.819C8.09627 7.34363 7.34252 8.09737 6.81715 9H1.95227C2.96102 5.61975 5.61977 2.9524 9.00002 1.94475ZM1.50715 12.0037C1.50715 11.4922 1.55062 10.992 1.62152 10.5H6.20102C6.07652 10.9807 6.0079 11.4839 6.0079 12.0041C6.0079 12.5212 6.07615 13.0219 6.19915 13.5H1.6204C1.55067 13.0106 1.50715 12.5122 1.50715 12.0037ZM9 22.0623C5.61713 21.0543 2.95765 18.3832 1.95002 15H6.81265C7.3384 15.906 8.09363 16.6627 9 17.1889V22.0624V22.0623ZM13.5 22.3916C13.0099 22.4617 12.5092 22.4999 12 22.4999C11.4904 22.4999 10.9901 22.4613 10.5 22.3916V17.8031C10.9804 17.9272 11.481 17.9999 12 17.9999C12.519 17.9999 13.02 17.9272 13.5 17.8031V22.3916ZM15 22.0623V17.1888C15.906 16.6627 16.6617 15.906 17.187 15H22.0497C21.042 18.3828 18.3825 21.0543 15 22.0623L15 22.0623ZM17.8009 13.5C17.9239 13.0218 17.9921 12.5212 17.9921 12.0041C17.9921 11.4839 17.9235 10.9807 17.7986 10.4999H22.3785C22.449 10.9919 22.4929 11.4922 22.4929 12.0037C22.4929 12.5122 22.4498 13.011 22.3796 13.5H17.8009Z"
            fill="#79716B"
          />
        </svg>
      ),
    },
    {
      Title: "Language Pages",
      Link: "/Language",
      Icon: (
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.5762 10.5502C17.6979 10.3968 17.7548 10.2019 17.7347 10.0071C17.7146 9.81236 17.6192 9.63317 17.4688 9.50782C17.3184 9.38248 17.1249 9.32092 16.9297 9.33631C16.7345 9.35169 16.5531 9.4428 16.4242 9.59016L14.6272 11.7462C14.2572 12.1912 14.0282 12.4622 13.8412 12.6312C13.7925 12.6789 13.7377 12.7199 13.6782 12.7532L13.6672 12.7582L13.6562 12.7532C13.5963 12.72 13.5412 12.679 13.4922 12.6312C13.3052 12.4612 13.0772 12.1912 12.7062 11.7462L12.4142 11.3962C12.0852 11.0012 11.7892 10.6462 11.5132 10.3962C11.2122 10.1242 10.8332 9.88216 10.3332 9.88216C9.83318 9.88216 9.45518 10.1242 9.15318 10.3962C8.87718 10.6462 8.58118 11.0012 8.25318 11.3962L6.42318 13.5902C6.36015 13.6659 6.31264 13.7532 6.28338 13.8473C6.25411 13.9414 6.24366 14.0403 6.25262 14.1384C6.27072 14.3365 6.36678 14.5194 6.51968 14.6467C6.67258 14.774 6.86978 14.8353 7.06792 14.8172C7.26605 14.7991 7.44888 14.7031 7.57618 14.5502L9.37318 12.3942C9.74318 11.9492 9.97218 11.6782 10.1592 11.5092C10.2078 11.4614 10.2626 11.4204 10.3222 11.3872L10.3332 11.3822L10.3442 11.3872C10.404 11.4203 10.4592 11.4614 10.5082 11.5092C10.6952 11.6792 10.9232 11.9492 11.2942 12.3942L11.5862 12.7442C11.9152 13.1392 12.2112 13.4942 12.4872 13.7442C12.7882 14.0162 13.1672 14.2582 13.6672 14.2582C14.1672 14.2582 14.5452 14.0162 14.8472 13.7442C15.1232 13.4942 15.4192 13.1392 15.7472 12.7442L17.5762 10.5502Z"
            fill="#79716B"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.943 1.32031C9.634 1.32031 7.825 1.32031 6.413 1.51031C4.969 1.70431 3.829 2.11031 2.934 3.00431C2.039 3.89931 1.634 5.03931 1.44 6.48431C1.25 7.89531 1.25 9.70431 1.25 12.0133V12.1273C1.25 14.4363 1.25 16.2453 1.44 17.6573C1.634 19.1013 2.04 20.2413 2.934 21.1363C3.829 22.0313 4.969 22.4363 6.414 22.6303C7.825 22.8203 9.634 22.8203 11.943 22.8203H12.057C14.366 22.8203 16.175 22.8203 17.587 22.6303C19.031 22.4363 20.171 22.0303 21.066 21.1363C21.961 20.2413 22.366 19.1013 22.56 17.6563C22.75 16.2453 22.75 14.4363 22.75 12.1273V12.0133C22.75 9.70431 22.75 7.89531 22.56 6.48331C22.366 5.03931 21.96 3.89931 21.066 3.00431C20.171 2.10931 19.031 1.70431 17.586 1.51031C16.175 1.32031 14.366 1.32031 12.057 1.32031H11.943ZM3.995 4.06531C4.565 3.49531 5.335 3.16831 6.614 2.99631C7.914 2.82231 9.622 2.82031 12 2.82031C14.378 2.82031 16.086 2.82231 17.386 2.99631C18.665 3.16831 19.436 3.49631 20.006 4.06531C20.575 4.63531 20.902 5.40531 21.074 6.68431C21.248 7.98431 21.25 9.69231 21.25 12.0703C21.25 14.4483 21.248 16.1563 21.074 17.4563C20.902 18.7353 20.574 19.5063 20.005 20.0763C19.435 20.6453 18.665 20.9723 17.386 21.1443C16.086 21.3183 14.378 21.3203 12 21.3203C9.622 21.3203 7.914 21.3183 6.614 21.1443C5.335 20.9723 4.564 20.6443 3.994 20.0753C3.425 19.5053 3.098 18.7353 2.926 17.4563C2.752 16.1563 2.75 14.4483 2.75 12.0703C2.75 9.69231 2.752 7.98431 2.926 6.68431C3.098 5.40531 3.426 4.63531 3.995 4.06531Z"
            fill="#79716B"
          />
        </svg>
      ),
    },
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
          <div className="w-full pb-1 flex items-center justify-center text-center font-semibold">
            <Image src={Logo} alt="Logo" />
          </div>
          <hr />
          <div className="w-full text-start font-medium">
            {NavData.map((data, i) => (
              <Link
                key={i}
                href={data.Link}
                className="flex items-center gap-2 py-5 pl-2 rounded-lg hover:bg-transparent/15 bg-transparent"
              >
                <>{data.Icon}</>
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

      {/* OverFlow Part */}
      <div className="h-full lg:col-span-9 col-span-12 xl:col-span-10 w-full">
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
          <div className="sidebar-content pt-2">
            {/* Links in mobile view sidebar */}
            <div className="w-full gap-5 flex justify-around items-center overflow-x-auto text-start font-medium">
              {NavData.map((data, i) => (
                <Link
                  key={i}
                  href={data.Link}
                  className="flex justify-center items-center gap-2 py-3 px-5  rounded-lg hover:bg-transparent/15 bg-transparent"
                >
                  <>{data.Icon} </>
                  {/* <span>{data.Title}</span> */}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className=" overflow-y-auto h-screen">
          <BreadCrumbs />
          <hr />
          {children}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
