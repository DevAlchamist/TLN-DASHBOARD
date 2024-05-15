import NavButtons from "@/components/Reusable/NavButtons";
import SideBar from "@/components/SideBar";
import React from "react";

const Homelayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="">
      <SideBar>
        {children}
      </SideBar>
      {/* <HomeFooter /> */}
    </div>
  );
};

export default Homelayout;
