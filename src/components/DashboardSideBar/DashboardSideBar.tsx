import React, { useEffect, useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Images } from "../Config/Images";
import { useDispatch } from "react-redux";
import { authSlice } from "../../redux/apis/apisSlics";

import { Link } from "react-router-dom";
import { Theme } from "../Config/Theme";
import AuthService from "../../services/AuthService";

const DasbhboardSidebar = () => {
  const dispatch = useDispatch();
  dispatch(authSlice.actions.checkRedux("14"));
  const [toggled, setToggled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeBar, setActiveBar] = useState();
  const [sidebarLinksApi, setSidebarLinksApi] = useState([]);
  const [sidebarLinksApiCompliance, setSidebarLinksApiCompliance] = useState(
    []
  );
  const [sidebarLinks, setSidebarLinks] = useState([]);
  console.log(sidebarLinks, "side");
  let sidebarmenu = async () => {
    let res = await AuthService.get("http://localhost:3015/get/sidebar");
    if (res) {
      console.log(res.data.sidebarWithdashboard);
      setSidebarLinksApi(res.data.sidebarWithdashboard);
      setSidebarLinks(res.data.sidebarWithdashboard);
      setSidebarLinksApiCompliance(res.data.sidebarwithcompliance);
      console.log(sidebarLinksApi, "api");
    }
  };
  useEffect(() => {
    sidebarmenu();
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const onSmash = (item: any) => {
    setActiveBar(item);

    // Update the links when Contact is clicked
    {
      item == "Compliance Dashboard"
        ? setSidebarLinksApi(sidebarLinksApiCompliance)
        : setSidebarLinksApi(sidebarLinks);
    }
  };

  const renderSubmenu = (item: any) => (
    <>
      <div className="menu-items">
        <SubMenu
          prefix={
            <img src={item.img} style={{ background: "none", color: "#fff" }} />
          }
          key={item.label}
          label={item.label}
        >
          <>
            {item.menu.map((submenuItem: any, subIndex: any) => (
              <Link
                to={`${submenuItem.Link}`}
                style={{
                  color: "#fff",
                  textDecoration: "none",
                  fontSize: "12px",
                }}
              >
                <MenuItem
                  key={subIndex}
                  style={{ fontSize: "12px" }}
                  onClick={() => {
                    setToggled(false);
                  }}
                >
                  {submenuItem.subMenu}
                </MenuItem>
              </Link>
            ))}
          </>
          {/* )} */}
        </SubMenu>
      </div>
    </>
  );

  return (
    <>
      <div>
        {isMobile && (
          <button className="bar-btn" onClick={() => setToggled(!toggled)}>

          </button>
        )}
        <Sidebar
          transitionDuration={1000}
          onBackdropClick={() => setToggled(false)}
          toggled={toggled}
          customBreakPoint="768px"
          collapsedWidth="80px"
          width="100%"
          color={Theme.TextColor}
          backgroundColor={Theme.BackgroundColor}
          className="col-12 fw-bold menu-items"
          style={{ fontSize: "14px", color: "#fff" }}
        >
          <div className="d-flex justify-content-center p-1 pt-4">
            <img
              src={Images.sidebarLogo}
              alt="logo"
              style={{ marginBottom: "20px" }}
            />
          </div>

          <Menu>
            {sidebarLinksApi.map((item: any, index: any) => (
              <>
                <React.Fragment key={index}>
                  {item.menu ? (
                    renderSubmenu(item)
                  ) : (
                    <>
                      <div className="menu-items">
                        <Link
                          to={`${item.Link}`}
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          <MenuItem
                            active={item.label === activeBar}
                            onClick={() => {
                              setToggled(false);
                              onSmash(item.label);
                            }}
                            prefix={
                              <img
                                width={16}
                                height={16}
                                src={item.img}
                                style={{ background: "none" }}
                              />
                            }
                          >
                            {item.label}
                          </MenuItem>
                        </Link>
                      </div>
                    </>
                  )}
                </React.Fragment>
              </>
            ))}
          </Menu>
        </Sidebar>
      </div>
    </>
  );
};
export default DasbhboardSidebar;
