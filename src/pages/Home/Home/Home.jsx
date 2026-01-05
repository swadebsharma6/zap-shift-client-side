import Banner from "../Banner/Banner";
import BeMerchant from "../BeMarchant/BeMerchant";
import Benefit from "../Benefits/Benefit";
import ClientMarquee from "../ClientMarquee/ClientMarquee";
import OurFacilities from "../OurFacilities/OurFacilities";
import OurServices from "../Services/OurServices";


const Home = () => {
      return (
            <div>
                  <Banner></Banner>
                    <OurFacilities/>
                  <OurServices></OurServices>
                  <ClientMarquee/>
                  <Benefit/>
                  <BeMerchant/>
                
            </div>
      );
};

export default Home;