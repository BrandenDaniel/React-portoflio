import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "../assets/sass/components/socials.scss";

import "../assets/sass/abstracts/animations.scss";

export default function Socials() {
  return (
    <div className="social-links">
      <a
        href="https://www.linkedin.com/in/brandendaniel/"
        target="_blank"
        className="circle-hover"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </a>

      <a
        href="https://github.com/BrandenDaniel"
        target="_blank"
        className="circle-hover"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a
        href="mailto:brandendanielng@gmail.com"
        target="_blank"
        className="circle-hover"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
}
