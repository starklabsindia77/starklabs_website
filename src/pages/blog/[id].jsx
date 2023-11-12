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
        console.log("blog content 1", JSON.stringify(blogContent));
    }, [blogContent]);  
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
