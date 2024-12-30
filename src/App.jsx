import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Layout from "./components/Layout.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useEffect, useRef } from "react";
import ToursPage from "./pages/ToursPage.jsx";
import CategoryPage from "./pages/CategoryPage.jsx";
import TourDetails from "./pages/TourDetails.jsx";
import CustomizeTourPage from "./pages/CustomizeTourPage .jsx";

function App() {
  // const containerRef = useRef(null); // Create a ref for the container

  const renderNavbar = () => {
    return <Navbar />;
  };
  const renderFooter = () => {
    return <Footer />;
  };

  // useEffect(() => {
  //   // Initialize Locomotive Scroll
  //   const scroll = new LocomotiveScroll({
  //     el: containerRef.current, // Reference the container you want to scroll
  //     smooth: true, // Enable smooth scrolling
  //     // offset: [60, 0], // Add an offset for the sticky navbar (top height)
  //     // lerp: 0.1, // Smooth scrolling speed
  //   });

  // Recalculate on content changes
  // scroll.update();

  // Destroy scroll instance on cleanup
  // return () => {
  //   if (scroll) {
  //     scroll.destroy();
  //   }
  // };
  // }, []);

  return (
    <BrowserRouter>
      <Layout>
        {renderNavbar()}
        {/* <div data-scroll-container ref={containerRef}> */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HomePage />
                {renderFooter()}
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <AboutPage />
                {renderFooter()}
              </>
            }
          />
          <Route
            path="/tours"
            element={
              <>
                <ToursPage />
                {renderFooter()}
              </>
            }
          />
          <Route
            path="/category/:categoryName"
            element={
              <>
                <CategoryPage />
                {renderFooter()}
              </>
            }
          />
          <Route
            path="/tour/:tourId"
            element={
              <>
                <TourDetails />
                {renderFooter()}
              </>
            }
          />
          <Route
            path="/customize-tour"
            element={
              <>
                <CustomizeTourPage />
                {renderFooter()}
              </>
            }
          />
        </Routes>
        {/* </div> */}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
