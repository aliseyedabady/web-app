import React from "react";
import { Link } from "react-router-dom";
import { COLOR } from "../../Utils/Colors";

const Title = ({ title = "", link = {} }) => {
  return (
    <div
      className="row"
      style={{
        marginBottom: "16px",
        marginTop: "32px",
      }}
    >
      <div className="col-6">
        <h2 style={{ fontWeight: "700", fontSize: "20px" }}>{title}</h2>
      </div>
      <div className="col-6 d-flex justify-content-end">
        <Link
          style={{ fontSize: "13px", fontWeight: "500", color: COLOR.blue }}
          to={link.to}
        >
          {link.title}
        </Link>
      </div>
    </div>
  );
};

export default Title;
