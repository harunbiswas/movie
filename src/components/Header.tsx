import Image from "next/image";
import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

export default function Header() {
  const menus = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "movie",
      url: "/",
    },
    {
      name: "tv shows",
      url: "/",
    },
    {
      name: "request",
      url: "/",
    },
    {
      name: "Contact",
      url: "/",
    },
  ];
  return (
    <header className="header">
      <div className="container">
        <Link href="/" className="brand">
          <Image
            height={100}
            width={400}
            alt="Free movie download"
            src="https://script.viserlab.com/playlab/demo/assets/images/logo_icon/logo.png"
          />
        </Link>
        <nav className="header-nav">
          <ul className="header-nav-menu">
            {menus.map((item, i) => (
              <li key={i}>
                <Link href={item?.url}>{item?.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="extra">
          <button className="search-btn">
            <IoSearch />
          </button>
          <Link className="btn" href="/login">
            <FaRegUserCircle />
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
