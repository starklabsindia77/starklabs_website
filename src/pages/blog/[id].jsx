import React, { useEffect, useState } from "react";
import blog_data from '@/src/data/blog-data';
import SEO from "../../common/seo";
import BlogDetails from "../../components/blog-details";
import Wrapper from "../../layout/wrapper";


const Index = ({ id }) => {
    const [blogContent, setBlogContent] = useState(null);
    useEffect(() => {
        const foundItem = blog_data.find(item => item.slug === id);
        setBlogContent(foundItem);        
    }, [blogContent]);
    
    if (blogContent === null) {
        return <div>Loading...</div>; // Or display a message that content is not available
    }  
    return (
        <Wrapper>
        <SEO pageTitle={"Starklabs - We power your business with cutting-edge IT solutions"} />
        <BlogDetails content={blogContent} />
        </Wrapper>
    )
};

export default Index;

export async function getServerSideProps(context) {
  const { id } = context.query; 
  return {
    props: {
      id: id
    },
  }
};
