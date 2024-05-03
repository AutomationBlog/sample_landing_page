import React from "react";
import PropTypes from "prop-types";

const ContentwithImage = ({ value }) => {
  return (
    <>
      {value.map((value) => (
        <React.Fragment key={value.title}>
          {value.imagePosition === "left" ? (
            <div className="row g-0">
              <div
                className="col-lg-6 text-white showcase-img"
                style={{ backgroundImage: `url(${value.image})` }}
              ></div>
              <div className="col-lg-6 my-auto showcase-text">
                <h2>{value.title}</h2>
                <p className="lead mb-0">{value.content}</p>
              </div>
            </div>
          ) : (
            <div className="row g-0">
              <div
                className="col-lg-6 order-lg-2 text-white showcase-img"
                style={{ backgroundImage: `url(${value.image})` }}
              ></div>
              <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                <h2>{value.title}</h2>
                <p className="lead mb-0">{value.content}</p>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
    </>
  );
};

ContentwithImage.propTypes = {
  value: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  imagePosition: PropTypes.string.isRequired,
};

export default ContentwithImage;
