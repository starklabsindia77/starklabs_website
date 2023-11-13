import React, { useEffect, useState } from "react";
import service_data from '@/src/data/service-data';
import SEO from "../../common/seo";
import ServiceDetails from "../../components/service-details";
import Wrapper from "../../layout/wrapper";

const index = ({ id }) => {

    const [serviceContent, setServiceContent] = useState(null);
    useEffect(() => {
        const foundItem = service_data.find(item => item.slug === id);
        setServiceContent(foundItem); 
        console.log("service info ", foundItem);       
    }, [id]);



    if (serviceContent === null) {
        return <div>Loading...</div>; // Or display a message that content is not available
    }  
    return (
        <Wrapper>
        <SEO pageTitle={"Starklabs - We power your business with cutting-edge IT solutions"} />
        <ServiceDetails content={serviceContent}/>
        </Wrapper>
    );
};

export default index;


export async function getServerSideProps(context) {
    const { id } = context.query; 
    return {
      props: {
        id: id
      },
    }
  };
