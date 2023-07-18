import React, { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import useNavbarStore from "@/zustand/navbar-store";
import Drawer from "./components/Drawer";
import Logo from "./components/Logo";
import { useRouter } from "next/router";
import NavItem from "./components/navItem";

interface NavbarProps {
  links: { id: number; label: string; url: string; icon?: any }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const {
    isToggle,
    actions: { toggle, closeIfScreenIsLarge },
  } = useNavbarStore();
  const router = useRouter();

  const isServerPage = router.pathname.startsWith("/admin");

  useEffect(() => {
    window.addEventListener("resize", closeIfScreenIsLarge);

    return () => {
      window.removeEventListener("resize", closeIfScreenIsLarge);
    };
  }, [closeIfScreenIsLarge]);

  const handleLinkClick = () => {
    isToggle && toggle();
  };

  return (
    <nav className="navbar">
      <Logo />
      <Drawer isOpen={isToggle} onClickOutside={toggle}>
        <ul className={`navbar__list ${isToggle ? "open" : ""}`}>
          {links.map((link) => (
            <NavItem
              key={link.id}
              url={link.url}
              icon={link.icon}
              onClick={handleLinkClick}
            >
              {link.label}
            </NavItem>
          ))}
        </ul>
      </Drawer>
      <div className="navbar__burger" onClick={toggle}>
        <MenuIcon />
      </div>
      {isToggle && <div className="navbar__overlay" onClick={toggle}></div>}
    </nav>
  );
};

export default Navbar;
