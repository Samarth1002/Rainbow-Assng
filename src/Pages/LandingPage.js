import React from "react";
import BlogSection from "../Component/BlogSection";
import ButtonSection from "../Component/ButtonSection";
import ContactSection from "../Component/ContactSection";
import DetailSection from "../Component/DetailSection";
import ExperienceSection from "../Component/ExperienceSection";
import FooterSection from "../Component/FooterSection";
import HeaderSection from "../Component/HeaderSection";
import JoinSection from "../Component/JoinSection";
import Jumbotron from "../Component/Jumbotron";
import NavbarSection from "../Component/NavbarSection";
import QuoteSection from "../Component/QuoteSection";
import SectionHeading from "../Component/SectionHeading";
import Subsection from "../Component/Subsection";
import UploadSection from "../Component/UploadSection";

const LandingPage = () => {
  return (
    <div>
      <HeaderSection />
      <NavbarSection />
      <Jumbotron />
      <ExperienceSection />
      <Subsection />
      <BlogSection />
      <SectionHeading title={"Join Us Now"} />
      <JoinSection />
      <QuoteSection />
      <ContactSection />
      <UploadSection />
      <SectionHeading title={"Try it out for yourself!"} />
      <ButtonSection title={"Get Started"} />
      <DetailSection />
      <FooterSection />
    </div>
  );
};

export default LandingPage;
