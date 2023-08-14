import Logo from "../assets/images/bn-logo.png";
import "../assets/sass/components/footer.scss";

const Footer = () => {
  let currentYear = new Date().getFullYear;

  return (
    <footer>
      <a href="#" rel="noopener noreferrer">
        <img src={Logo} alt="Logo" />
      </a>
      <span>© {currentYear} Branden Ng</span>
    </footer>
  );
};

export default Footer;
