import React, { useEffect, useState } from "react";
import TableView from "./TableView/TableView";
import { Images } from "./Config/Images";
import { Link } from "react-router-dom";

function ProjectList() {
  const [cards, setCards] = useState<any>();
  const [title, setTitle] = useState<any>();
  const [graphChart, setGraphChart] = useState<any>();
  const [barChartGraph, setBarChartGraph] = useState<any>();
  const [table, setTable] = useState<any>();
  useEffect(() => {}, []);
  const cardBlocks = [
    {
      button: "Upcoming",
    },
    {
      button: "Upcoming",
    },
    {
      button: "Upcoming",
    },
    {
      button: "Upcoming",
    },
    {
      button: "Upcoming",
    },
    {
      button: "Sale LIVE",
    },
    {
      button: "Sale LIVE",
    },
    {
      button: "Sale LIVE",
    },
    {
      button: "Sale LIVE",
    },
    {
      button: "Sale LIVE",
    },
  ];
  const data = [
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
    {
      Customer: "-------",
      ProductName: "------",
      Email: "------",
      Date: "---",
    },
  ];
  const Leads_Header = [
    {
      name: "Product Name",
      selector: (row: { Customer: any }) => row.Customer,
      cell: (row: any) => (
        <>
          <div className="d-flex col-12">
            <div className="col-2">
              <img src={Images.BlackIcon} alt="" width={24} height={24} />
            </div>
            <div className="col-10 font-bold">{row.Customer}</div>
          </div>
        </>
      ),
    },

    {
      name: "Participants",
      selector: (row: { ProductName: any }) => row.ProductName,
    },

    {
      name: "Ath ",
      selector: (row: { Email: any }) => row.Email,
    },

    {
      name: "Total",
      selector: (row: { Date: any }) => row.Date,
    },

    {
      name: "chain",
      selector: (row: { Status: any }) => row.Status,
      cell: (row: any) => (
        <>
          <div className="d-flex col-12">
            <div className="col-2">
              <img src={Images.BlackIcon} alt="" width={24} height={24} />
            </div>
          </div>
        </>
      ),
    },
    {
      name: "Lead",
      selector: (row: { Status: any }) => row.Status,
      cell: (row: any) => (
        <>
          <div className="d-flex col-12">
            <div className="col-2">
              <img src={Images.BlackIcon} alt="" width={24} height={24} />
            </div>
          </div>
        </>
      ),
    },
  ];
  return (
    <>
      <div
        style={{ marginTop: "9rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-10  align-items-center">
          <div className="d-flex">
            <div
              className="col-6 "
              style={{
                fontSize: "30px",
                fontWeight: "bold",
                color: "darkgray",
              }}
            >
              {" "}
              Upcoming Projects
            </div>
            <div className="col-6 d-flex justify-content-end">
              <button className="btn btn-light">List Projects</button>
            </div>
          </div>
          <div className="col-lg-12 col-xl-12 col-12 pt-4 d-flex flex-wrap">
            {cardBlocks?.map((item, index) => {
              return (
                <>
                  <div className="col-xl-3 col-lg-6 col-12 p-2">
                    <Link to="detail">
                      <div className="card-list"></div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>

      <div
        style={{ marginTop: "10rem", marginBottom: "6rem" }}
        className="d-flex justify-content-center"
      >
        <div className="col-10 d-flex align-items-center">
          <TableView header={Leads_Header} data={data} />
        </div>
      </div>
    </>
  );
}

export default ProjectList;
