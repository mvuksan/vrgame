import React from "react";
import Navbar from "components/Navbar";
import Blog from "components/Blog";
import BuySell from "components/BuySell";
import ScrollToTop from "components/ScrollToTop";
import Home from "components/Home";
import Designs from "components/Designs";
import Footer from "components/Footer";

export default function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Designs />
      <BuySell />
      <Blog />
      <Footer />
    </div>
  );
}
