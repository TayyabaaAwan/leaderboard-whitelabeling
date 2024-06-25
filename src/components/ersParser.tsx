import React, { useEffect, useState } from "react";
import TableView from "./TableView/TableView";
import { Images } from "./Config/Images";
import { Link } from "react-router-dom";
import { useEnsName } from "wagmi";

function EnsParser(address: any) {
  const [loading, setLoading] = useState(true);
  const [ens, setEns] = useState<any>("loading");
  console.log(address.address, "123");
  const result = useEnsName({
    address: address.address,
    chainId: 1,
  });
  console.log(result, "result");
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
  useEffect(() => {
    // async function FetchChainId(address: any) {
    if (result?.data) {
      setLoading(false);

      setEns(result?.data);
    }

    // }
    // FetchChainId(address);
  }, [result]);

  return <>{result?.data ? result.data : truncateText(address.address, 20)}</>;
}

export default EnsParser;
