import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import Slider from "./slider/BannerSlider";

export default function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner-wrp">
          <div className="banner-left">
            <p>
              <span></span> Worlds Best
            </p>
            <h2>MOVIES OF THIS SEASON</h2>
            <div className="btns">
              <Link href="login" className="btn">
                Sign in
              </Link>
              <Link href="login" className="btn btn-outline">
                <FiPlus /> Sign Up
              </Link>
            </div>
          </div>
          <Slider />
        </div>
      </div>
    </section>
  );
}
