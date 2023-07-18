// Logo.tsx
import React from "react";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link className="navbar__logo" href="/" passHref>
      Melardie
    </Link>
  );
};

export default Logo;
