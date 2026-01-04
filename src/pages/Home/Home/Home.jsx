import Banner from "../Banner/Banner";
import Benefit from "../Benefits/Benefit";
import ClientMarquee from "../ClientMarquee/ClientMarquee";
import OurServices from "../Services/OurServices";


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                  <OurServices></OurServices>
                  <ClientMarquee/>
                  <Benefit/>
            </div>
      );
};

export default Home;