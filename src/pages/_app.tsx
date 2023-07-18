import { useRouter } from "next/router";
import React from "react";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../components/Navbar/navbar.scss";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const isServerPage = router.pathname.startsWith("/admin");

  const clientLinks = [
    { id: 1, label: "Accueil", url: "/", icon: <HomeOutlinedIcon /> },
    { id: 2, label: "Galerie", url: "/Galerie", icon: <BrushOutlinedIcon /> },
    {
      id: 3,
      label: "Administation",
      url: "/admin/main",
      icon: <AdminPanelSettingsOutlinedIcon />,
    },

    // Ajoutez d'autres liens spécifiques pour le côté client
  ];

  const serverLinks = [
    {
      id: 1,
      label: "Oeuvres",
      url: "/admin/oeuvres",
      icon: <BrushOutlinedIcon />,
    },
    {
      id: 2,
      label: "Themes",
      url: "/admin/themes",
      icon: <BrushOutlinedIcon />,
    },
    // Ajoutez d'autres liens spécifiques pour le côté serveur
  ];

  return (
    <>
      {isServerPage && <Navbar links={serverLinks} />}
      {!isServerPage && <Navbar links={clientLinks} />}
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
