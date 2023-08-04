import React from "react";
import "../assets/sass/pages/reactProjects.scss";
import YouTubeCloneIcon from "../assets/images/project-icons/YT-clone-icon.png";
import CryptoverseIcon from "../assets/images/project-icons/cryptoverse-icon.png";
import GoldsGymIcon from "../assets/images/project-icons/golds-gym.png";

function ReactProjectsPage() {
  return (
    <div className="react-projects">
      <h1>React projects</h1>
      <a
        className="react-projects__item"
        href="https://fitness-app-branden.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="react-projects__icon react-projects__icon--light">
          <span>
            <img src={GoldsGymIcon} alt="Fitness app icon" />
          </span>
        </div>

        <div>
          <h2>Fitness App</h2>
          <p>
            Find the perfect exercise to go with your gym sessions. Search for
            exercises and equipments that targets specific muscle groups.
          </p>
          <div class="react-projects__tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Rapid API integration</span>
            <span>Sass</span>
            <span>Material UI</span>
          </div>
        </div>
      </a>
      <a
        className="react-projects__item"
        href="https://youtube-clone-nine-henna.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="react-projects__icon">
          <span>
            <img src={YouTubeCloneIcon} alt="YouTube clone icon" />
          </span>
        </div>

        <div>
          <h2>YouTube clone</h2>

          <p>
            YouTube clone app with searchable videos and channels. The app
            comprises a video and channel feed, alongside a sidebar nav with
            preset topics/categories.
          </p>
          <div class="react-projects__tech-stack">
            <span>React</span>
            <span>JavaScript</span>
            <span>Material UI</span>
            <span>Rapid API integration</span>
            <span>Axios</span>
          </div>
        </div>
      </a>

      <a
        className="react-projects__item"
        href="https://crypto-app-one-sepia.vercel.app/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="react-projects__icon react-projects__icon--dark">
          <span>
            <img src={CryptoverseIcon} alt="Cryptoverse icon" />
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
            <span>JavaScript</span>
            <span>Redux</span>
            <span>Rapid API integration</span>
            <span>Axios</span>
            <span>Sass</span>
            <span>Ant Design</span>
          </div>
        </div>
      </a>
    </div>
  );
}

export default ReactProjectsPage;
