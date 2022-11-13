import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { useRef } from "react";
import Business from "../components/Business";
import { useAnimation } from "framer-motion";
import Services from "../components/Services";
import Team from "../components/Team";
import Faq from "../components/Faq";
import Contactus from "../components/Contactus";
import Footer from "../components/Footer";
import FooterLast from "../components/FooterLast";
import Comparison from "../components/Comparison";
import Harga from "../components/Harga";
import Alur from "../components/Alur";
import Section from '../components/Section';


const Home: NextPage = () => {
  const containerRef = useRef(null);

  return (
    <div>
      <Head>
        <title>BEST HAIR JAPAN IN INDONESIA</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
        }}
        watch={[]}
        containerRef={containerRef}
      >
        <main data-scroll-container ref={containerRef}>
          <Navbar />
          <div data-scroll-section
          className='header'
          >
            
            <Hero />
            <Business />
            <Services />
            <Comparison />
            <Team />
            <Faq />
            <Contactus />
            
            
            <Footer />
            
            <FooterLast />
          </div>
        </main>
      </LocomotiveScrollProvider>
    </div>
  );
};

export default Home;
