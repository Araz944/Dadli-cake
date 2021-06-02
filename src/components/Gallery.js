//dependencies
import React, { useState, useEffect } from "react";

//includes (.css files)
import "../style/gallery.css";

//includes (data)
import Data from "./data.json";

//utils
import GalleryPage from "../utils/GalleryPage.utils";
import GalleryPagination from "../utils/GalleryPagination.utils";

const Gallery = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Get current data per page
  const indexOfLastData = currentPage * itemsPerPage;
  const indexOfFirstData = indexOfLastData - itemsPerPage;
  const currentData = Data.slice(indexOfFirstData, indexOfLastData);
  // console.log(currentData);
  // console.log(currentPage);

  //Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="galleryBg">
        <GalleryPage currentData={currentData} currentPage={currentPage} />
        <GalleryPagination
          itemsPerPage={itemsPerPage}
          allData={Data.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </>
  );
};

export default Gallery;
