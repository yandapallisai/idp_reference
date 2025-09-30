import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero.jsx/Hero";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/services/Services";
import Destinations from "./Components/Destination/Destinations";

import English from "./pages/black-link/English";
import Events from "./pages/black-link/Events";
import Find from "./pages/black-link/Find";
import Fastlane from "./Components/Fastlane/Fastlane";
import IDP from "./Components/IdpStudents/idp";
import Essentials from "./Components/Essentials/Essentials";
import Aboutidp from "./Components/IDP-P/Aboutidp";
import StudySteps from "./Components/StudySteps/StudySteps";
import Testimonials from "./Components/Testimonials/Testimonials";
import ComingSoon from "./pages/ComingSoon/ComingSoon";
import StudyAb from "./pages/white-link/Study_Abroad/StudyAb";
import StudyDs from "./pages/white-link/StudyDestinations/StudyDs";
import IELTS from "./pages/white-link/IELTS/IELTS";
import Student from "./pages/white-link/Student Essentials/Student";
import Find1 from "./pages/white-link/Find_A_Course/Find1";
import Avail from "./pages/white-link/Avail Free/Avail";
import SignIN from "./pages/white-link/Sign In/SignIN";
import Import from "./Components/Implinks/Import";
import BlueNav from "./Components/bLUE-nav/BlueNav";
import NewAndA from "./pages/black-link/NewAndA";

// Layout wrapper for white-link pages
const WhiteLinkLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

export default function App() {
  return (
    <HashRouter>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Testimonials />
              <Contact />
              <Services />
              <Destinations />
              <StudySteps />
              <Import />
              <Fastlane />
              <IDP />
              <Essentials />
              <Aboutidp />
              <Footer />
            </>
          }
        />

        {/* Study Detail Page */}
        <Route
          path="/study/:slug"
          element={
            <>
              <Navbar />
              <ComingSoon />
              <Footer />
            </>
          }
        />

        {/* Black-link Pages */}
        <Route
          path="/pages/Events"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Events/>
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/NewAndA"
          element={
            <>
              <Navbar />
              <BlueNav />
              <NewAndA />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/English"
          element={
            <>
              <Navbar />
    
              <BlueNav />
              <English />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/Find"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Find />
              <Footer />
            </>
          }
        />

        {/* White-link Pages (use layout) */}
        <Route path="/pages/white-link/StudyAb" element={<WhiteLinkLayout><StudyAb /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/StudyDs" element={<WhiteLinkLayout><StudyDs /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/Find1" element={<WhiteLinkLayout><Find1 /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/IELTS" element={<WhiteLinkLayout><IELTS /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/Student" element={<WhiteLinkLayout><Student /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/Avail" element={<WhiteLinkLayout><Avail /></WhiteLinkLayout>} />
        <Route path="/pages/white-link/SignIN" element={<WhiteLinkLayout><SignIN /></WhiteLinkLayout>} />

        {/* 404 Page */}
        <Route
          path="*"
          element={
            <div style={{ padding: "2rem", textAlign: "center" }}>
              <h2>Page Not Found</h2>
              <Link to="/" style={{ color: "#1d4ed8", textDecoration: "none" }}>
                Go back home
              </Link>
            </div>
          }
        />
      </Routes>
    </HashRouter>
  );
}