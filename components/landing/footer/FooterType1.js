import dynamic from "next/dynamic";
import Link from "next/link";
const FacebookIcon = dynamic(() => import("public/svg/logos/FacebookIcon"));
const TwitterIcon = dynamic(() => import("public/svg/logos/TwitterIcon"));
const InstagramIcon = dynamic(() => import("public/svg/logos/InstagramIcon"));

export default function FooterLanding() {
  return (
    <footer className="background--Black text--White">
      <div className="row">
        <nav className="type--1">
          <div className="column">
            <span className="heading hero--lv8 font-family--base--bold text-transform--uppercase">Empresa</span>
            <Link href="/nosotros">
              <a className="item">Nosotros</a>
            </Link>
            <Link href="/contacto">
              <a className="item">Contacto</a>
            </Link>
          </div>
          <div className="column">
            <span className="heading hero--lv8 font-family--base--bold text-transform--uppercase">Soluciones</span>
            <Link href="/soluciones/baja-tension">
              <a className="item">Baja Tensión</a>
            </Link>
            <Link href="/soluciones/media-tension">
              <a className="item">Media Tensión</a>
            </Link>
            <Link href="/soluciones/energias-renovables">
              <a className="item">Energías Renovables</a>
            </Link>
            <Link href="/soluciones/iluminacion">
              <a className="item">Iluminación</a>
            </Link>
            <Link href="/soluciones/telecomunicaciones">
              <a className="item">Telecomunicaciones</a>
            </Link>
          </div>
        </nav>
      </div>
      <div className="row">
        <nav className="type--2">
          <div className="row">
            <Link href="//instagram.com/neudify/">
              <a className="item icon type--medium">
                <InstagramIcon />
              </a>
            </Link>
          </div>
        </nav>
      </div>
      <div className="row">
        <nav className="type--3">
          <div className="row">
            <span className="heading hero--lv8 font-family--base--regular">
              © 2020 Badloz, S.A.P.I. de C.V.
            </span>
          </div>
          <div className="row">
            <Link href="/privacidad">
              <a className="item">Privacidad</a>
            </Link>
            <Link href="/terminos-condiciones">
              <a className="item">Terminos y condiciones</a>
            </Link>
          </div>
        </nav>
      </div>
    </footer>
  );
}
