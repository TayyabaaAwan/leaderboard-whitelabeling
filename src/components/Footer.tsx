import { use } from "echarts/core";
import React, { useState } from "react";

const Footer = () => {
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);

  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div
              id="custom_html-3"
              className="widget_text widget-container widget_custom_html"
            >
              <div className="textwidget custom-html-widget">
                <div className="companyInfo">
                  <p>
                    Got an idea? Let our experts handle it for you at affordable
                    prices and timely deliverables. Contact us and consider it
                    done!
                  </p>
                  <div className="socialIcons">
                    <h3 className="footer-title">Find us on</h3>
                    <ul className="footer_social">
                      <li>
                        <a
                          href="https://www.facebook.com/ilsainteractiveriyadh"
                          target="_blank"
                          rel="noopener"
                        >
                          <span>
                            <i
                              className="fa fa-facebook-f"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="" target="_blank" rel="noopener">
                          <span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="1em"
                              viewBox="0 0 512 512"
                            >
                              <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.pinterest.com/Ilsa_Interactive/ "
                          target="_blank"
                          rel="noopener"
                        >
                          <span>
                            <i
                              className="fa fa-pinterest-p"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.linkedin.com/company/ilsainteractive/mycompany/ "
                          target="_blank"
                          rel="noopener"
                        >
                          <span>
                            <i
                              className="fa fa-linkedin"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/ilsa.interactive/?igshid=1tb3zjr00x4v "
                          target="_blank"
                          rel="noopener"
                        >
                          <span>
                            <i
                              className="fa fa-instagram"
                              aria-hidden="true"
                            ></i>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="footerMenu">
              <div id="nav_menu-2" className="widget-container widget_nav_menu">
                <h3 className="widget-title">Company</h3>
                <nav className="menu-main-menu-container" aria-label="Company">
                  <ul id="menu-main-menu-1" className="menu">
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-9">
                      <a href="/" aria-current="page">
                        Home
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom current-menu-item current_page_item menu-item-home menu-item-10">
                      <a href="/" aria-current="page">
                        About Us
                      </a>
                    </li>
                    <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-11">
                      <a href="/">Services</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div
              id="custom_html-2"
              className="widget_text widget-container widget_custom_html"
            >
              <div className="textwidget custom-html-widget">
                <div className="addressBlock">
                  <h3 className="footer-title">Our Office</h3>
                  <ul className="fa-ul">
                    <li className="address1">
                      <noscript>
                        <img
                          decoding="async"
                          src="/wp-content/uploads/2023/06/ni-03.svg"
                        />
                      </noscript>
                      <img
                        decoding="async"
                        className=" lazyloaded"
                        src="/wp-content/uploads/2023/06/ni-03.svg"
                        data-src="/wp-content/uploads/2023/06/ni-03.svg"
                      />
                      <span>
                        387 Park Avenue South, 5th Floor New York, NY 10016
                        United States
                      </span>
                    </li>
                    <li>
                      <noscript>
                        <img
                          decoding="async"
                          src="/wp-content/uploads/2023/06/ni-01-1.svg"
                        />
                      </noscript>
                      <img
                        decoding="async"
                        className=" lazyloaded"
                        src="/wp-content/uploads/2023/06/ni-01-1.svg"
                        data-src="/wp-content/uploads/2023/06/ni-01-1.svg"
                      />
                      <a href="">info@hyfatech.com</a>
                    </li>
                    <li>
                      <noscript>
                        <img
                          decoding="async"
                          src="/wp-content/uploads/2023/06/ni-02.svg"
                        />
                      </noscript>
                      <img
                        decoding="async"
                        className=" lazyloaded"
                        src="/wp-content/uploads/2023/06/ni-02.svg"
                        data-src="/wp-content/uploads/2023/06/ni-02.svg"
                      />
                      <a href="">info@hyfatech.com</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
