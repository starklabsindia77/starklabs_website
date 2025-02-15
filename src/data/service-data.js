import ServiceIconOne from "../svg/service/service-icon-1"
import ServiceIconTwo from "../svg/service/service-icon-2"
import ServiceIconThree from "../svg/service/service-icon-3"
import ServiceIconFoure from "../svg/service/service-icon-4"
import ServiceIconFive from "../svg/service/service-icon-5"
import ServiceIconsix from "../svg/service/service-icon-6"
import ServiceIconSeven from "../svg/service/service-icon-7"

// images import  
import img_1 from "../../public/assets/img/service/sv-icon-1.png";
import img_2 from "../../public/assets/img/service/it.png";
import img_3 from "../../public/assets/img/service/bank.png";
import img_4 from "../../public/assets/img/service/cloud.png";
import img_5 from "../../public/assets/img/service/sv-icon-5.png";

import ManagedServices from "../../public/assets/img/service/managed-services.png";
// for home 04
import icon_1 from "../../public/assets/img/service/sv-icon-4-1.png"
import icon_2 from "../../public/assets/img/service/sv-icon-4-2.png"
import icon_3 from "../../public/assets/img/service/sv-icon-4-3.png"
import icon_4 from "../../public/assets/img/service/sv-icon-4-4.png"

// for home 05
import img_6 from "../../public/assets/img/service/sv-icon-5-1.png";
import img_7 from "../../public/assets/img/service/sv-icon-5-2.png";
import img_8 from "../../public/assets/img/service/sv-icon-5-3.png";
import img_9 from "../../public/assets/img/service/sv-icon-5-4.png";

// import img_10 from "../../public/";
// import img_11 from "../../public/";
// import img_12 from "../../public/";
// import img_13 from "../../public/";
// import img_14 from "../../public/";
// import img_15 from "../../public/";




