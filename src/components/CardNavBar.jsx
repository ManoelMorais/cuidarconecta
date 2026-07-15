import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

export default function CardNavBar({ title, subTitle, linkUrl, icone }) {
  return (
    <div className="lnk-card">
      <Link to={linkUrl}>
        <span className="icon-box">
          {icone}
        </span>
      </Link>
      <h3>{title}</h3>
      <p>{subTitle}</p>
    </div>
  );
}
