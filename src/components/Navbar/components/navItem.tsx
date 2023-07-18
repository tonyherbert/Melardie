// NavItem.tsx
import React from "react";
import Link from "next/link";
import useNavbarStore from "@/zustand/navbar-store";

interface NavItemProps {
  url: string;
  onClick: () => void;
  children: React.ReactNode;
  icon?: any;
}

const NavItem: React.FC<NavItemProps> = ({ url, icon, onClick, children }) => {
  const { isToggle } = useNavbarStore();
  return (
    <li className="navbar__item">
      {(isToggle && icon) ?? <span>{icon}</span>}
      <Link className="navbar__link" onClick={onClick} href={url}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
