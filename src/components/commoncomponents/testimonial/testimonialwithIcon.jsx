
import React from "react";
import PropTypes from "prop-types";

const TestimonialsWithIcon = ({ value }) => {
  return (
    <>
      {value.map((value) => (
        <React.Fragment key={value.title}>
          <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                                <img className="img-fluid rounded-circle mb-3" src={value.image} alt="..." />
                                    <h5>{value.title}</h5>
                            <p className="font-weight-light mb-0">&quot;{value.content}&quot;</p>
                        </div>
                    </div>
        </React.Fragment>
      ))}
    </>
  );
};

TestimonialsWithIcon.propTypes = {
    value: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default TestimonialsWithIcon;
