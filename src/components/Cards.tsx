import { useCopyToClipboard } from "@uidotdev/usehooks";
import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAccount, useEnsName } from "wagmi";
import Web3 from "web3";
import { authSlice } from "../redux/apis/apisSlics";
import { Images } from "./Config/Images";
import EnsParser from "./ersParser";
import TableView from "./TableView/TableView";
var reSortedArray: any = [];
var ethValue: any = "";
var arbitrumValue: any = "";
const randomHash = crypto.randomUUID();
const Cards = () => {
  const [leaderBoardData, setLeaderBoardData] = useState<any>([]);
  const [eth, setEth] = useState(0);
  const [arbitrum, setArbitrum] = useState(0);
  const [loader, setLoader] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [ens, setEns] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  let tempObj: any = [];
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  async function FetchChainId(address: any) {
    const Result = await useEnsName({
      address: "0xdF187D5df9C0192c9Ad91aE535771ee3585b96d7",
      chainId: 1,
    });
  }

  // FetchChainId(address)
  //   .then((response) => {
  //     console.log(response, "1234");
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching chainId:", error);
  //   });
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  useEffect(() => {
    {
      copiedText && toast.success("Address Copied");
    }
  }, [copiedText]);
  let leaderBoardDataTotalVolumeEth = async (id: any) => {
    let res = await axios.get(
      `https://snap-hodl-backend-prod.svcs.ferrumnetwork.io/getChainTradingSnapShotsTotalBySnapHodlConfigIdAndChainId?snapHodlConfigId=660001d0130dd8061bf24d03&chainId=${id}`
    );
    if (res) {
      setEth(res?.data?.totalTradingByChainId);
      ethValue = res?.data?.totalTradingByChainId;
    }
  };
  let leaderBoardDataTotalVolumeArbitrum = async (id: any) => {
    let res = await axios.get(
      `https://snap-hodl-backend-prod.svcs.ferrumnetwork.io/getChainTradingSnapShotsTotalBySnapHodlConfigIdAndChainId?snapHodlConfigId=660001d0130dd8061bf24d03&chainId=${id}`
    );
    if (res) {
      setArbitrum(res?.data?.totalTradingByChainId);
      arbitrumValue = res?.data?.totalTradingByChainId;
    }
  };
  let leaderBoardWhiteLabelData = async () => {
    let res = await axios.get(
      `http://localhost:8001/data/matchEntry`
    );
    if (res) {
     console.log(res, "response1");
     dispatch(authSlice.actions.setLeaderBoardData({dynamicLeaderboardData: res.data[0]}));
    }
  };
  let LeaderBoardData = async () => {
    setLoader(true);
    let res = await axios.get(
      "https://snap-hodl-backend-prod.svcs.ferrumnetwork.io/getAllSnapShots?snapHodlConfigId=660001d0130dd8061bf24d03"
    );
    if (res && res?.data) {
      setLoader(false);
      console.log(res?.data[0], "123456789");
      setLeaderBoardData(res);
      if (res?.data.length) {
        let data = res?.data;
        data.length = 1;
        data.forEach((entry: any, index: any) => {
          const walletId = Object.keys(entry.totalUserReward);
          const walletBalance = Object.values(entry.totalUserReward);
          const volume = Object.values(entry?.totalUserVolume);
          console.log(ethValue, "ethValue");
          const excludedWalletIds = [
            "0x2824CE6A6A9F0a4bDcf0AAeFEAeFe508693d0a3a",
            "0x2824ce6a6a9f0a4bdcf0aaefeaefe508693d0a3a",
          ];
          if (walletBalance && walletId) {
            let response = walletId
              .map((value, index) => {
                return {
                  wallet: value,
                  balance: walletBalance[index],
                  volume: volume[index],
                };
              })
              .filter((item) => !excludedWalletIds.includes(item.wallet));
            response.sort(
              (a: any, b: any) => parseFloat(b.balance) - parseFloat(a.balance)
            );
            response.forEach((item: any, index: any) => {
              item.rank = index + 1;
            });

            reSortedArray = response.map((item: any) => {
              return {
                rank: item.rank,
                wallet: item.wallet,
                volume: item.volume,
                balance: item.balance,
              };
            });
            setLeaderBoardData(reSortedArray);
            tempObj = reSortedArray;
            console.log(reSortedArray, "reSortedArrayreSortedArray");
          }
        });
      }
    } else {
      setLoader(false);
    }
  };

  useEffect(() => {
    leaderBoardDataTotalVolumeEth(1);
    leaderBoardDataTotalVolumeArbitrum(42161);
    leaderBoardWhiteLabelData();
    {
      searchValue == "" && LeaderBoardData();
    }
  }, []);
  console.log(reSortedArray, "tempObj");
  const help = () => {
    window.open(`https://help.ferrumnetwork.io/en/`, "_blank");
  };
  function truncateText(text: any, maxLength: any) {
    if (text.length <= maxLength) {
      return text;
    }

    const ellipsis = ".....";
    const firstHalfLength = 7;
    const secondHalfLength = 6;

    const beginning = text.substring(0, firstHalfLength);
    const end = text.substring(text.length - secondHalfLength);

    return beginning + ellipsis + end;
  }
  // const copyToClipboard = (wallet: any) => {
  //   navigator.clipboard
  //     .writeText(wallet)
  //     .then(() => {
  //       toast.success("Address Copied");
  //     })
  //     .catch((err: any) =>
  //       toast.error("Unable to copy text to clipboard", err)
  //     );
  // };
  const Header = [
    {
      name: "#",
      selector: (row: { id: any }) => row.id,
      cell: (row: any, index: any) => (
        <>
          <div
            onClick={() => {
              console.log(row.id + 1, "1234567654321");
            }}
          >
            {searchValue ? (
              <>{row.id}</>
            ) : row.id + 1 == 1 && !searchValue ? (
              <>
                <img src={Images.first} alt="" height={24} />
              </>
            ) : row.id + 1 == 2 ? (
              <>
                <img src={Images.second} alt="" height={24} />
              </>
            ) : row.id + 1 == 3 ? (
              <>
                <img src={Images.third} alt="" height={24} />
              </>
            ) : (
              <div className="ps-2">{row.id + 1}</div>
            )}
          </div>
        </>
      ),
      width: isMobile ? "60px" : "130px",
    },
    {
      name: "Wallet ID",
      selector: (row: { user: any }) => row.user,
      cell: (row: any, index: any) => (
        <>
          {
            <div
              onClick={() => {
                copyToClipboard(row.user);
              }}
              className="cursor-pointer"
            >
              <EnsParser address={row.user} />
              {/* {truncateText(row.user, 20)} */}
            </div>
          }
        </>
      ),
    },
    {
      name: "Total Points",
      selector: (row: { volume: any }) => row.volume,
      cell: (row: any, index: any) => (
        <>
          <div style={{ color: "white" }}>
            {row.volume == 0 ? "" : Number(row.volume).toFixed(2)}
          </div>
        </>
      ),
      isAscending: true,
    },
    {
      name: "Total Airdrop (USD)",
      selector: (row: { eligibility: any }) =>
        row.eligibility == 0 ? "" : Number(row.eligibility).toFixed(2),
      isAscending: true,
    },
  ];
  const onSearchHandle = (e: any) => {
    // setIsQueryChange(true);
    if (e.target.value) {
      setSearchValue(e.target.value);

      const searchWalletAddress = reSortedArray.filter((item: any) =>
        item.wallet.toLowerCase().includes(e?.target?.value.toLowerCase())
      );
      reSortedArray = searchWalletAddress;
      // setSnapShot(searchWalletAddress);
      // setShowWalletModal(false);
      const matchingIndices = reSortedArray.reduce(
        (acc: number[], item: any, index: number) => {
          if (item.wallet.includes(e.target.value)) {
            acc.push(index);
          }
          return acc;
        },
        []
      );
      console.log(matchingIndices, reSortedArray, "index");
    } else {
      LeaderBoardData();
      setSearchValue("");
    }
  };
  const mappedData = reSortedArray.map((item: any, index: any) => ({
    id: searchValue ? item?.rank : index,
    user: item.wallet || null,
    volume: item.volume || null,
    eligibility: item.balance || null,
  }));
  return (
    <div
      className="cs-table col-12 d-flex justify-content-center align-items-center p-3"
      style={{ position: "relative" }}
    >
      <div className="col-12 col-md-8 mt-4">
        <div className="col-12  mb-2 p-2">
          <div
            className="col-12"
            style={{
              color: "#F26419",
              fontSize: "45px",
              fontWeight: "900",
              fontFamily: "Rubik",
            }}
          >
            LEADERBOARD
          </div>
          <div className="col-12 justify-content-end desktop-search">
            {/* <button
              className="btn btn-dark"
              onClick={() => {
                handleURL();
              }}
            >
              Projects List{" "}
            </button> */}
            <div className="jss919">
              <input
                className="jss920 custom-input"
                placeholder="0x000...0000"
                value={searchValue}
                type="search"
                onChange={onSearchHandle}
              />
              <img
                className="jss924"
                src="/images/icons/icon_search.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {!loader && (
          <div className="mobile-responsive col-11 mb-2 p-2 mb-4">
            <div className="d-flex col-12 col-md-6">
              <div className="d-flex align-items-center upperHeaderTable">
                Total Volume ETH
              </div>
              <div className="d-flex align-items-center upperHeaderTable">
                :
              </div>
              <div
                className="d-flex align-items-center ps-3"
                style={{
                  color: "rgb(242, 100, 25)",
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Rubik",
                }}
              >
                {eth ? Number(eth).toFixed(2) : 0}
              </div>
              {/* <div className="d-flex jss919 d-flex align-items-center ps-2">
                <input
                  className="jss930"
                  value={ethValue}
                  type="search"
                  style={{ width: "70px" }}
                  disabled
                />
              </div> */}
            </div>
            <div className="d-flex col-12 col-md-6 upperHeaderTable-margin">
              <div className="d-flex align-items-center upperHeaderTable ">
                Total Volume ARB
              </div>
              <div className="d-flex align-items-center upperHeaderTable">
                :
              </div>
              <div
                className="d-flex align-items-center ps-3"
                style={{
                  color: "rgb(242, 100, 25)",
                  fontSize: "22px",
                  fontWeight: "500",
                  fontFamily: "Rubik",
                }}
              >
                {arbitrum ? Number(arbitrum).toFixed(2) : 0}
              </div>
              {/* <div className="d-flex jss919 d-flex align-items-center p-2 ">
                <input
                  className="jss930"
                  value={arbitrumValue}
                  type="search"
                  style={{ width: "70px" }}
                  disabled
                />
              </div> */}
            </div>
          </div>
        )}
        <div className="col-12 justify-content-start ps-2 mb-4 mobile-search">
          {/* <button
              className="btn btn-dark"
              onClick={() => {
                handleURL();
              }}
            >
              Projects List{" "}
            </button> */}
          <div className="jss919">
            <input
              className="jss920 custom-input"
              placeholder="0x000...0000"
              value={searchValue}
              type="search"
              onChange={onSearchHandle}
            />
            <img
              className="jss924"
              src="/images/icons/icon_search.svg"
              alt=""
            />
          </div>
        </div>
        <div className="tabel-theme">
          <TableView header={Header} data={mappedData} status={loader} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
