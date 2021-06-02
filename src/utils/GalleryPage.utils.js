//dependencies
import React from "react";
import { Link } from "react-router-dom";

//includes (.css files)
import "../style/gallery.css";

//includes (images)
import unnamed from "../images/unnamed.png";

const GalleryPage = ({ currentData, currentPage }) => {
  return (
    <React.Fragment>
      <section className="gridContainer">
        {currentData.map((data) => (
          <Link
            to={`/gallery/${currentPage}/${data.slug}`}
            className="link"
            key={data.id}
          >
            <div
              key={data.id}
              style={{
                backgroundImage: `url(${data.url}), url(${unnamed})`,
              }}
              className="galleryImages"
            >
              <p
                className={data.discount === undefined ? null : "discount"}
                key={data.id}
              >
                {data.discount}
              </p>
              <h3 className="imageTitle">{data.title || "TITLE"}</h3>
            </div>
          </Link>
        ))}
      </section>
    </React.Fragment>
  );
};

export default GalleryPage;
