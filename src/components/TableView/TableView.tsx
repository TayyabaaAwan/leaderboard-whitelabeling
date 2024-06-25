import { useEffect, useState, useContext } from "react";
import DataTable from "react-data-table-component";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/rootReducer";
import { authSlice } from "../../redux/apis/apisSlics";

const TableView = ({ header, data, status }: any) => {

  const dynamicLeaderboardData = useSelector((state: RootState) => state.block.dynamicLeaderboardData);

  console.log("dynamic:", dynamicLeaderboardData);

  const [table, setTable] = useState<any>();
  const [actionList, setActionList] = useState<any>();
  useEffect(() => {}, []);
  const customStyles = {
    rows: {
      style: {
        minHeight: "50px",
        border: dynamicLeaderboardData.cellBorder,
        backgroundColor: dynamicLeaderboardData.cellBackground,
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px",
        paddingRight: "8px",
        borderTop: dynamicLeaderboardData.cellBorder,
        color: dynamicLeaderboardData.topRowTextColor,
        fontSize: dynamicLeaderboardData.topRowFontSize,
        fontFamily: dynamicLeaderboardData.topRowFontFamily,
        backgroundColor: dynamicLeaderboardData.cellBackground,
        justifyContent: "start", 
        alignItems: "center", 
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", 
        paddingRight: "8px",
        fontSize: dynamicLeaderboardData.cellsFontSize,
        color: dynamicLeaderboardData.topRowTextColor,
        fontFamily: dynamicLeaderboardData.topRowFontFamily,
        backgroundColor:dynamicLeaderboardData.cellBackground,
        justifyContent: "start", 
        alignItems: "center", 
      },
    },
    pagination: {
      style: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        padding: "10px",
        backgroundColor: dynamicLeaderboardData.paginationRowColor,
        color: dynamicLeaderboardData.paginationRowTextColor,
      },
      pageButtonsStyle: {
        borderRadius: "5px",
        marginLeft: "5px",
        marginRight: "5px",
        padding: "8px",
        backgroundColor: dynamicLeaderboardData.paginationButtonsBg,
      },
      currentPageStyle: {
        color: dynamicLeaderboardData.currentPageClr,
        fontWeight: "bold",
      },
      rowsPerPageDropdownStyle: {
        backgroundColor: dynamicLeaderboardData.dropDownBg,
        color: dynamicLeaderboardData.dropDownTextClr,
        borderRadius: dynamicLeaderboardData.dropDownBorderRadius,
        border: dynamicLeaderboardData.dropDownBorder,
      },
    },
  };
  const CustomFooter = () => {
    return (
      <div
        style={{
          padding: "10px",
          backgroundColor: dynamicLeaderboardData.customFooterBg,
          textAlign: "center",
        }}
      >
        This is a custom footer
      </div>
    );
  };
  useEffect(() => {
    const parsedColumns = header?.map((column: any) => {
      if (typeof column.selector === "string") {
        try {
          // Use Function constructor instead of eval for better security
          const renderFunction = new Function(`return ${column.selector}`)();
          console.log(renderFunction, "renderFunction");
          column.selector = renderFunction;
        } catch (error) {
          console.error("Error parsing render function:", error);
        }
      }
      if (column.type === "list") {
        setActionList(column);
        console.log(actionList, "actionList");
        return {
          ...column,
          cell: (row: any) => (
            <div>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Select
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {row.actionList.map((item: any, index: any) => (
                    <Dropdown.Item key={index}>
                      <Link to={`${item.Link}`} className="a-link">
                        <div className="d-flex">
                          <div className="col-2">
                            <img src={item.img} alt="" />
                          </div>

                          <div className="col-10">{item.label}</div>
                        </div>
                      </Link>
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ),
        };
      }
      if (column.type == "color") {
        console.log(column.selector, "...column");
        return {
          ...column,
          cell: (row: any) => (
            <div
              style={{
                padding: "0.22rem 1rem",
                borderRadius: "12px",
                backgroundColor: column.backGround,
                color: column.color,
                cursor: row.ByDefault === "Active" ? "pointer" : "default",
              }}
            >
              {column.selector(row)}
            </div>
          ),
        };
      }
      if (column.type === "button") {
        return {
          ...column,
          cell: (row: any) => (
            <>
              <div className="d-flex">
                {column.editTitle && (
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#0dcaf0",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                    {column.editTitle}
                  </div>
                )}
                {column.updateTitle && (
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#4253a1",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                    {column.updateTitle}
                  </div>
                )}
                {column.deleteTitle && (
                  <div
                    style={{
                      padding: ".25rem 0.5rem",
                      borderRadius: "4px",
                      backgroundColor: "#dc3545",
                      color: "white",
                      marginRight: "4px",
                    }}
                  >
                    {column.deleteTitle}
                  </div>
                )}
              </div>
            </>
          ),
        };
      }
      return column;
    });
    console.log(parsedColumns, "......");
    setTable(parsedColumns);
  }, []);
  const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
  const Spinner = styled.div`
    margin: 16px;
    animation: ${rotate360} 1s linear infinite;
    transform: translateZ(0);
    border-top: 2px solid grey;
    border-right: 2px solid grey;
    border-bottom: 2px solid grey;
    border-left: 4px solid black;
    background: transparent;
    width: 80px;
    height: 80px;
    border-radius: 50%;
  `;
  const CustomLoader = () => (
    <div style={{ padding: "24px", backgroundColor: "transparent" }}>
      <Spinner />
    </div>
  );

  const handlePerPageChange = (newPerPage: any, page: any) => {
    console.log(newPerPage, page);
  };

  console.log(status, "status");
  return (
    <>
      <DataTable
        pagination
        columns={header}
        data={data}
        customStyles={customStyles}
        paginationRowsPerPageOptions={[25, 50, 75, 100]}
        progressPending={status}
        progressComponent={<CustomLoader />}
        onChangeRowsPerPage={handlePerPageChange}
        paginationPerPage={50}
      />
    </>
  );
};

export default TableView;
