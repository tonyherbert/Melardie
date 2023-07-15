import { useRouter } from "next/router";
import React from "react";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar/Navbar";

import "../styles/globals.css";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  const isServerPage = router.pathname.startsWith("/admin");

  const clientLinks = [
    { id: 1, label: "Accueil", url: "/" },
    { id: 2, label: "Produits", url: "/products" },
    // Ajoutez d'autres liens spécifiques pour le côté client
  ];

  const serverLinks = [
    { id: 1, label: "Dashboard", url: "/admin/dashboard" },
    { id: 2, label: "Paramètres", url: "/admin/settings" },
    { id: 2, label: "Main", url: "/admin/main" },
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
