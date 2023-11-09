import React from "react";
import SEO from "../common/seo";
import Price from "../components/price";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Starklabs - We power your business with cutting-edge IT solutions"} />
      <Price />
    </Wrapper>
  );
};

export default index;
