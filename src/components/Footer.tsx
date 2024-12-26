import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";

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
              src="/assets/images/ciredroid.com-logo.png"
            />
          </Link>
        </div>
        <div className="footer-body">
          <div className="footer-body-left">
            <strong>About us</strong>
            <p>
              Cinedroid.com is an entertainment platform offering a wide range
              of downloadable content, including movies, TV series, Natok, and
              other video content. Users can explore a diverse collection of
              films across different genres
            </p>
          </div>
          <div className="footer-body-right">
            <strong>Site Links</strong>
            <ul className="footer-menu">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
              <li>
                <Link href="/">Privacy & Policy</Link>
              </li>
            </ul>
          </div>{" "}
          <div className="footer-body-right">
            <strong>usefull Links</strong>
            <ul className="footer-menu">
              <li>
                <Link href="/">Movie</Link>
              </li>
              <li>
                <Link href="/">TV Shows</Link>
              </li>
              <li>
                <Link href="/">Request</Link>
              </li>
            </ul>
          </div>{" "}
          <div className="footer-body-right">
            <strong>Contacts</strong>
            <ul className="footer-menu">
              <li>
                <Link href="mailto:admin@cinedroid.com">
                  admin@cinedroid.com
                </Link>
              </li>
            </ul>
            <ul className="social">
              <li>
                <a
                  target="_blank"
                  href="https://www.facebook.com/cinedroidofficial"
                >
                  <FaFacebookF />
                </a>
              </li>{" "}
              <li>
                <a target="_blank" href="https://www.instagram.com/cinedroid/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://www.tiktok.com/@cinedroid.com">
                  <FaTiktok />
                </a>
              </li>
              <li>
                <a target="_blank" href="https://t.me/cinedroidofficial">
                  <FaTelegramPlane />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()}. All Rights Reserved by{" "}
            <span>CineDroid</span> | Design and develop by{" "}
            <a href="http://devsroom.com" target="_blank" rel="creator">
              DevsRoom
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
