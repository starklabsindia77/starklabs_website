import React from 'react';
import SEO from '../common/seo';
import Blog from '../components/blog';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Starklabs - We power your business with cutting-edge IT solutions"} /> 
            <Blog />           
        </Wrapper>
    );
};

export default index;