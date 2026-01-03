import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import bannerImg1 from '../../../assets/banner/banner1.png';
import bannerImg2 from '../../../assets/banner/banner2.png';
import bannerImg3 from '../../../assets/banner/banner3.png';

const Banner = () => {
      return (
            <Carousel autoPlay={true} infiniteLoop={true}>
                <div>
                    <img src={bannerImg1} />
                    <p className="legend">We are Make sure Your Parcel arrives On Time</p>
                </div>
                <div>
                    <img src={bannerImg2} />
                    <p className="legend">Fasted Delivery & Easy pickup</p>
                </div>
                <div>
                    <img src={bannerImg3} />
                    <p className="legend">Delivery in 30 Minutes at You Doorstep</p>
                </div>
            </Carousel>
      );
};

export default Banner;