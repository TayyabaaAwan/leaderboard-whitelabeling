import { getChainId } from "@wagmi/core";
import React, { useEffect, useState } from "react";
import { Tabs } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { config } from "./config";

function DealToken() {

  const navigate=useNavigate()
  let chainId:any = getChainId(config)
  if(chainId=="56"){
  navigate(`/swap`)
  }else{
    toast.error("Please switch network")
  }
  return (
    <> 
    </>
  );
}

export default DealToken;
