// @mui icons

// Material Kit 2 React components
import MKTypography from "components/MKTypography";

// Images
import logoCT from "assets/images/logo-ct-dark.png";

const date = new Date().getFullYear();

export default {
  brand: {
    name: "CovidX",
    image: logoCT,
    route: "/",
  },
  socials: [],
  menus: [
    {
      name: "About Us",
      items: [{ name: "about us", href: "/about" }],
    },
    {
      name: "Upload Audio",
      items: [{ name: "Upload Audio", href: "/" }],
    },
    {
      name: "help & support",
      items: [{ name: "contact us", href: "https://www.creative-tim.com/contact-us" }],
    },
    {
      name: "legal",
      items: [{ name: "terms & conditions", href: "https://www.creative-tim.com/terms" }],
    },
  ],
  copyright: (
    <MKTypography variant="button" fontWeight="regular">
      All rights reserved. Copyright &copy; {date} Dev-alright{" "}
      <MKTypography
        component="a"
        href="/"
        target="_blank"
        rel="noreferrer"
        variant="button"
        fontWeight="regular"
      >
        Dev-alright
      </MKTypography>
      .
    </MKTypography>
  ),
};
