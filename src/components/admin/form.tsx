import React from "react";
import { useState, useEffect, useContext } from "react";
import { Theme } from "../Config/Theme";
import axios from "axios";
import { useDispatch } from "react-redux";
import { authSlice } from "../../redux/apis/apisSlics";

export default function Form() {

  const url = "http://localhost:8001";

  const [color, setColor] = useState
  ({
    inputId: "", 
    cellBackground: "",
    cellBorder: "",
    topRowBackground: "",
    topRowTextColor: "",
    topRowFontSize: "",
    topRowFontFamily: "",
    cellsFontSize: "",
    paginationRowColor: "",
    paginationRowTextColor: "",
    paginationButtonsBg:"",
    currentPageClr:  "",
    dropDownBg: "",
    dropDownTextClr: "", 
    dropDownBorder: "",
    dropDownBorderRadius: "",
    customFooterBg: ""
  });
  
  const handleInputChange = (id: string, value: string) => {
    setColor((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async () => {
    axios
      .post(url, {
        inputId: color.inputId, 
    cellBackground: color.cellBackground,
    cellBorder: color.cellBorder,
    topRowBackground: color.topRowBackground,
    topRowTextColor: color.topRowTextColor,
    topRowFontSize: color.topRowFontSize,
    topRowFontFamily: color.topRowFontFamily,
    cellsFontSize:color.cellsFontSize,
    paginationRowColor: color.paginationRowColor,
    paginationRowTextColor: color.paginationRowTextColor,
    paginationButtonsBg:color.paginationButtonsBg,
    currentPageClr:  color.currentPageClr,
    dropDownBg: color.dropDownBg,
    dropDownTextClr: color.dropDownTextClr, 
    dropDownBorder: color.dropDownBorder,
    dropDownBorderRadius:color.dropDownBorderRadius,
    customFooterBg: color.customFooterBg
      })
      .then((response) => {
        console.log("Form data submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error submitting form data:", error); 
      });
    console.log("Form data:", color);
  };

useEffect(() => {
 fetch('http://localhost:8001/data/matchEntry', {
  method: 'GET',
 })
 .then((res)=> res.json())
 .then((data)=>{
console.log(data, "data");
setColor(data[0]);
 });
}, []);

  return (
    <div>
      <div className="form-tab">  
        <h2 className="heading">Leaderboard WhiteLabel form</h2>
        <div className="form">
          <div className="columns">
            <form action="POST">
            <div className="input-container">
                <label className="input-heading">User Input Id</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="inputId"
                  value={color.inputId} 
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Cell Background Color</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="cellBackground"
                  value={color.cellBackground}
                  className="inputField"
                  type="text"
                />
                 </div>
                <div className="input-container">
                <label className="input-heading">Cell Border Color</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="cellBorder"
                  value={color.cellBorder}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">
                  Top Row Background Color
                </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="topRowBackground"
                  value={color.topRowBackground}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Top Row Text Color</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="topRowTextColor"
                  value={color.topRowTextColor}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Top Row Font Size</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="topRowFontSize"
                  value={color.topRowFontSize}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">
                Top Row FontFamily
                </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="topRowFontFamily"
                  value={color.topRowFontFamily}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Drop-Down Background Color </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="dropDownBg"
                  value={color.dropDownBg}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Drop-Down Text Color </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="dropDownTextClr"
                  value={color.dropDownTextClr}
                  className="inputField"
                  type="text"
                />
              </div>
            </form>
          </div>
          <div className="columns">
            <form action="POST">
              <div className="input-container">
                <label className="input-heading">Cells Font Size</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="cellsFontSize"
                  value={color.cellsFontSize}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Pagination Row Color</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="paginationRowColor"
                  value={color.paginationRowColor}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Pagination Row Text Color</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="paginationRowTextColor"
                  value={color.paginationRowTextColor}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Pagination Buttons Background</label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="paginationButtonsBg"
                  value={color.paginationButtonsBg}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Current Page Color </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="currentPageClr"
                  value={color.currentPageClr}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Drop-Down Border Radius </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="dropDownBorderRadius"
                  value={color.dropDownBorderRadius}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Custom Footer Background Color </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="customFooterBg"
                  value={color.customFooterBg}
                  className="inputField"
                  type="text"
                />
              </div>
              <div className="input-container">
                <label className="input-heading">Drop-Down Border Color </label>
                <input
                  onChange={(event) =>
                    handleInputChange(event.target.id, event.target.value)
                  }
                  id="dropDownBorder"
                  value={color.dropDownBorder}
                  className="inputField"
                  type="text"
                />
              </div>
            </form>
          </div>
        </div>
        <button className="submit-btn" type="button" 
        onClick={handleSubmit}
        >
    Submit
  </button>
      </div>
    </div>
  );
}

