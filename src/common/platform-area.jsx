import Image from 'next/image';
import React, {useEffect, useState} from 'react';

import bg_shape from "../../public/assets/img/platform/p-bg.png";
import platform_img from "../../public/assets/img/payment/platform-1.png"; 

const platform_content ={
    sub_title: "What we offer",
    title: "Simplifying IT",
    description: <>At Starklabs, we specialize in simplifying the complexities of IT, ensuring a seamless and efficient technological landscape for your business.</>,

}
const { sub_title, title, description }  = platform_content

// plat form data 
const platform_data = [
    {
        id: 1,
        cls: "one", 
        count: "01",
        title: "Cost-effectiveness",
        sub_title: "Cost Effective",
        des: <>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</>
        
    },
    {
        id: 2,
        cls: "two", 
        count: "02",
        title: "Innovative Technology",
        sub_title: "Innovative Tech",
        des: <>We stay up-to-date with the latest technology trends and offer innovative solutions that help you stay ahead of the competition.</>,
        
    },
    {
        id: 3,
        cls: "three", 
        count: "03",
        title: "Industry Expertise",
        sub_title: "Industry Expert",
        des: <>We specialize in serving specific industries, such as healthcare, finance, or manufacturing, and offer tailored solutions that meet your unique needs.</>,
        
    },
    {
        id: 4,
        cls: "four", 
        count: "04",
        title: "Scalability",
        sub_title: "Scalability",
        des: <>Our solutions are scalable and can grow with your business, ensuring that you get the most value out of your investment.</>,
        
    },
]

const PlatformArea = ({style_carrer}) => {

    const [active, setActive] = useState(3);
    const handleToggle = (id) => {
        setActive(id)
    }
    const handleAll = (id) => {
        setActive("all")
    }
    

    function mediaSize() { 
		/* Set the matchMedia */
		if (window.matchMedia('(max-width: 768px)').matches) {
            setActive("all") 
		} else {
		 setActive(3)
		}
	};
	
    useEffect(() => {
        /* Call the function */
		mediaSize();
	/* Attach the function to the resize event listener */
	  window.addEventListener('resize', mediaSize, false); 
    },[])

 

    return (
        <>                        
            <div className={`fix tp-platform-area ${style_carrer ? "tp-platform-inner pt-120" : "border-tb blue-bg pt-115 pb-105"} p-relative z-index`} >   
                {style_carrer ? null : 
                    <div className="tp-platform-bg-shape">
                        <Image src={bg_shape} alt="" />
                    </div>
                }                                      
               <div className="container">
                  <div className={`row align-items-end ${style_carrer ? "mb-60" : "mb-40"} `}>
                     <div className={`col-xl-7 col-lg-6 ${style_carrer && "wow tpfadeLeft"}`} 
                            data-wow-duration={style_carrer && ".9s"} 
                            data-wow-delay={style_carrer && ".3s"} >
                        <div className="tp-platform-section-box"> 
                           <h5 className={`${style_carrer ? "inner-section-subtitle" : "tp-section-subtitle-4"} pb-10`}>{sub_title}</h5>
                           <h3 className={`${style_carrer ? "tp-section-title" : "tp-section-title-4"}`}>{title}</h3>
                        </div>
                     </div>
                     <div className="col-xl-5 col-lg-6  wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="tp-platform-text">
                           <p>{description}</p>
                        </div>
                     </div>
                  </div>
                  <div className="row align-items-center">
                     <div className="col-xl-2 col-lg-2 d-none d-xl-block">
                        <div className="tp-platform-img-box">
                           <Image src={platform_img} alt="" />
                        </div>
                     </div>
                     <div className="col-xl-10 col-lg-12">
                        <div className="row-custom-wrapper">
                           <div className="row-custom">
                            {platform_data.map((item, i)  => 
                                <div key={i} className={`col-custom ${active === "all" ? "active" : item.id === active ? "active" : ""}`}  onClick={active !== "all" ? () => handleToggle(item.id) : () => handleAll() }>
                                    <div className="tp-panel-item">
                                        <div className="tp-panel-content">
                                        <span>{item.count}.</span>
                                        <h4 className={`tp-panel-title child-${item.cls}`}> {item.sub_title}</h4>
                                        </div>
                                    </div>
                                    <div className="tp-panel-item-2">
                                        <div className="tp-panel-content-2">
                                        <span>{item.count}.</span>
                                        <h4 className="tp-panel-title-2">{item.title}</h4>
                                        <p>{item.des}</p>
                                        </div>
                                    </div>
                                </div>
                                )
                            } 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
        </>
    );
};

export default PlatformArea;