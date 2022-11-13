import React from "react";
import Clients from "../../components/Clients";
import Footer from "../../components/Footer";
import { Header } from "../../components/Header";
//import Hero from "../../components/Hero";
import Adventure from "../../components/Adventure";
import Nft from "../../components/Nft";

const Home = () => {
  return (
    <>
      <Header />
      <Clients />
      <Adventure />
      <Nft />
      <Footer />
    </>
  );
};

export default Home;
