import dynamic from "next/dynamic";
import Link from "next/link";
const Logo = dynamic(() => import("public/svg/logos/BadlozText"));
const Account = dynamic(() =>
  import("public/svg/icons/material/AccountCircle")
);

export default function HeaderLanding() {
  return (
    <header>
      <Link href="/">
        <a className="logo">
          <Logo />
        </a>
      </Link>
      <div className="menu">
        <div className="spacer flex--1" />
        <nav>
          <Link href="/soluciones">
            <a className="item">
              Soluciones
            </a>
          </Link>
          <Link href="/contacto">
            <a className="item">
              Contacto
            </a>
          </Link>
          <Link href="/">
            <a className="item button medium rounded-corners background--brand-type1--lv0 text--White">
              Tienda en línea
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
