
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../src/assets/Frame 560.png';
// import img2 from '';
// import img3 from '';


const HeroBanner = () => {
    return (
        <Carousel>
            <div>
                <img src={img1} />
            </div>
            {/* <div>
                <img src={img2} />
            </div>
            <div>
                <img src={img6} />
            </div> */}
        </Carousel>
    );
};

export default HeroBanner;