const  service_data = [
    // for home 01 
    {
        id: 1,
        icon: ManagedServices,
        img: ManagedServices,
        sub_title: "Starklabs",
        title: "Managed Services",
        slug:"managed-services",
        description: <>Why hire an internal IT person, when you can have an entire team of IT experts for a fraction of the cost?</>,
        delay: ".4s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },
    {
        id: 2,
        icon: img_2,
        img: img_2,
        sub_title: "Starklabs",
        title: "IT Consulting & Advisory",
        slug:"it-consulting-advisory",
        description: <>We offer affordable IT solutions that help you reduce costs and improve your bottom line.</>,
        delay: ".6s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },
    {
        id: 3,
        icon: img_3,
        img: img_3,
        sub_title: "Starklabs",
        title: "Fintech Software Development",
        slug:"fintech-software-development",
        description: <>Shield your digital fortress with our state-of-the-art Cybersecurity solutions. From threat detection to proactive defense, we've got your back in the ever-evolving landscape of online security. Your data's safety is our priority.</>,
        delay: ".7s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },
    {
        id: 4,
        icon: img_4,
        img: img_4,
        sub_title: "Starklabs",
        title: "Cloud Consulting & Advisory",
        slug:"cloud-consulting-advisory",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".8s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },
    // {
    //     id: 5,
    //     icon: img_5,
    //     img: img_5,
    //     title: "Artificial Intelligence",
    //     description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
    //     delay: ".9s",
    // },

    // // for home 03
    // {
    //     id: 6,
    //     icon: <ServiceIconOne />,
    //     img: <ServiceIconOne />,
    //     title: "Project management jamil",
    //     description: <>Automate Workflows <br /> and Monitor your Sales.</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 7,
    //     icon: <ServiceIconTwo />,
    //     img: <ServiceIconTwo />,
    //     title: "Sales analytics",
    //     description: <>Track your Marketing to see the best Results.</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 8,
    //     icon: <ServiceIconThree />,
    //     img: <ServiceIconThree />,
    //     title: "Easy Invoicing",
    //     description: <>Automate recurring invoices and save time.</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 9,
    //     icon: <ServiceIconFoure/>,
    //     img: <ServiceIconFoure />,
    //     title: "Complete Visibility",
    //     description: <>Get real-time visibility into every expense.</>,
    //     delay: ".9s",
    // },
    
    // for home 04
    {
        id: 10,
        icon: icon_1,
        img: icon_1,
        title: "Cyber Security Solutions",
        slug: "cyber-security-solutions",
        sub_title: "Starklabs",
        cls: "1",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },
    {
        id: 11,
        icon: icon_2,
        img: icon_2,
        title: "Mobile Development",
        slug: "mobile-development",
        sub_title: "Starklabs",
        cls: "2",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },
    {
        id: 12,
        icon: icon_3,
        img: icon_3,
        title: "Managed Web Application",
        slug: "managed-web-application",
        sub_title: "Starklabs",
        cls: "3",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },
    {
        id: 13,
        icon: icon_4,
        img: icon_4,
        title: "24//7 Customer Support",
        slug: "customer-support",
        sub_title: "Starklabs",
        cls: "4",
        description: <>Lorem Ipsum is simply dummy text <br /> of the printing</>,
        delay: ".9s",
        des:{
            overview_title: "Service Overview",
            overview_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum, orci at
            dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod dapibus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.</>,
            overview_list: [
                <>Product Quality: <br /> <span>Automatically syncs across all your devices. You can also access....</span></>,
                <>On Demand Design: <br /> <span>Images, videos, PDFs and audio files are supported.</span></>,
                <>Choice of Service: <span>Whatever your business needs, you can choose a service.</span></>, 
            ],

            challange_titel: "The Challange",
            challange_des: <>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum,
            orci at dapibus, massa ante pharetra tellus. Maecenas interdum, orci at euismod
            dapibus. Lorem ipsum dolor sit amet.!</>,
        }
    },

    // for home 05
    // {
    //     id: 14,
    //     icon: img_6,
    //     img: img_6,
    //     title: <>Live Inventory <br /> Management</>,
    //     sub_title: "Starklabs",
    //     cls: "4",
    //     description: <>Track materials and stock for outsourced purchase orders</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 15,
    //     icon: img_7,
    //     img: img_7,
    //     title: <>Real-time Master <br />  Planning</>,
    //     sub_title: "Starklabs",
    //     cls: "4",
    //     description: <>Track materials and stock for outsourced purchase orders</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 16,
    //     icon: img_8,
    //     img: img_8,
    //     title: <>Easy Contract <br /> Manufacturing</>,
    //     sub_title: "Starklabs",
    //     cls: "4",
    //     description: <>Track materials and stock for outsourced purchase orders</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 17,
    //     icon: img_9,
    //     img: img_9,
    //     title: <>Omnichannel <br /> Order Management</>,
    //     sub_title: "Starklabs",
    //     cls: "4",
    //     description: <>Track materials and stock for outsourced purchase orders</>,
    //     delay: ".9s",
    // },

    // service page
    // {
    //     id: 18,
    //     icon: <ServiceIconOne />,
    //     img: <ServiceIconOne />,
    //     title: "Project management jamil",
    //     description: <>Automate Workflows <br /> and Monitor your Sales.</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 19,
    //     icon: <ServiceIconTwo />,
    //     img: <ServiceIconTwo />,
    //     title: "Sales analytics",
    //     description: <>Track your Marketing to see the best Results.</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 20,
    //     icon: <ServiceIconThree />,
    //     img: <ServiceIconThree />,
    //     title: "Easy Invoicing",
    //     description: <>Automate recurring invoices and save time.</>,
    //     delay: ".9s",
    // },
    // {
    //     id: 21,
    //     icon: <ServiceIconFoure/>,
    //     img: <ServiceIconFoure />,
    //     title: "Complete Visibility",
    //     description: <>Get real-time visibility into every expense.</>,
    //     delay: ".9s",
    // },
    
    // {
    //     id: 22,
    //     icon: <ServiceIconFive/>,
    //     img: <ServiceIconFive />,
    //     title: "FIELDS OPTION",
    //     description: <>Quick & Easy Repeater Fields Option</>,
    //     delay: ".9s",
    // },
    
    // {
    //     id: 23,
    //     icon: <ServiceIconsix/>,
    //     img: <ServiceIconsix />,
    //     title: "Safe Online Services",
    //     description: <>Online services to view company level.</>,
    //     delay: ".9s",
    // },
    
    // {
    //     id: 24,
    //     icon: <ServiceIconSeven/>,
    //     img: <ServiceIconSeven />,
    //     title: "Online marketing",
    //     description: <>Get real-time visibility into every expense.</>,
    //     delay: ".9s",
    // },


]
export default service_data