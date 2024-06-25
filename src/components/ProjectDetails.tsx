import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import DealToken from "./DealToken";
import OverView from "./OverView";

function ProjectDetails() {
  const [selectTab, setSelectedTab] = useState("OverView");
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
  const tapOptions = [
    {
      title: "Over View",
      key: "OverView",
      folder:<OverView/>,
    },
    {
      title: "Deal & Tokennomic",
      key: "deal",
      folder: <DealToken/>,
    },
  ];
  return (
    <>
      <div className="card-detail d-flex justify-content-center"></div>
      <div
        style={{ marginTop: "9rem", marginBottom: "5rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-8 mb-3 align-items-center">
        <Tabs
            id="controlled-tab-example"
            className="mt-30 position-relative tabs-overflow mt-3"
            activeKey={selectTab}
            onSelect={(tab: any) => {
              setSelectedTab(tab);
            }}
          >
            {tapOptions.map((item: any) => (
              <Tab eventKey={item.key} title={item.title}>
                {selectTab === item.key && item.folder}
              </Tab>
            ))}
          </Tabs>
         
        </div>
      </div>
      <div className="col-lg-12 col-xl-12 col-12 pt-4 d-flex w-100 overflow-auto"></div>
    </>
  );
}

export default ProjectDetails;
