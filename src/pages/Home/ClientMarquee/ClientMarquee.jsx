import Marquee from "react-fast-marquee";
import logo1 from '../../../assets/brands/amazon.png';
import logo2 from '../../../assets/brands/casio.png';
import logo3 from '../../../assets/brands/moonstar.png';
import logo4 from '../../../assets/brands/randstad.png';
import logo5 from '../../../assets/brands/start_people.png';
import logo6 from '../../../assets/brands/star.png';
import logo7 from '../../../assets/brands/amazon_vector.png';

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const ClientMarquee = () => {
  return (
    <section className="py-16 bg-base-100 mb-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-2xl font-bold mb-10">
          We've helped thousands of sales teams
        </h2>

        {/* Marquee */}
        <Marquee
          speed={50}
          gradient={false}
          pauseOnHover={true}
          direction="left"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="mx-12 flex items-center justify-center"
            >
              <img
                src={logo}
                alt="Client logo"
                className="h-6 object-contain grayscale hover:grayscale-0 transition"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default ClientMarquee;
