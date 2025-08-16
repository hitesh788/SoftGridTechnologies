import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import { Toaster } from "react-hot-toast";
import PrivacyPolicy from "./components/Footer/PrivacyPolicy";
import TermsAndConditions from "./components/Footer/TermsAndConditions";
import Testimonials from "./components/Testimonials";
import OurValue from "./components/OurValue";
import Stats from "./components/Stats";
import PageNotFound from "./components/PageNotFound";
import Blog1 from "./components/Blogs/Blog1";
import Blog2 from "./components/Blogs/Blog2";
import Blog3 from "./components/Blogs/Blog3";
import Blog4 from "./components/Blogs/Blog4";
import Blog5 from "./components/Blogs/Blog5";
import Blog6 from "./components/Blogs/Blog6";
import Blog from "./components/MainBlog/Blog";
import About from './components/About/About';
import FaqSection from './components/Footer/FaqSection';
import AdvertiseWithUs from './components/AdvertiseWithUs';
import TitleManager from './components/TitleManager';

// Scroll restoration component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Scroll to section handler
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <Toaster />
      <Navbar />
      <ScrollToTop />
      <ScrollToSection />
      <TitleManager />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home id="home" />
              <Stats id="stats" />
              <Services id="services" />
              <Projects id="projects" />
              <OurValue id="our-value" />
              <Testimonials id="testimonials" />
              <Contact id="contact" />
            </>
          }
        />

        {/* Blogs route with index and nested blog routes */}
        <Route path="/blogs" element={<Outlet />}>
          <Route index element={<Blog />} />
          <Route path="top-10-web-development-trends" element={<Blog1 />} />
          <Route
            path="the-ultimate-guide-to-digital-marketing-roi"
            element={<Blog2 />}
          />
          <Route
            path="essential-features-for-successful-mobile-apps"
            element={<Blog3 />}
          />
          <Route path="future-of-ai-in-business-strategy" element={<Blog4 />} />
          <Route path="ui-ux-for-e-commerce-success" element={<Blog5 />} />
          <Route
            path="top-cybersecurity-trends-to-follow"
            element={<Blog6 />}
          />
        </Route>

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/FAQ" element={<FaqSection />} />
        <Route path="/advertise-with-us" element={<AdvertiseWithUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
