import './testimonials.css';
import '../styles.css';

export default function Testimonials() {
    return (
        <>
            {/* <!-- Testimonials--> */}
            <section className="testimonials text-center bg-light">
            <div className="container">
                <h2 className="mb-5">What people are saying...</h2>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="../src/assets/img/testimonials-1.jpg" alt="..." />
                            <h5>Margaret E.</h5>
                            <p className="font-weight-light mb-0">&quot;This is fantastic! Thanks so much guys!&quot;</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="../src/assets/img/testimonials-2.jpg" alt="..." />
                            <h5>Fred S.</h5>
                            <p className="font-weight-light mb-0">&quot;Bootstrap is amazing. I&apos;ve been using it to create lots of super nice landing pages.&quot;</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="testimonial-item mx-auto mb-5 mb-lg-0">
                            <img className="img-fluid rounded-circle mb-3" src="../src/assets/img/testimonials-3.jpg" alt="..." />
                            <h5>Sarah W.</h5>
                            <p className="font-weight-light mb-0">&quot;Thanks so much for making these free resources available to us!&quot;</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}