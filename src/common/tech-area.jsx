import Image from 'next/image';
import logo from "../../public/assets/img/payment-logo/logo-main.png";
import tech_img_1 from "../../public/assets/img/tech-logo/php.png";
import tech_img_2 from "../../public/assets/img/tech-logo/typescript.png";
import tech_img_3 from "../../public/assets/img/tech-logo/tailwind.png";
import tech_img_4 from "../../public/assets/img/tech-logo/javascript.png";
import tech_img_5 from "../../public/assets/img/tech-logo/vue.png";
import tech_img_6 from "../../public/assets/img/tech-logo/react.png";
import tech_img_7 from "../../public/assets/img/tech-logo/mongo-db.png";
import tech_img_8 from "../../public/assets/img/tech-logo/sass.png";
import tech_img_9 from "../../public/assets/img/tech-logo/figma.png";
import tech_img_10 from "../../public/assets/img/tech-logo/css.png";
import tech_img_11 from "../../public/assets/img/tech-logo/python.png";
import tech_img_12 from "../../public/assets/img/tech-logo/nodejs.png";
import tech_img_13 from "../../public/assets/img/tech-logo/sql.png";
import tech_img_14 from "../../public/assets/img/tech-logo/flutter.png";
import tech_img_15 from "../../public/assets/img/tech-logo/angularjs.png";
import tech_img_16 from "../../public/assets/img/tech-logo/html.png";

// payment_method data
const payment_method = [
    {
        id: 1,
        line_circle: 1,
        cls: "",
        img: tech_img_1,
    },
    {
        id: 2,
        line_circle: 2,
        cls: "d-none d-lg-block",
        img: tech_img_2,
    },
    {
        id: 3,
        line_circle: 3,
        cls: "",
        img: tech_img_3,
    },
    {
        id: 4,
        line_circle: 4,
        cls: "d-none d-lg-block",
        img: tech_img_4,
    },
    {
        id: 5,
        line_circle: 5,
        cls: "",
        img: tech_img_5,
    },
    {
        id: 6,
        line_circle: 6,
        cls: "d-none d-lg-block",
        img: tech_img_6,
    }, 
    {
        id: 7,
        line_circle: 7,
        cls: "",
        img: tech_img_7,
    }, 
    {
        id: 8,
        line_circle: 8,
        cls: "d-none d-lg-block",
        img: tech_img_8,
    }, 
    {
        id: 9,
        line_circle: 9,
        cls: "",
        img: tech_img_9,
    }, 
    {
        id: 10,
        line_circle: 10,
        cls: "d-none d-lg-block",
        img: tech_img_10,
    },
    {
        id: 11,
        line_circle: 11,
        cls: "",
        img: tech_img_11,
    }, 
    {
        id: 12,
        line_circle: 12,
        cls: "d-none d-lg-block",
        img: tech_img_12,
    }, 
    {
        id: 13,
        line_circle: 13,
        cls: "",
        img: tech_img_13,
    }, 
    {
        id: 14,
        line_circle: 14,
        cls: "d-none d-lg-block",
        img: tech_img_14,
    }, 
    {
        id: 15,
        line_circle: 15,
        cls: "",
        img: tech_img_15,
    },
    {
        id: 16,
        line_circle: 16,
        cls: "",
        img: tech_img_16,
    },
]

const price_content  = {
    sub_title: "A snapshot of technologies, systems, & platforms covering our areas of expertise.",
    title: "Areas of technology expertise",
    header_text: <>You pay <span>$59.00/mo</span> today Renews <br /> April 2024 For <span>$69.00/mo</span></>
}
const {sub_title, title,  header_text}  = price_content



const TechArea = () => {
    return (
        <>
            <div className="tp-price-area pt-120 pb-145 blue-bg">
               <div className="container">

                  <div className="row g-0">
                     <div className="col-12">
                        <div className="tp-price-sction-box text-center mb-30">
                           <h5 className="tp-section-subtitle-4 both pb-10">{sub_title}</h5>
                           <h3 className="tp-section-title-4 pb-25">{title}</h3>
                        </div>
                     </div>
                  </div> 
                  <div className="tp-payment-method__wrapper text-center p-relative">
                    <div className="tp-payment-method__main-circle p-relative z-index">
                            <div className="tp-payment-method__main-img z-index-3">
                                <Image src={logo} alt="starklabs" />
                            </div>

                            {payment_method.map((item, i) => (
                                <div key={i} className={`tp-payment-method__line-${item.line_circle} ${item.cls}`} >
                                    <div className={`tp-payment-method__circle circle-${item.line_circle}`}></div>
                                    <span>
                                    <Image src={item.img} alt="starklabs" />
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                  {/* <div className="tp-price-table">
                     <div className="tp-price-table-wrapper">
                        <div className="row g-0 align-items-center">

                           <div className="col-4">
                              <div className="tp-price-header">
                                 <div className="tp-price-header-img">
                                    <Image src={header_img} alt="starklabs" />
                                 </div>
                                 <div className="tp-price-header-content">
                                    <p>{header_text}</p>
                                 </div>
                              </div>
                           </div>

                           <div className="col-8">
                              <div className="tp-price-top-wrapper">
                                {price_header.map((item, i)  => 
                                    <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                        <div className="tp-price-top-tag-wrapper">
                                            <span>{item.title}</span>
                                            <p>{item.description}</p>
                                        </div>
                                        <div className="tp-price-top-title-wrapper">
                                            <h4><em>$</em>{item.price} <span>/mo</span></h4>
                                            <p>Billed monthly</p>
                                            <Link className="tp-btn-service" href="/price">Get Started</Link>
                                        </div>
                                    </div>
                                )}
                              </div>
                           </div>

                        </div>

                        <div className="tp-price-feature-wrapper">
                           <div className="row g-0">

                              <div className="col-4">
                                 <div className="tp-price-feature-box">
                                    {price_feature.map((item, i)   => 
                                        <div key={i} className="tp-price-feature-item">
                                            <div className="d-flex align-items-center">
                                                <span>{item.title}</span>
                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                    <NoticIcon /> 
                                                    <div className="tp-price-feature-tooltip">
                                                        <p>{item.notice}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )} 
                                 </div>
                              </div>

                              <div className="col-8">
                                {price_feature_info.map((item, i )  => 
                                    <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                        {item.info.map((inf, i)   => 
                                            <div key={i} className="tp-price-feature-info text-center">
                                                <span>{inf}</span>
                                            </div>
                                        )} 
                                    </div>
                                )}
                              </div>

                           </div>
                        </div>

                     </div>
                  </div> */}
               </div>
            </div>
        </>
    );
};

export default TechArea;