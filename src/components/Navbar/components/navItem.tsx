// NavItem.tsx
import React from "react";
import Link from "next/link";

interface NavItemProps {
  url: string;
  onClick: () => void;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ url, onClick, children }) => {
  return (
    <li className="navbar__item">
      <Link className="navbar__link" onClick={onClick} href={url}>
        {children}
      </Link>
    </li>
  );
};

export default NavItem;
