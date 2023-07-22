import React, { Fragment } from "react";
import Header from "../components/Header";

import AboutHeader from "../components/About/home-two";
import About from "../components/About/home-one";
import Funfact from "../components/Funfact";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";
import LoginRegister from "../components/LoginRegister";
import MobileMenu from "../components/MobileMenu";


import ServiceThumb from "../assets/img/about.jpg";


const PageAbout = () => {
  return (
    <Fragment>
      <Header />
      
      {/* <PageHeader/> */}
      
      <AboutHeader
        title={"Our Team"}
        heading="Meet Our <br/> Expert Member"
        thumb={ServiceThumb}
        content="<b>Businex</b> always try to provide the best Business Solutions for Clinets to grow up their Business very sharply and smoothly. We voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
      />
      <About />
      {/* <AboutContent /> */}
      
      {/* <Features classes={"sm-top"} /> */}
      {/* <Testimonial /> */}
      {/* <Team /> */}
      
      <Funfact classes="sp-top" />
      <CallToAction />
      <Footer />
      <LoginRegister />
      <MobileMenu />
    </Fragment>
  );
};

export default PageAbout;
