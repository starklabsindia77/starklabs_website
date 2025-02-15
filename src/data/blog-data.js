import img_1 from "../../public/assets/img/blog/blog-1.jpg"
import img_2 from "../../public/assets/img/blog/blog-2.jpg"
import img_3 from "../../public/assets/img/blog/blog-3.jpg"

import author_img_1 from "../../public/assets/img/blog/blog-avata-1.png";
import author_img_2 from "../../public/assets/img/blog/blog-avata-2.png";
import author_img_3 from "../../public/assets/img/blog/blog-avata-3.png";

import img_4 from "../../public/assets/img/blog/blog-4-1.jpg"
import img_5 from "../../public/assets/img/blog/blog-4-2.jpg"

const blog_data = [
    // home 03 
    {
        id: 1, 
        img: img_1,
        category: "Crm Software",
        color: "1",
        date: "28 April, 2023",
        title: <>How Chatbots Can Help You <br /> Drive More Sales</>,
        slug:'How Chatbots Can Help You Drive More Sales',
        author_img: author_img_1,
        author_name: "Hilary Ouse",
        job_title: "Founder & CEO Dulalix"
    },
    {
        id: 2, 
        img: img_2,
        category: "Sales Tools",
        color: "2",
        date: "28 April, 2023",
        title: <>6 Tips for Personal Selling that Guarantee Success in 2023</>,
        slug:'6 Tips for Personal Selling that Guarantee Success in 2023',
        author_img: author_img_2,
        author_name: "Rudra Ghosh",
        job_title: "Founder & CEO Dulalix"
    },
    {
        id: 3, 
        img: img_3,
        category: "Sales Management",
        color: "3",
        date: "28 April, 2023",
        title: <>How Chatbots Can Help You <br /> Drive More Sales</>,
        slug:'How Chatbots Can Help You Drive More Sales',
        author_img: author_img_3,
        author_name: "Penny Tool",
        job_title: "Founder & CEO Dulalix"
    },

    // home 04
    {
        id: 4, 
        img: img_4,
        category: "Blog",
        color: "",
        date: "10 min",
        title: <>Demystifying Blockchain: A Revolution in Trust and Transparency</>,
        slug:'demystifying-blockchain:-a-revolution-in-trust-and-transparency',
        description: <>At its core, a blockchain is a decentralized, distributed ledger that records transactions across a network of computers.</>,
        author_img: author_img_3,
        author_name: "Penny Tool",
        job_title: "Founder & CEO Dulalix"
    },
    {
        id: 5, 
        img: img_5,
        category: "Blog",
        color: "",
        date: "24 min",
        title: <>The Rise of Headless CMS: Unleashing Content Across Multichannel Experiences</>,
        slug:'the-rise-of-headless-cms-unleashing-content-across-multichannel-experiences',
        description: <>A headless CMS is a content management system that separates the content creation and management process from its presentation.</>,
        author_img: author_img_3,
        author_name: "Penny Tool",
        job_title: "Founder & CEO Dulalix"
    },

    // anything here


]
export default blog_data