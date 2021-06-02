//dependencies
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

//includes (data)
import Data from "../components/data.json";

//includes (images)
import unnamed from "../images/unnamed.png";

const Recently = () => {
  const recently = Data.slice(0, 3);

  const [isTitleVisible, setTitleVisible] = useState(false);
  const domRef = useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setTitleVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
  }, []);

  return (
    <>
      {recently.map((data) => (
        <Link
          to={`/gallery/1/${data.slug}`}
          className="flexImagesLink"
          key={data.id}
        >
          <div style={{ backgroundImage: `url(${data.url}), url(${unnamed})` }}>
            <h2
              className={`fadeInTitleSection ${
                isTitleVisible ? "isTitleVisible" : ""
              }`}
              ref={domRef}
            >
              {data.title || "TITLE"}
            </h2>
          </div>
        </Link>
      ))}
    </>
  );
};
export default Recently;
