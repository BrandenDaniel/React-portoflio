import { workObj } from "../project-data/data";

function KaderBootCo() {
  const list = [...workObj];
  const index = list[1];

  return (
    <div className="work-page">
      <div className="work-page__description">
        <h1>{index.title}</h1>
        <p>{index.longDesc}</p>
      </div>

      <div className="work-page__gallery">
        {index.snapshot.map(function (src) {
          return <img src={require(`../assets/images/${src}`)} alt="" />;
        })}
      </div>
    </div>
  );
}

export default KaderBootCo;
