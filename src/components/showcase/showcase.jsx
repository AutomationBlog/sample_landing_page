import './showcase.css'
import '../styles.css'
import image1 from '../../assets/img/bg-showcase-1.jpg';
import image2 from '../../assets/img/bg-showcase-2.jpg';
import image3 from '../../assets/img/bg-showcase-3.jpg';
import ContentwithImage from '../commoncomponents/contentwithimage/contentwithimage';

const showcaseContent = [
    {
        title: "Fully Responsive",
        image: image1,
        content: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
        imagePosition: "right"
    },
    {
        title: "Updated For Bootstrap 5",
        image: image2,
        content: "Newly improved, and full of great utility classNamees, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
        imagePosition: "left"
    },
    {
        title: "Easy to Use",
        image: image3,
        content: "Ready to use with your own content, or customize the source files!",
        imagePosition: "right"
    }
]

export default function Showcase() {
    return (
        <>
            {/* <!-- Image Showcases--> */}
        <section className="showcase">
            <div className="container-fluid p-0">
                <ContentwithImage value={showcaseContent} />
            </div>
        </section>
        </>
    )
}