import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"

import "assets/vendor/nucleo/css/nucleo.css"
import "assets/vendor/font-awesome/css/font-awesome.min.css"
import "assets/scss/argon-design-system-react.scss?v1.1.0"

import Index from "views/Index.js"
import Landing from "views/examples/Landing.js"
import ContactUs from "views/examples/ContacUs"
import Login from "views/examples/Login.js"
import Profile from "views/examples/Profile.js"
import Register from "views/examples/Register.js"
import TopBar from "components/Navbars/TopBar"
import DemoNavbar from "components/Navbars/DemoNavbar"
import SimpleFooter from "components/Footers/SimpleFooter"
import AddContribute from "views/examples/AddContribut"
import Person from "views/examples/Person"
import AboutUs from "views/examples/About"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
  <BrowserRouter>
    <TopBar />
    <DemoNavbar />
    <Routes>
      <Route path="/" exact element={<Index />} />
      <Route path="/landing-page" exact element={<Landing />} />
      <Route path="/contact-us" exact element={<ContactUs />} />
      <Route path="/about-us" exact element={<AboutUs />} />
      <Route path="/login-page" exact element={<Login />} />
      <Route path="/profile-page" exact element={<Profile />} />
      <Route path="/register-page" exact element={<Register />} />
      <Route path='/add-contribute' exact element={<AddContribute />} />
      <Route path="*" element={<Navigate to="/" replace />} />

      <Route path='/person-page/:userName' exact element={<Person />} />

    </Routes>
    <SimpleFooter />
  </BrowserRouter>
)
