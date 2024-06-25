import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { RootState } from "../redux/rootReducer";
import { Images } from "./Config/Images";
import { ReactNode } from "react";
import { useAccount, useBalance, useConnect, useReadContract } from "wagmi";
import Swap from "./Swap";
import { injected } from "wagmi/connectors";
import DealToken from "./DealToken";
import { authSlice } from "../redux/apis/apisSlics";
import { config } from "./config";
import { swapAbi } from "./swapAbi";
import { getAccount, getChainId } from "@wagmi/core";
const ConnectWallet = () => {
  return (
    <div className="login-form-data">
      <div className="d-flex justify-content-start align-items-center admin-modal">
        <div className="p-3">
          <img src={Images.profileUser} className="profile-logo" />
        </div>
        <div>
          <h4 className="mb-0 text-white fs-16">Super Admin</h4>
          <p className="mb-0 text-white fs-12">superadmin@tanmeyaa.com</p>
        </div>
      </div>
      <div className="d-flex justify-content-start align-items-center ms-2 border-bottom">
        <div className="p-3"></div>

        <p className="mb-0 ms-3 fs-6">My Profile</p>
      </div>
      <div className="d-flex justify-content-start align-items-center ms-2 border-bottom">
        <div className="p-3"></div>
      </div>
    </div>
  );
};

export default ConnectWallet;
