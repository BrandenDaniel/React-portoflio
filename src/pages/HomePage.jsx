import "../assets/sass/pages/home.scss";
import WorkCard from "../component/WorkCard";
import workJson from "../work-data/data.json";
import Socials from "../component/Socials";
import CV from "../assets/docs/CV.pdf";

function Home() {
  const projectList = { ...workJson };

  const viewMoreWork = () => {
    document
      .querySelector(".home__selected-work")
      .classList.add("home__selected-work--show-all");

    document.querySelector(".home__view-more").style.display = "none";
  };

  const showMoreBio = () => {
    document
      .querySelector(".home__profile__bio > div")
      .classList.add("home__profile__bio--show-all");

    document.querySelector(".home__profile__read-more").style.display = "none";
  };

  return (
    <div className="home">
      <header className="home__header">
        <h1>
          A front-end developer with a profound <span></span> <span></span>{" "}
          transforming creativity into captivating <span></span> <span></span>
        </h1>

        <div className="home__external-links">
          <Socials />

          <a
            href={CV}
            target="_blank"
            rel="noreferrer"
            className="resume-download"
          >
            Download My CV.
          </a>
        </div>

        <div className="home__profile__bio">
          <h2>
            👋 Hey I'm Branden, a design-focused web developer based in
            Melbourne. I'm currently working at SafeCode, where I craft
            intuitive interfaces for a user base of over 100,000 individuals.
            <div
              className="home__profile__read-more"
              onClick={() => showMoreBio()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </h2>

          <div>
            <h2>
              I've been passionately immersed in the world of front-end
              development since early 2019, constantly striving to expand my
              skills and stay up to date with the latest industry trends.
              Throughout my journey, I've had the privilege to collaborate with
              a diverse range of clients, including both corporations and
              smaller creative digital agencies.
            </h2>

            <h2>
              CSS is my trusted companion in this realm. I thrive on the process
              of transforming intricate designs into clean and structured
              stylesheets. From tackling complex layouts to meticulously
              bringing a designer's vision to life, I find joy in the art of
              crafting visually appealing and user-friendly web experiences.
            </h2>

            <h2>
              After taking a transformative break to explore an alternative
              career path, I've been steered right back to where I belong -
              making fun, intuitive, and gorgeous websites.
            </h2>
          </div>
        </div>
      </header>

      <main>
        <h3>Work</h3>
        <div className="home__selected-work">
          {Object.keys(projectList).map(function (prop) {
            return (
              <WorkCard
                title={projectList[prop].title}
                thumbnail={projectList[prop].thumbnail}
                id={projectList[prop].id}
                description={projectList[prop].shortDesc}
                pathname={projectList[prop].id}
                key={projectList[prop].id}
              />
            );
          })}
          <span
            to="#"
            className="home__view-more"
            onClick={() => viewMoreWork()}
          >
            View more
          </span>
        </div>
      </main>
    </div>
  );
}

export default Home;
