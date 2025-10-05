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
import StudyAb from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAb";
import StudyDs from "./pages/white-link/StudyDestinations/StudyDs";
import IELTS from "./pages/white-link/IELTS/IELTS";
import Student from "./pages/white-link/Student_Essentials/Student";
import Find1 from "./pages/white-link/Find_A_Course/Find1";
import Avail from "./pages/white-link/Avail_Free/Avail";
import SignIN from "./pages/white-link/Sign_In/SignIN";
import Import from "./Components/Implinks/Import";
import BlueNav from "./Components/bLUE-nav/BlueNav";
import NewAndA from "./pages/black-link/NewAndA";


import StudyAbNavbar from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAbNavbar";
import StdyAbVid from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdyAbVid";
import StdyAbcnt from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdyAbcnt";
import WhereStdhero from "./pages/white-link/Study_Abroad/Where_to_study_abroad/WhereStdhero";
import WhereStdyVid from "./pages/white-link/Study_Abroad/Where_to_study_abroad/WhereStdyvid";
import WhereStdyAbcnt from "./pages/white-link/Study_Abroad/Where_to_study_abroad/WhereStdycnt";
import HowtoApplyhero from "./pages/white-link/Study_Abroad/how_do_i_apply/HowtoApplyhero";
import HowDoApplyVid from "./pages/white-link/Study_Abroad/how_do_i_apply/howdoaplyvid";
import Howdoapplycnt from "./pages/white-link/Study_Abroad/how_do_i_apply/Howdoapplycnt";
import AfterOfferhero from "./pages/white-link/Study_Abroad/AfterOffe/AfterOfferhero";
import AfterOfferVid from "./pages/white-link/Study_Abroad/AfterOffe/AfterOffervid";

import Preparetodeparthero from "./pages/white-link/Study_Abroad/Prepare_to_depart/Preparetodeparthero";
import Preparetodepartvid from "./pages/white-link/Study_Abroad/Prepare_to_depart/Preparetodepartvid";

import Arriveandthrivehero from "./pages/white-link/Study_Abroad/Arrive_and_thrive/Arriveandthrivehero";
import Arriveandthrivevid from "./pages/white-link/Study_Abroad/Arrive_and_thrive/Arriveandthrivevid";
import StdAbhlp from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdAbhlp";
import FrequentlyAskedQuestions from "./pages/white-link/Study_Abroad/FrequentlyAskedQuestions/FrequentlyAskedQuestions";

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
        <Route path="/pages/white-link/StudyAb" element={
          <>
            <Navbar />
            <StudyAbNavbar />
            <StudyAb />
            <StdyAbVid/>
            <StdyAbcnt />
            <StdAbhlp />
            <FrequentlyAskedQuestions />
            <NewAndA />
            <Contact />
            <Footer />
          </>
        } />


        
        <Route
          path="/pages/white-link/where-to-study-abroad"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <WhereStdhero />
              <WhereStdyVid/>
              <WhereStdyAbcnt/>
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/white-link/how-to-apply"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <HowtoApplyhero />
              <HowDoApplyVid />
              <Howdoapplycnt />
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/white-link/after-offer"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <AfterOfferhero />
              <AfterOfferVid />
             
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/white-link/prepare-to-depart"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <Preparetodeparthero />
              <Preparetodepartvid />
             
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/pages/white-link/arrive-and-thrive"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <Arriveandthrivehero />
              <Arriveandthrivevid />
              
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />
        


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