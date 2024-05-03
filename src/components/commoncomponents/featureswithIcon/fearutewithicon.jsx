
import React from "react";
import PropTypes from "prop-types";
// import Fontawesome from 'react-fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FeaturesWithIcon = ({ value }) => {
  return (
    <>
      {value.map((value) => (
        <React.Fragment key={value.title}>
          <div className="col-lg-4">
            <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                      <div className="features-icons-icon d-flex">
                          <FontAwesomeIcon iconName='${value.contentIcon} m-auto text-primary' />
              </div>
              <h3>{value.title}</h3>
              <p className="lead mb-0">
                {value.content}
              </p>
            </div>
          </div>
        </React.Fragment>
      ))}
    </>
  );
};

FeaturesWithIcon.propTypes = {
    value: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    contentIcon: PropTypes.string.isRequired,
    content: PropTypes.object.isRequired
}

export default FeaturesWithIcon;
