import React, { useState } from "react";
import "./ObjectMenu.css";

const ObjectMenu = ({ onPress, activeButton, manually, changeRunStatus,runHandler }) => {
  //const [activeButton, setActiveButton] = useState("html");
  const pressHandler = (data) => {
    onPress(data);
    //setActiveButton(data);
  };
  return (
    <>
      <div className="object-menu">
        <dev className="object">
          <a
            className={
              activeButton === "html"
                ? "object-link active-object"
                : "object-link"
            }
            onClick={() => pressHandler("html")}
          >
            index.html
          </a>
          <a
            className={
              activeButton === "css"
                ? "object-link active-object"
                : "object-link"
            }
            onClick={() => pressHandler("css")}
          >
            style.css
          </a>
          <a
            className={
              activeButton === "js"
                ? "object-link active-object"
                : "object-link"
            }
            onClick={() => pressHandler("js")}
          >
            script.js
          </a>
        </dev>
        <div className="button-group">
          <div className="checkbox-group">
            <input
              type="checkbox"
              className="checkbox"
              checked={manually}
              onChange={() => changeRunStatus(!manually)}
            />
            <span>Run Manually</span>
          </div>
          {manually ? (
            <button
              className="btn-run"
              disabled={!manually}
              onClick={runHandler}
            >
              Run
            </button>
          ) : (
            <span className="btn-onTime">Auto</span>
          )}
        </div>
      </div>
    </>
  );
};

export default ObjectMenu;
