import React from "react";
import "./spinner.css";

export default function LoadingSpinner() {
  return (
    <div className=" flex justify-center grid place-content-center align-middle spinnerr">
      <div className="loading-spinner "></div>
    </div>
  );
}