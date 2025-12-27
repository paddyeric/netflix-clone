import { AiOutlineLogout } from "react-icons/ai";
import logoImage from "../assets/netflixLargeLogo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { firebaseAuth } from "../utils/firebase-config";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const TopNav = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navigate = useNavigate();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (!currentUser) navigate("/login");
  });

  const navLinks = [
    { name: "Home", link: "/" },
    { name: "Tv Show", link: "/tv" },
    { name: "My List", link: "/myList" },
    { name: "Movies", link: "/movies" },
  ];

  return (
    <NavContainer
      className={`flex fixed w-full justify-between bg-transparent text-white p-2 z-50 transition-transform duration-300 
        ${visible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="leftSide flex mr-[2rem]">
        <img src={logoImage} alt="logo" />

        <ul className="links flex gap-x-5 pt-5 ml-6">
          {navLinks.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link}>{name}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="rightSide pt-5 mr-[2rem]">
        <button
          onClick={() => signOut(firebaseAuth)}
          className="border bg-red-700 rounded-full cursor-pointer "
        >
          <AiOutlineLogout size={20} />
        </button>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  img {
    height: 4rem;
    cursor: pointer;
  }
`;

export default TopNav;
