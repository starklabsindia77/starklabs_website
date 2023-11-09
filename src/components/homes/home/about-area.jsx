import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import img_1 from "../../../../public/assets/img/about/about-4-3.png";
import img_2 from "../../../../public/assets/img/about/about-4-1.png";
import img_3 from "../../../../public/assets/img/about/about-4-2.png";

// about content here
const about_content = { 
    sub_title: "Who we are",
    title: "Solving IT challenges in every industry, every day.", 
    des: <>At Starklabs, we thrive on solving intricate IT challenges across diverse industries, day in and day out. Our expertise transforms obstacles into opportunities, ensuring seamless operations and unparalleled efficiency for your business.</>,
    feature_1: <>Industry & Manufacturing</>,
    feature_2: <>Transportation & Logistics</>,
    feature_3: <>Healthcare</>,
    feature_4: <>Banks & Insurance</>,
    feature_5: <>Consulting Providers</>,
    feature_6: <>Non-Profit</>,
    btn_text: "About Us",
}

const {sub_title, title, des, feature_1, feature_2, feature_3, feature_4, feature_5, feature_6, btn_text }  = about_content


const AboutArea = () => {
    return (
        <>
            <div className="tp-about-area pb-135 blue-bg p-relative">
               <div className="tp-about-top-img-2">
                  <Image src={img_1} alt="starklabs" />
               </div>
               <div className="container">
                  <div className="row align-items-center">
                     <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".9s" data-wow-delay=".3s">
                        <div className="tp-about-left-img text-md-center p-relative text-start z-index">
                           <Image src={img_2} alt="starklabs" />
                           <div className="tp-about-top-img">
                              <Image src={img_3} alt="starklabs" />
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 col-lg-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-security-section-wrapper">
                           <div className="tp-security-section-box mb-45">
                              <h5 className="tp-section-subtitle-4 pb-10">{sub_title}</h5>
                              <h3 className="tp-section-title-4 pb-25">{title}</h3>
                              <p>{des}</p>
                           </div>
                           <div className="tp-security-feature">
                              <ul>
                                 <li><i className="far fa-check"></i>{feature_1}</li>
                                 <li><i className="far fa-check"></i>{feature_2}</li>
                                 <li><i className="far fa-check"></i>{feature_3}</li>
                                 <li><i className="far fa-check"></i>{feature_4}</li>
                                 <li><i className="far fa-check"></i>{feature_5}</li>
                                 <li><i className="far fa-check"></i>{feature_6}</li>
                              </ul>
                           </div>
                           <div className="tp-security-btn">
                              <Link className="tp-btn-yellow-border" href="/about">{btn_text}<i className="far fa-angle-right"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default AboutArea;