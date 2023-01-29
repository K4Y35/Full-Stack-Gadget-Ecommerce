import React from "react";
import Features from "./../components/features/Features";
import Footer from "./../components/Footer/Footer";
import Hero from "./../components/Hero/Hero";
import LatestNews from "./../components/LatestNews/LatestNews";
import NavBar from "./../components/navbar/NavBar";
import Product from "./../components/Product/Product";
import Review from "./../components/Review/Review";
import SaleBanner from "./../components/SaleBanner/SaleBanner";
import Sponsor from "./../components/Sponsor/Sponsor";

const Home = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <Product />
      <SaleBanner />
      <Features />
      <Review />
      <Sponsor />
      <LatestNews />
      <Footer />
    </>
  );
};

export default Home;
