import React, { useState } from "react";
import { Images } from "../Config/Images";
import SuperAdmin from "./SuperAdmin";
import { useLocation, useNavigate } from "react-router";
import { Modal, Nav, Navbar } from "react-bootstrap";
import { truncateSync } from "fs";
import Web3 from "web3";
import WalletConnect from "@walletconnect/client";
const DasbhboardHeader = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [showSuperAdmin, setShowSuperAdmin] = useState(false);
  const [wcConnector, setWcConnector] = useState<WalletConnect | null>(null);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [connected, setConnected] = useState(false);
  const pathname = location.pathname;

  const style = {
    color: pathname === "/projects/detail" ? "white" : "darkgray",
    fontSize: "20px", // Adjust the font size as needed
  };

  const handleUrlHome = () => {
    navigate(`/`);
  };
  const onclose = () => {
    setShow(false);
  };
  const RedirectToWebsite = () => {
    window.open(`https://www.blocjerk.com`, "_blank");
  };
  async function connectWalletMetaMask() {
    const web3 = new Web3(window.ethereum);
    console.log("hello");
    try {
      if (!window.ethereum) {
        alert("Please Install the wallet");
      } else await window.ethereum.enable();
      let accounts = await web3.eth.getAccounts();
      // dispatch(setWalletAddress(accounts[0]));
      // chainId = await web3.eth.getChainId()
      let isconnected = await window.ethereum.isConnected();
      if (isconnected) {
        console.log(isconnected, "isconnected");
        // dispatch(setwalletStatus(isconnected));
        // setConnected(true);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async function setupWalletConnect() {
    try {
      if (!wcConnector) {
        const connector = new WalletConnect({
          bridge:
            "wss://z.bridge.walletconnect.org/?env=browser&host=localhost%3A3000&protocol=wc&version=1",
        });

        connector.on("connect", (error, payload) => {
          if (error) {
            console.error("Error connecting:", error);
            return;
          }
          setConnected(true);
          console.log("Connected successfully");
          setAccounts(payload.params[0].accounts);
        });

        connector.on("session_update", (error, payload) => {
          if (error) {
            console.error("Session update error:", error);
            return;
          }
          setAccounts(payload.params[0].accounts);
        });

        connector.on("disconnect", (error, payload) => {
          if (error) {
            console.error("Error disconnecting:", error);
            return;
          }
          setConnected(false);
          setAccounts([]);
          console.log("Disconnected");
        });

        setWcConnector(connector);
      }
    } catch (error) {
      console.error("Error setting up WalletConnect:", error);
    }
  }
  return (
    <>
      <div className=" d-flex justify-content-center">
        <Navbar className="col-md-11 col-11" expand="lg">
          <Navbar.Brand href="">
            <img src="https://www.blocjerk.com/logo.svg" alt="" height={28} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link ><w3m-button /></Nav.Link> */}
              <Nav.Link>
                <div className="p-2">
                  <div
                    onClick={() => {
                      window.open(`https://www.blocjerk.com`);
                    }}
                    className="link-bg d-flex align-items-center justify-content-center"
                    style={{ padding: "12px 30px 12px 30px" }}
                  >
                    HOME
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <div className=" p-2">
                  <div
                    onClick={() => {
                      setShow(true);
                    }}
                    className="link-bg d-flex align-items-center justify-content-center"
                    style={{ padding: "12px 30px 12px 30px" }}
                  >
                    SHOP
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className=" p-2">
                  <div
                    onClick={() => {
                      window.open(`https://www.blocjerk.com/leaderboards`);
                    }}
                    className="link-bg d-flex align-items-center justify-content-center"
                    style={{ padding: "12px 30px 12px 30px" }}
                  >
                    LEADERBOARDS
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="p-2">
                  <div
                    onClick={() => {
                      window.open(`https://www.blocjerk.com/staking`);
                    }}
                    className="link-bg d-flex align-items-center justify-content-center"
                    style={{ padding: "12px 30px 12px 30px" }}
                  >
                    REWARDS
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="p-2">
                  <div
                    onClick={() => {
                      window.open(`https://bridge.ferrum.network/frm`);
                    }}
                    className="link-bg d-flex align-items-center justify-content-center"
                    style={{ padding: "12px 30px 12px 30px" }}
                  >
                    BRIDGE
                  </div>
                </div>
              </Nav.Link>
              <Nav.Link>
                <div className="p-2">
                  <div
                    onClick={() => {
                      window.open(`mailto:info@blocjerk.com`);
                    }}
                    className="link-bg d-flex align-items-center justify-content-center "
                    style={{ padding: "12px 30px 12px 30px" }}
                  >
                    CONTACT US
                  </div>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {/* <div classNameName="d-flex col-10 mobile-responsive align-items-center">
          <div className="col-6 mobile-margin-bottom" style={{ color: "white" }}>
            <img src={Images.RocketX} alt="" height={60} />
          </div>
          <div className="col-md-6 col-12 d-flex mobile-responsive" style={{ color: "white" }}>
            <div
              className="col-md-7 col-12 d-flex justify-content-end mobile-content-start mobile-margin-bottom"
              onClick={handleURL}
            >
              FREQUENCY ASKED QUESTIONS
            </div>
            <div className="col-md-5 col-12 d-flex justify-content-end mobile-content-start">
              RVF TOKEN SWAP
            </div>
          </div>
        </div> */}

        {/* <Navbar className="col-md-11 col-12" expand="lg">
          <Navbar.Brand href="">
            <img
              className="cursor-pointer"
              onClick={() => {
                RedirectToWebsite();
              }}
              src={"https://www.blocjerk.com/logo.svg"}
              alt=""
              height={30}
            />
          </Navbar.Brand>
        </Navbar> */}
        {/* {showSuperAdmin && (
          <>
            <div className="d-flex">
              <SuperAdmin />
            </div>
          </>
        )} */}
      </div>

      <Modal show={show} onHide={onclose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {/* <div className="d-flex">
              <div
                className="d-flex justify-content-center"
                style={{ fontSize: "20px", fontWeight: 700}}
              >
                Connect Wallet
              </div>
            </div> */}
            {/* <div className="d-flex">
              <img src={Images.Loader} alt="" />
            </div> */}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className="">
          <div className="">
            <div
              className="d-flex justify-content-center"
              style={{
                fontSize: "4rem",
                fontFamily: "",
                fontWeight: "900",
                whiteSpace: "nowrap",
                color: "#999691",
              }}
            >
              Coming Soon
            </div>
            <div className="col-12 d-flex justify-content-center mt-5">
              <button
                onClick={() => {
                  setShow(false);
                }}
                className="button p-3"
              >
                Close
              </button>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
export default DasbhboardHeader;
