import RightArrowTwo from '@/src/svg/right-arrow-2';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';

import certification_img_1 from "../../../../public/assets/img/partners/aws.png";
import certification_img_2 from "../../../../public/assets/img/partners/azure.png";
import certification_img_3 from "../../../../public/assets/img/partners/jenkins.png";
import certification_img_4 from "../../../../public/assets/img/partners/jira.png";
import certification_img_5 from "../../../../public/assets/img/partners/sentry.png";
import certification_img_6 from "../../../../public/assets/img/partners/tosca.svg";
import certification_img_7 from "../../../../public/assets/img/partners/bitbucket.png";
import certification_img_8 from "../../../../public/assets/img/partners/odoo.png";

const setting = {
    speed: 7000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: true,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    focusOnSelect: true,
    pauseOnHover:true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
            }
        },
        {
            breakpoint: 992,
            settings: {
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}
// security data
const security_data = [
    {
        id: 1,
        img: certification_img_1,
        title: <>Amazon <br /> Web Services</>,        
    },
    {
        id: 2,
        img: certification_img_2,
        title: <>Microsoft <br /> Azure</>,        
    },
    {
        id: 3,
        img: certification_img_3,
        title: <>Jenkins</>,        
    },
    {
        id: 4,
        img: certification_img_4,
        title: <>Jira</>,        
    },
    {
        id: 5,
        img: certification_img_5,
        title: <>Sentry</>,        
    },
    {
        id: 6,
        img: certification_img_6,
        title: <>Tricentis Tosca</>,        
    },
    {
        id: 7,
        img: certification_img_7,
        title: <>BitBucket</>,        
    },
    {
        id: 8,
        img: certification_img_8,
        title: <>Odoo Open Source ERP & CRM</>,        
    },
]

const SecurityArea = () => {
    return (
        <>
            <div className="tp-security-area blue-bg pb-180 fix z-index">
               <div className="container-fluid g-0">
                  <div className="row justify-content-center">
                     <div className="col-xl-8">
                        <div className="tp-security-section-box text-center pb-100">
                           <h5 className="tp-section-subtitle-4 both pb-10 wow tpfadeUp" data-wow-duration=".9s"
                              data-wow-delay=".3s">Explore Our Level</h5>
                           <h3 className="tp-section-title-4">Partners & Certfications</h3>
                        </div>
                     </div>
                  </div>
                  <div className="tp-security-slider-wrapper wow tpfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
                     <div className="tp-security-slider-active">
                        <Slider {...setting} >    
                        {security_data.map((item, i)  => 
                            <div key={i} className="tp-security-main">
                                <div className="tp-security-wrapper d-flex align-items-center justify-content-between">
                                    <div className="tp-security-item d-flex align-items-center">
                                        <div className="tp-security-img">
                                            <Image src={item.img} alt="starklabs" />
                                        </div>
                                        <div className="tp-security-content">
                                            <h4 className="tp-security-title-sm">{item.title}</h4>
                                        </div>
                                    </div>
                                    {/* <div className="tp-security-link">
                                        <Link href="#">
                                            <RightArrowTwo />
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                         )} 
                        </Slider>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default SecurityArea;