import Logo from "../assets/images/bn-logo.png";
import "../assets/sass/components/footer.scss";

const Footer = () => {
  let currentYear = new Date().getFullYear;

  return (
    <footer>
      <a href="#">
        <img src={Logo} alt="Logo" />
      </a>
      © {currentYear} Branden Ng
    </footer>
  );
};

export default Footer;
