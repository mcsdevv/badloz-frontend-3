import dynamic from "next/dynamic";
import Link from "next/link";
const Background = dynamic(() =>
  import("components/landing/background/Clouds")
);

export default function Landing() {
  return (
    <div className="container height--full-plus">
      <div className="spacer height--lv11" />
      <div className="row">
        <div className="col size2of3 justify-content--center">
          <div className="text text-align--center--mobile">
            <h1 className="heading hero--lv2">
              Soluciones para todas las industrias
            </h1>
            <p className="hero--lv2">
              Expertos en baja y media tensión, iluminación, energías renovables
              y telecomunicaciones.
            </p>
          </div>
        </div>
      </div>
      <div className="spacer height--lv11" />
    </div>
  );
}
