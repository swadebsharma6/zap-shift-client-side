import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';
import aos from 'aos';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import AuthProvider from './AuthContext/AuthProvider.jsx';


aos.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='font-urbanist max-w-[1500px] mx-auto px-4'>
     <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
   </div>
  </StrictMode>
)
