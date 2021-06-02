//dependencies
import { React, useState, useEffect } from "react";
import { useHistory, Redirect, useRouteMatch } from "react-router-dom";

//includes (data)
import Data from "./data.json";

//includes (.css files)
import "../style/single-page.css";

//includes (images)
import unnamed from "../images/unnamed.png";

const SinglePage = ({ match }) => {
  // https://www.youtube.com/watch?v=Law7wfdg_ls&t=1264s

  let history = useHistory();
  const item = Data.find((data) => data.slug === match.params.slug);
  console.log(match.params.slug);

  return !item ? (
    <Redirect to="/404" />
  ) : (
    <article className="singlePageBg">
      <div className="wrapper1">
        <h1>{item.title || "TITLE"}</h1>
        <img src={item.url || unnamed} alt={item.title || "TITLE"} />
        <p>
          {item.description || "Description does not exist for this product"}
          <span className={item.discount ? "itemDiscount" : "withoutDiscount"}>
            Discount:{" "}
            <span style={{ color: "green", fontWeight: "bold" }}>
              {item.discount}
            </span>
          </span>
        </p>
        <button className="backToGallery" onClick={() => history.goBack()}>
          <span>&#8249;</span> Back
        </button>
      </div>
    </article>
  );
};

export default SinglePage;
