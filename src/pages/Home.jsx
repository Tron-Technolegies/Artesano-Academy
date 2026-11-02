import React from "react";

import Hero from "../components/home/Hero";
import TrendingCourses from "../components/home/TrendingCourses";
import WhyArtesano from "../components/home/WhyArtesano";
import CareerRoadmap from "../components/home/CareerRoadmap";
import StudentPlacement from "../components/home/StudentPlacement";
import Mentors from "../components/home/Mentors";
import IndustryExperts from "../components/home/IndustryExperts";
import FAQ from "../components/home/FAQ";
import ContactSection from "../components/home/ContactSection";
import FinalCTA from "../components/home/FinalCTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrendingCourses />
        <WhyArtesano />
        <CareerRoadmap />
        <StudentPlacement />
        <Mentors />
        <IndustryExperts />
        <FAQ />
        <ContactSection />
        <FinalCTA />
      </main>

      <Footer />
    </>
  );
}
