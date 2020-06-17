import dynamic from "next/dynamic";
import Link from "next/link";
const Background = dynamic(() =>
  import("components/landing/background/Clouds")
);

export default function ShopNow() {
  return (
    <div className="container">
      <div className="row">
        <div className="spacer flex--1" />
        <div className="col size4of8 justify-content--center">
          <div className="text text-align--center--mobile">
            <h2 className="heading hero--lv3">A un click de tu proyecto</h2>
            <p className="hero--lv3">
              Servicio rápido, confiable y de alta calidad 24/7
            </p>
            <Link href="/">
              <a className="button medium rounded-corners background--brand-type1--lv0 text--White">
                Tienda en línea
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
