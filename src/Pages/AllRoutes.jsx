import React from 'react';
import {Routes, Route} from "react-router-dom";
import AboutUs from './AboutUs';
import Home from './Home';
import ContactUs from "./ContactUs"
import FAQ from "./FAQ"

const AllRoutes = () => {
  return (
    <div>
      <Routes>
            <Route path="" element={<Home/>}/>
            <Route path="aboutus" element={<AboutUs/>} />
            <Route path="contactus" element={<ContactUs/>} />
            <Route path="faq" element={<FAQ/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes