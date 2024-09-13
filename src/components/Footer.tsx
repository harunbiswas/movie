import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <Link href="/" className="brand">
            <Image
              height={100}
              width={400}
              alt="Free movie download"
              src="https://script.viserlab.com/playlab/demo/assets/images/logo_icon/logo.png"
            />
          </Link>
        </div>
        <div className="footer-body">
          <div className="footer-body-left">
            <strong>About us</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
              totam maiores aliquid? Corporis culpa voluptas esse similique?
              Labore, quae voluptates quibusdam sit, facere dolores, quia totam
              reiciendis minus repudiandae dicta.
            </p>
          </div>
          <div className="footer-body-right">
            <strong>Sort Links</strong>
            <ul className="footer-menu">
              <li>
                <Link href="/">Our Vission</Link>
              </li>
              <li>
                <Link href="/">Our Mission</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()}. All Rights Reserved by{" "}
            <span>Chenema Para</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
