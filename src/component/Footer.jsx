import Logo from "../assets/images/bn-logo.png";
import "../assets/sass/components/footer.scss";

const Footer = () => {
  let currentDate = new Date();

  return (
    <footer>
      <a href="/" rel="noopener noreferrer">
        <img src={Logo} alt="Logo" />
      </a>
      <span>Branden Ng © {currentDate.getFullYear()}</span>
    </footer>
  );
};

export default Footer;
