"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaRegUserCircle } from "react-icons/fa";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Search from "./Search";

export default function Header() {
  const [isToggle, setIsToggle] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const menus = [
    {
      name: "home",
      url: "/",
    },
    {
      name: "movie",
      url: "/movie",
    },
    {
      name: "tv shows",
      url: "tv-shows",
    },
    {
      name: "request",
      url: "https://t.me/cinedroidofficial",
    },
    {
      name: "Contact",
      url: "https://www.facebook.com/cinedroidofficial",
    },
  ];

  const [isSearch, setIsSearch] = useState<boolean>(false);

  // Handles clicks outside the menu
  const handleOutsideClick = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsToggle(false); // Close the menu if clicked outside
    }
  };

  useEffect(() => {
    // Add event listener for clicks
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);
  return (
    <header className="header">
      {isSearch && <Search setIsSearch={setIsSearch} />}
      <div className="container">
        <Link href="/" className="brand">
          <Image
            height={100}
            width={400}
            alt="Free movie download"
            src="/assets/images/ciredroid.com-logo.png"
          />
        </Link>
        <nav ref={menuRef} className={`header-nav ${isToggle ? "show" : ""}`}>
          <button onClick={() => setIsToggle(false)} className="close-btn">
            <MdClose />
          </button>
          <ul className="header-nav-menu">
            {menus.map((item, i) => (
              <li key={i}>
                <Link
                  onClick={() => {
                    setIsToggle(false);
                  }}
                  href={item?.url}
                >
                  {item?.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link className="btn" href="/login">
            <FaRegUserCircle />
            Login
          </Link>
        </nav>
        <div className="extra">
          <button onClick={() => setIsSearch(true)} className="search-btn">
            <IoSearch />
          </button>
          <Link className="btn" href="/login">
            <FaRegUserCircle />
            Login
          </Link>
          <button
            onClick={() => {
              setIsToggle(!isToggle);
            }}
            className="toggle-btn"
          >
            <HiOutlineBars3BottomRight />
          </button>
        </div>
      </div>
    </header>
  );
}
