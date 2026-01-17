import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { router } from './router/router.jsx';
import aos from 'aos';
import 'aos/dist/aos.css';
import 'leaflet/dist/leaflet.css';
import AuthProvider from './AuthContext/AuthProvider.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


aos.init();

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='font-urbanist max-w-[1500px] mx-auto px-4'>
     <QueryClientProvider client={queryClient}>
      <AuthProvider>
      <RouterProvider router={router} />
     </AuthProvider>
     </QueryClientProvider>
   </div>
  </StrictMode>
)
