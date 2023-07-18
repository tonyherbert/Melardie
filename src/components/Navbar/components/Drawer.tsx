// Drawer.tsx
import React from "react";

interface DrawerProps {
  isOpen: boolean;
  onClickOutside: () => void;
  children: React.ReactNode;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClickOutside,
  children,
}) => {
  const drawerRef = React.useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      drawerRef.current &&
      !drawerRef.current.contains(event.target as Node)
    ) {
      onClickOutside();
    }
  };

  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClickOutside]);

  return (
    <div ref={drawerRef} className={`navbar__items ${isOpen ? "open" : ""}`}>
      {children}
    </div>
  );
};

export default Drawer;
