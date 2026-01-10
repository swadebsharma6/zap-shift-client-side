import { Link } from 'react-router';
import logo from '../../../assets/logo.png'

const ProFastLogo = () => {
      return (
           
            <div className='flex items-end'>
                 <Link to={'/'}> <img className='mb-2' src={logo} alt="" /></Link>
                  <p className='text-2xl font-bold -ml-2'>ProFast</p>
            </div>
          
      );
};

export default ProFastLogo;