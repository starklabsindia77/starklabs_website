import React from "react";
import SEO from "../common/seo";
import HomeOne from "../components/homes/home";
import Wrapper from "../layout/wrapper";

const Home = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Starklabs - We power your business with cutting-edge IT solutions"} />
      <HomeOne />
    </Wrapper>
  );
};

export default Home;
