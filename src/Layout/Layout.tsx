import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import DasbhboardHeader from "../components/DashboardHeader/Header";
import DasbhboardSidebar from "../components/DashboardSideBar/DashboardSideBar";
import { Images } from "../components/Config/Images";
import Footer from "../components/Footer";

const Layout = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div
        className={`flex ${isMobile ? "sidebar-mobile" : "side-bar"}`}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div className={"d-flex col-md-12"}>
          {/* <div className={`flex ${isMobile ? "" : "colOne"}`}>
            <DasbhboardSidebar />
          </div> */}
          <div className={"col-12"}>
            <DasbhboardHeader />
            <div className="d-flex justify-content-center">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Layout;
