import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// Common Components
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Services/Services";
import Destinations from "./Components/Destination/Destinations";
import Hero from "./Components/Hero/Hero"; 
import Testimonials from "./Components/Testimonials/Testimonials";
import Import from "./Components/Implinks/Import";
import Fastlane from "./Components/Fastlane/Fastlane";
import IDP from "./Components/IdpStudents/IDP";
import Essentials from "./Components/Essentials/Essentials";
import Aboutidp from "./Components/IDP-P/Aboutidp";
import StudySteps from "./Components/StudySteps/StudySteps";
import BlueNav from "./Components/bLUE-nav/BlueNav"; 

// Black-Link Pages
import English from "./pages/black-link/English";
import Events from "./pages/black-link/Events";
import Find from "./pages/black-link/Find/Find";
import NewAndA from "./pages/black-link/NewAndA";
import ComingSoon from "./pages/ComingSoon/ComingSoon";

// White-Link Pages
import IELTS from "./pages/white-link/IELTS/IELTS";
import Find1 from "./pages/white-link/Find_A_Course/Find1";
import StudyDs from "./pages/white-link/StudyDestinations/StudyDs";
import Avail from "./pages/white-link/Avail_Free/Avail";
import SignIN from "./pages/white-link/Sign_In/SignIN";
import Sign_Up from "./pages/white-link/Sign_Up/Sign_Up";

// Study Abroad
import StudyAbNavbar from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAbNavbar";
import StdyAbVid from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdyAbVid";
import StdyAbcnt from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StdyAbcnt";
import StudyAb from "./pages/white-link/Study_Abroad/WhyStudyAbrd/StudyAb";

// Student Essentials
import Student from "./pages/white-link/Student_Essentials/Student";
import StudentEssFrom from "./pages/white-link/Student_Essentials/StudentEssFrom/StudentEssFrom";
import Accommodation from "./pages/white-link/Student_Essentials/StudentEs-Types/Accommodation";
import EducationLoan from "./pages/white-link/Student_Essentials/StudentEs-Types/Education_loan";
import HealthInsurance from "./pages/white-link/Student_Essentials/StudentEs-Types/Health_Insurance";
import StudentBanking from "./pages/white-link/Student_Essentials/StudentEs-Types/Student_banking";
import ForexCards from "./pages/white-link/Student_Essentials/StudentEs-Types/Forex_Cards";
import Guardian_Ship from "./pages/white-link/Student_Essentials/StudentEs-Types/Guardian_Ship";
import ISIC from "./pages/white-link/Student_Essentials/StudentEs-Types/ISIC";
import InternationalSimCards from "./pages/white-link/Student_Essentials/StudentEs-Types/International_SIM_Cards";
import ServicesSection from "./pages/white-link/Student_Essentials/StudentEssFrom/ServiceSection";
import EssentialsCards from "./pages/white-link/Student_Essentials/StudentEssFrom/EssentialsCards";
import MoneyTransfer from "./pages/white-link/Student_Essentials/StudentEs-Types/Money_transfer";
import StudyAbroadPromo from "./pages/white-link/Student_Essentials/StudentEssFrom/StudyAdroadPromo";

// ✅ Layout for white-link pages
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
        {/* 🏠 Home Page */}
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

        {/* 📚 Study Details */}
        <Route
          path="/study/:slug"
          element={
            <WhiteLinkLayout>
              <ComingSoon />
            </WhiteLinkLayout>
          }
        />

        {/* ⚫ Black-Link Pages */}
        <Route
          path="/pages/Events"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Events />
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
          path="/pages/Find/Find"
          element={
            <>
              <Navbar />
              <BlueNav />
              <Find />
              <Footer />
            </>
          }
        />

        {/* ⚪ White-Link Pages */}
        <Route
          path="/pages/white-link/StudyAb"
          element={
            <>
              <Navbar />
              <StudyAbNavbar />
              <StudyAb />
              <StdyAbVid />
              <StdyAbcnt />
              <NewAndA />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route
          path="/pages/white-link/StudyDestinations/StudyDs"
          element={
            <WhiteLinkLayout>
              <StudyDs />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/pages/white-link/Find1"
          element={
            <WhiteLinkLayout>
              <Find1 />
            </WhiteLinkLayout>
          }
        />
        <Route
          path="/pages/white-link/IELTS"
          element={
            <WhiteLinkLayout>
              <IELTS />
            </WhiteLinkLayout>
          }
        />

        {/* 🎓 Student Essentials */}
        <Route
          path="/pages/white-link/Student_Essentials"
          element={
            <WhiteLinkLayout>
              <Student />
            </WhiteLinkLayout>
          }
        />

        {[
          ["EducationLoan", EducationLoan],
          ["HealthInsurance", HealthInsurance],
          ["Money_Transfer", MoneyTransfer],
          ["StudentBanking", StudentBanking],
          ["Accommodation", Accommodation],
          ["InternationalSimCards", InternationalSimCards],
          ["Guardian_Ship", Guardian_Ship],
          ["ForexCards", ForexCards],
          ["ISIC", ISIC],
        ].map(([pathName, Component]) => (
          <Route
            key={pathName}
            path={`/pages/white-link/Student_Essentials/${pathName}`}
            element={
              <WhiteLinkLayout>
                <Component />
                {pathName === "Money_Transfer" && <StudyAbroadPromo />}
                <StudentEssFrom />
                <EssentialsCards />
                <ServicesSection />
              </WhiteLinkLayout>
            }
          />
        ))}

        <Route
          path="/pages/white-link/Avail"
          element={
            <WhiteLinkLayout>
              <Avail />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/pages/white-link/SignIN"
          element={
            <WhiteLinkLayout>
              <SignIN />
            </WhiteLinkLayout>
          }
        />

        <Route
          path="/pages/white-link/Sign_Up"
          element={
            <WhiteLinkLayout>
              <Sign_Up />
            </WhiteLinkLayout>
          }
        />

        {/* ❌ 404 Page */}
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
