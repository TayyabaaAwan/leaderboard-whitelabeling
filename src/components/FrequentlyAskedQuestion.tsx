import React, { useEffect, useState } from "react";
import { Tabs } from "react-bootstrap";


function FrequentlyAskedQuestion() {
  const [faqsDialog, setFaqsDialog] = useState(false)
  const [tokenVesting, setTokenVesting] = useState(false)
  const discover=()=>{
    window.open(`https://twitter.com/RocketXexchange/status/1769989071655596338?s=20`, '_blank');
  }
  return (
    <>
      <div className="col-md-7 col-12 justify-content-center mt-5 p-3" >
        <div className="card-bg p-5" >
          <h2
            className="d-flex justify-content-center text-center"
            style={{ color: "rgba(255, 255, 255, 1)", lineHeight: "31px", fontSize: "24px", fontWeight: 700 }}
          >
            Please refer to the below tweet for the complete information about the RVF Migration along with the Frequently Asked Questions (FAQs)
          </h2>
          <div className="mt-5 d-flex justify-content-center">
            <button
              className="btn btn-primary btn-lg col-6 p-4 mt-2 mb-4"
              type="submit"
              onClick={()=>{discover()}}
              style={{ backgroundColor: "rgba(65, 95, 255, 0.75)", fontSize: "20px", fontWeight: 700 }}
            >
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrequentlyAskedQuestion;
