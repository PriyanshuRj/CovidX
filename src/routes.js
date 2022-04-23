// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import SignIn from "layouts/pages/authentication/sign-in";
// import Upload from "layouts/pages/UploadAudio";
const routes = [
  {
    name: "about us",
    route: "/pages/landing-pages/about-us",
    component: <AboutUs />,
    icon: <Icon>dashboard</Icon>,
  },
  {
    name: "contact us",
    route: "/pages/landing-pages/contact-us",
    component: <ContactUs />,
    icon: <Icon>view_day</Icon>,
  },
  {
    name: "sign in",
    route: "/pages/authentication/sign-in",
    component: <SignIn />,
    icon: <Icon>article</Icon>,
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/PriyanshuRj/CovidX",
  },
];

export default routes;
