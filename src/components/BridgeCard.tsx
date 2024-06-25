import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";

import { authSlice } from "../redux/apis/apisSlics";
import { RootState } from "../redux/rootReducer";

import { Images } from "./Config/Images";

const BridgeCard = () => {
  const initiaLGasFee = useSelector((state: RootState) => state.block.gasFee);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { address, isConnected } = useAccount();
  dispatch(authSlice.actions.setAddress(address));

  console.log(isConnected, "isConnectedisConnected");
  console.log(address, initiaLGasFee, "address");

  return (
    <div className="col-md-5 col-12 justify-content-center p-3">
      <div className="col-12 pb-3">
        <img
          className="cursor-pointer"
          onClick={() => {
            navigate(`/`);
          }}
          src={Images.back}
          alt=""
          height={30}
        />
      </div>
      <div className="card-bg">
        <div className="p-5">
          <h2
            className="d-flex justify-content-center text-center"
            style={{ color: "white" }}
          >
            Steps to claim your RVF on the BSC network
          </h2>
          <div
            className=" d-flex mt-4 align-items-center"
            style={{
              color: "rgba(125,140,163,1)",
              lineHeight: "27px",
              fontSize: "18px",
            }}
          >
            <div className="text-center">
              Follow these simple steps to swap your RVF tokens from the BSC
              network to the ETH network via the Ferrum Network bridge:
            </div>
          </div>
          <div className="p-3">
            <div
              className=" d-flex mt-4 align-items-center"
              style={{
                color: "rgba(255, 255, 255, 1)",
                lineHeight: "24.2px",
                fontSize: "20px",
              }}
            >
              <div className="col-xl-1 col-2">
                <img src={Images.one} alt="" height={30} />
              </div>
              <div className="col-xl-11 col-10 d-flex">
                <div>
                  Go to the{" "}
                  <span style={{ fontWeight: 700 }}>Ferrum Network Bridge</span>
                  .
                </div>
                <div
                  className="margin-left d-flex align-items-center cursor-pointer"
                  onClick={() => {
                    window.open("https://bridge.ferrum.network/", "_blank");
                  }}
                >
                  <img src={Images.file} alt="" height={20} />
                </div>
              </div>
            </div>
            <div
              className=" d-flex mt-4 align-items-center"
              style={{
                color: "rgba(255, 255, 255, 1)",
                lineHeight: "24.2px",
                fontSize: "20px",
              }}
            >
              <div className="col-xl-1 col-2">
                <img src={Images.two} alt="" height={30} />
              </div>
              <div className="col-xl-11 col-10">
                <span style={{ fontWeight: 700 }}>Connect your wallet</span> to
                the Bridge.
              </div>
            </div>
            <div
              className=" d-flex mt-4 align-items-center"
              style={{
                color: "rgba(255, 255, 255, 1)",
                lineHeight: "24.2px",
                fontSize: "20px",
              }}
            >
              <div className="col-xl-1 col-2">
                <img src={Images.three} alt="" height={30} />
              </div>
              <div className="col-xl-11 col-10">
                Swap your RVF tokens from{" "}
                <span style={{ fontWeight: 700 }}>BSC</span> to{" "}
                <span style={{ fontWeight: 700 }}>ETH</span>{" "}
              </div>
            </div>
            <div
              className=" d-flex mt-4 align-items-center"
              style={{
                color: "rgba(255, 255, 255, 1)",
                lineHeight: "24.2px",
                fontSize: "20px",
              }}
            >
              <div className="col-xl-1 col-2">
                <img src={Images.four} alt="" height={30} />
              </div>
              <div className="col-xl-11 col-10">
                Withdraw your <span style={{ fontWeight: 700 }}>RVF</span> v2
                tokens on ETH on the Bridge
              </div>
            </div>
          </div>
          <div className="mt-4 d-flex justify-content-center">
            <button
              className=" col-xl-8 col-12 d-flex card-btn align-items-center mobile-margin-bottom"
              style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
              onClick={() => {
                window.open("https://bridge.ferrum.network/", "_blank");
              }}
            >
              <div
                className="d-flex col-8 pr-2 justify-content-end"
                style={{ fontWeight: 700 }}
              >
                GO TO BRIDGE
              </div>
              <div className="col-4 ">
                <img src={Images.file} alt="" height={22} />
              </div>
            </button>
          </div>
          <div className="pb-3 mt-3">
            <div className="d-flex justify-content-center align-items-center">
              <img src={Images.warning} alt="" />
              <div className="theme-color p-2">
                {`Each transaction will include a 2% RVF FEE`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div
          className=" d-flex mt-4 align-items-center"
          style={{
            color: "rgba(125,140,163,1)",
            lineHeight: "21px",
            fontSize: "14px",
          }}
        >
          <div className="col-1">
            <img src={Images.polygon} alt="" height={20} />
          </div>
          <div className="col-11">
            If you hold RVF on Polygon, you need to bridge them to ETH network
            via native{" "}
            <span style={{ fontWeight: 1000 }}>Polygon POS bridge</span> & then
            migrate to RVF V2 by selecting ETH Network above.
          </div>
        </div>
        <div
          className=" d-flex mt-4 align-items-center"
          style={{
            color: "rgba(125,140,163,1)",
            lineHeight: "27px",
            fontSize: "16px",
          }}
        >
          <div className="col-1">
            <img src={Images.feeImg} alt="" height={20} />
          </div>
          <div className="col-11">
            Use high gas fee while approving the transaction for faster
            processing
          </div>
        </div>
        <div
          className=" d-flex mt-4 align-items-center"
          style={{
            color: "rgba(125,140,163,1)",
            lineHeight: "27px",
            fontSize: "16px",
          }}
        >
          <div className="col-1">
            <img src={Images.mail} alt="" height={20} />
          </div>
          <div className="col-11">
            In case of any issue with migration please drop an e-mail to
            xxx@ferrum.network with your tx hash
          </div>
        </div>
      </div>
    </div>
  );
};

export default BridgeCard;
