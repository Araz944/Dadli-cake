//dependencies
import React from "react";
import { Link } from "react-router-dom";

//includes (.css files)
import "../style/gallery.css";

const GalleryPagination = ({
  itemsPerPage,
  allData,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(allData / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const prevPage = () => {
    paginate(currentPage - 1);
    // currentPage > 1
    //   ? paginate(currentPage - 1)
    //   : paginate(currentPage === pageNumbers.length);
  };

  const nextPage = () => {
    paginate(currentPage + 1);
    // currentPage < pageNumbers.length
    //   ? paginate(currentPage + 1)
    //   : paginate(currentPage === 1);
  };

  return (
    <>
      <article className="galleryPageButtons">
        <button
          onClick={() => prevPage()}
          disabled={currentPage === 1}
          style={{
            color: "#833a3a",
            fontWeight: "bold",
          }}
        >
          &#8249;
        </button>
        {pageNumbers.map((number) => (
          <button
            onClick={() => paginate(number)}
            key={number}
            style={
              currentPage === number
                ? {
                    backgroundColor: "#ffffff",
                    color: "#833a3a",
                    fontWeight: "bold",
                    backdropFilter: "blur(5px)",
                  }
                : {
                    backgroundColor: "#b0ec2299",
                  }
            }
          >
            {number}
          </button>
        ))}
        <button
          onClick={() => nextPage()}
          disabled={currentPage > pageNumbers.length - 1}
          style={{
            color: "#833a3a",
            fontWeight: "bold",
          }}
        >
          &#8250;
        </button>
      </article>
    </>
  );
};

export default GalleryPagination;
