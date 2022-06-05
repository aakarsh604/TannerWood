import React from 'react';
import {Routes, Route} from "react-router-dom";
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from "./ContactUs"
import FAQ from "./FAQ"
import Error from "./Error"
import Belts from './Belts';
import Wallets from './Wallets';
import ProductDetails from './ProductDetails';

const AllRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path="" element={ <Home/> } />
            <Route path="aboutus" element={ <AboutUs/> } />
            <Route path="contactus" element={ <ContactUs/> } />
            <Route path="faq" element={ <FAQ/> } />
            <Route path="Belts" element={ <Belts/> } />
            <Route path="/:type/:id" element={ <ProductDetails/> } />
            <Route path="Wallets" element={ <Wallets/> } />
            <Route path="/:type/:id" element={ <ProductDetails/> } />
            <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes