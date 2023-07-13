import React from "react";
import "../assets/sass/pages/reactProjects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";

function ReactProjectsPage() {
  return (
    <div className="react-projects">
      <h1>React projects</h1>

      <a
        className="react-projects__item"
        href="https://crypto-app-one-sepia.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="react-projects__icon">
          <span>
            <FontAwesomeIcon icon={faBitcoin} />
          </span>
        </div>

        <div>
          <h2>Cryptoverse</h2>

          <p>
            Crypto app showcasing the top 100 cryptocurrencies with current
            prices, news, market cap, and other statistics.
          </p>
          <div class="react-projects__tech-stack">
            <span>React</span>
            <span>Redux</span>
            <span>Rapid API</span>
            <span>Sass</span>
            <span>Ant Design</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ReactProjectsPage;
