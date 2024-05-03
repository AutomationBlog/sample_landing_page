import "./testimonials.css";
import "../styles.css";
import test1 from "../../assets/img/testimonials-1.jpg";
import test2 from "../../assets/img/testimonials-2.jpg";
import test3 from "../../assets/img/testimonials-3.jpg";
import TestimonialsWithIcon from "../commoncomponents/testimonial/testimonialwithIcon.jsx";

const testimonialsContent = [
  {
    title: "Margaret E.",
    image: test1,
    content: "This is fantastic! Thanks so much guys!",
  },
  {
    title: "Fred S.",
    image: test2,
    content:
      "Bootstrap is amazing. I've been using it to create lots of super nice landing pages.",
  },
  {
    title: "Samantha C.",
    image: test3,
    content: "Thanks so much for making these free resources available to us!",
  },
];

export default function Testimonials() {
  return (
    <>
      {/* <!-- Testimonials--> */}
      <section className="testimonials text-center bg-light">
        <div className="container">
          <h2 className="mb-5">What people are saying...</h2>
          <div className="row">
              <TestimonialsWithIcon value={testimonialsContent} />
          </div>
        </div>
      </section>
    </>
  );
}
