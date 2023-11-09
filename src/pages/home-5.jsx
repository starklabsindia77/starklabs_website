import React from "react";
import SEO from "../common/seo";
import HomeFive from "../components/homes/home-5";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Starklabs - We power your business with cutting-edge IT solutions"} />
      <HomeFive />
    </Wrapper>
  );
};

export default index;
