const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/",
    active: "active",
   
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About",
    link: "/about",
    active: "",
    sub_menus: [
      { link: "/about", title: "About" },
      { link: "/service", title: "Service" },
      { link: "/service", title: "Service Details" },
      { link: "/team", title: "Team" },
      { link: "/team-details", title: "Team Details" },
      { link: "/career", title: "Career" },
      { link: "/career-details", title: "Career Details" },
      { link: "/integrations", title: "Integrations" },
      { link: "/price", title: "Price" },
      { link: "/register", title: "Register" },
      { link: "/sign-in", title: "Signin" },
      { link: "/404", title: "404" }, 
    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: false,
    title: "Services",
    link: "/service",
    active: "",
  },
  
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Projects",
    link: "/project",
    active: "",
    sub_menus: [
      { link: "/project", title: "Project" },
      { link: "/project-details", title: "Project Details" }, 
    ],
  },

  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Blog",
    link: "/blog",
    active: "",
    sub_menus: [
      { link: "/blog", title: "Blog" },
      { link: "/blog-list", title: "Blog List" },
      { link: "/blog", title: "Blog Details" },
      { link: "/blog-details-2", title: "Blog Details 02" },
    ],
  },
  
  {
    id: 6,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
