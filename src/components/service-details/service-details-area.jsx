import React from 'react';
import AnswerQuestion from '@/src/common/answer-question';
import Link from 'next/link';
import Image from 'next/image';
import dashbord from "../../../public/assets/img/service/sv-dashbord.png";
import service_img from "../../../public/assets/img/service/sv-details-1.jpg"; 

const service_details_content = {
    category_title:"Service Category",
    categorys: [
      {
         id: 1,        
         title: "Managed Services",
         slug:"managed-services",
         cls:"",         
     },
     {
         id: 2,         
         title: "IT Consulting & Advisory",
         slug:"it-consulting-advisory",
         cls:"",
     },
     {
         id: 3,
         title: "Fintech Software Development",
         slug:"fintech-software-development",
         cls:"",
     },
     {
         id: 4,         
         title: "Cloud Consulting & Advisory",
         slug:"cloud-consulting-advisory",
         cls:"",
     },
     {
         id: 5,         
         title: "Cyber Security Solutions",
         slug: "cyber-security-solutions",
         cls:"",
      },
      {
            id: 6,    
            title: "Mobile Development",
            slug: "mobile-development",      
            cls: "2",            
      },
      {
            id: 7,      
            title: "Managed Web Application",
            slug: "managed-web-application",
            cls: "3",            
      },
      {
            id: 8,      
            title: "24//7 Customer Support",
            slug: "customer-support",
            cls: "4",            
      },
    ],
    bg_img: "/assets/img/service/sv-bg.jpg",

    

    
}
const {
    category_title, 
    categorys, 
    bg_img,
}  = service_details_content

const ServiceDetailsArea = ({content}) => {

   const {
      overview_title, 
      overview_des, 
      overview_list, 
      challange_titel, 
      challange_des 
   } = content.des

    return (
        <>
            <div className="sv-details-area pt-100 pb-100">
            <div className="container">
               <div className="row">
                  <div className="col-xl-4 col-lg-4">
                     <div className="sv-details-widget">
                        <div className="sv-details-category mb-30">
                           <div className="sv-details-category-title">
                              <h4 className="sv-details-title-sm">{category_title}</h4>
                           </div>
                           <div className="sv-details-category-list">
                              <ul>
                                {categorys.map((item, i)  => 
                                    <li key={i} className={item.slug === content.slug ? 'active': item.cls}>
                                        <Link href={`/service/${item.slug}`}><span>{item.title}</span><i className="fal fa-angle-right"></i></Link>
                                    </li>
                                )} 
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service__dashboard mb-30" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-service__top-content">
                              <h3 className="tp-service__title-white">Data Analysis <br /> Tools & Methods</h3>
                              <p>Lorem Ipsum is simply dummy text <br /> of the printing</p>
                              <Link className="tp-btn-orange tp-btn-hover alt-color-white" href="#">
                                 <span>Work with Us</span>
                                 <b></b>
                              </Link>
                           </div>
                           <div className="tp-service__dashdboard-sm-img">
                              <Image src={dashbord} className="wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".3s" 
                               alt="starklabs" />
                           </div>
                        </div>

                        <div className="sv-details-social-box mb-30">
                           <h4 className="sv-details-title-sm">Share it.</h4>
                           <div className="sv-details-social-link">
                              <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                              <Link href="#"><i className="fab fa-twitter"></i></Link>
                              <Link href="#"><i className="fab fa-instagram"></i></Link>
                              <Link href="#"><i className="fab fa-youtube"></i></Link>
                           </div>
                        </div>

                     </div>
                  </div>
                  
                  <div className="col-xl-8 col-lg-8">
                     <div className="sv-details-wrapper">
                        <div className="sv-details-thumb mb-45">
                           <Image className="w-100" src={service_img} alt="starklabs" />
                        </div>
                        <div className="sv-details-title-box mb-55">
                           <h4 className="sv-details-title">{overview_title}</h4>
                           <p>{overview_des}</p>
                        </div>
                        <div className="sv-details-text mb-35">
                           <h4 className="sv-details-text-title pb-10">Going Beyond the Usual</h4>
                           <ul>
                            {overview_list.map((item, i)  =>  <li key={i}> <i className="fal fa-check"></i> <p> {item} </p> </li> )} 
                           </ul>
                        </div>
                        <div className="sv-details-text-2">
                           <h4 className="sv-details-text-title">{challange_titel}</h4>
                           <p>{challange_des}</p>
                        </div>
                        {/* <div className="tp-faq-area pt-50">
                           <div className="container p-0">
                              <div className="row g-0">
                                 <div className="col-xl-12">
                                    <h4 className="sv-details-title">Any Questions find here.</h4>
                                    <AnswerQuestion style={true} /> 
                                 </div>
                              </div>
                           </div>
                        </div> */}
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default ServiceDetailsArea;