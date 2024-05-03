import './features.css'
import '../styles.css'
import FeaturesWithIcon from '../commoncomponents/featureswithIcon/fearutewithicon.jsx'

const FeaturesContent = [
    {
        title: 'Fully Responsive',
        content: 'This theme will look great on any device, no matter the size!',
        contentIcon: 'bi-window'
    },
    {
        title: 'Bootstrap 5 Ready',
        content: 'Featuring the latest build of the new Bootstrap 5 framework!',
        contentIcon: 'bi-layers'
    },
    {
        title: 'Easy to Use',
        content: 'Ready to use with your own content, or customize the source files!',
        contentIcon: 'bi-terminal'
    }
]


export default function Features() {
    return (
        <>
            {/* <!-- Icons Grid--> */}
        <section className="features-icons bg-light text-center">
            <div className="container">
                    <div className="row">
                        <FeaturesWithIcon value={FeaturesContent} />
                </div>
            </div>
        </section>
    </>
    )
}