import { useRouter } from "next/router";
import React from "react";
import type { AppProps } from "next/app";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import "../styles/fonts.css";
import "../styles/globals.css";
import "../components/Navbar/navbar.scss";
import RootLayout from "@/layout";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
};

export default MyApp;
