import React, { Component } from "react";
import Header from "../components/header/Header";
import ReckoIntro from "../components/ReckoIntro/ReckoIntro";
import IndustryLeaders from "../components/IndustryLeaders/IndustryLeaders";
import IndustryServices from "../components/IndustryServices/IndustryServices";
import MainSection from "../components/MainSection/MainSection";
import Footer from "../components/Footer/Footer";
export default class homePage extends Component {
  render() {
    return (
      <div>
        <Header />
        <ReckoIntro />
        <IndustryLeaders />
        <IndustryServices />
        <MainSection />
        <Footer/>
      </div>
    );
  }
}
