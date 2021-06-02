import React from "react";

const PageNotFound = () => {
  return (
    <div
      style={{
        boxSizing: "border-box",
        height: "400px",
        textAlign: "center",
        display: "block",
        marginTop: "20%",
      }}
    >
      <h1>404 Error, Page not found.</h1>
      <p>
        The page you are looking for might be corrupted or even doesn't exist.
        Sorry for any inconvenience.
      </p>
    </div>
  );
};

export default PageNotFound;
