import React, { useEffect, useState } from "react";
import { Tabs } from "react-bootstrap";

function OverView() {
  const cardBlocks = [
    {
      title: "Title1",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
    {
      title: "Title2",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
    {
      title: "Title1",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
    {
      title: "Title2",
      detail: "Invest in the future leaders of Web3",
      description:
        "Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3 Invest in the future leaders of Web3",
    },
  ];
  return (
    <>
      
        
          {cardBlocks?.map((item, index) => {
            return (
              <>
                <div className="pt-4 ">
                  <div
                    className="d-flex flex-wrap"
                    style={{ color: "darkgray" }}
                  >
                    {item.title}
                  </div>
                  <h1
                    className="d-flex flex-wrap pt-4"
                    style={{ lineHeight: "2rem" }}
                  >
                    {item.detail}
                  </h1>
                  <div
                    className="d-flex flex-wrap pt-4"
                    style={{ lineHeight: "2rem" }}
                  >
                    {item.description}
                  </div>
                </div>
              </>
            );
          })}
       
    </>
  );
}

export default OverView;
