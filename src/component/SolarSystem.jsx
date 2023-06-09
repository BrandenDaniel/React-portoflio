export default function SolarSystem() {
  return (
    <>
      <div className="solar-system-forefront"></div>
      <div className="solar-system">
        <div className="solar-system__sun"></div>
        <div className="solar-system__mercury"></div>
        <div className="solar-system__venus"></div>
        <div className="solar-system__earth">
          <div className="solar-system__earth__moon"></div>
        </div>
        <div className="solar-system__mars"></div>
        <div className="solar-system__jupiter"></div>
        <div className="solar-system__saturn">
          <div className="solar-system__saturn__plannet"></div>
        </div>
        <div className="solar-system__uranus"></div>
        <div className="solar-system__neptune"></div>
      </div>
    </>
  );
}
