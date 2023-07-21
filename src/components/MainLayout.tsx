import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import { useRouter } from "next/router";
import Navbar from "./Navbar/Navbar";
import { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const router = useRouter();

  const isServerPage = router.pathname.startsWith("/admin");

  const clientLinks = [
    { id: 1, label: "Accueil", url: "/", icon: <HomeOutlinedIcon /> },
    { id: 2, label: "Galerie", url: "/Galery", icon: <BrushOutlinedIcon /> },
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
    <div
      style={{
        marginTop: 0,
        marginRight: "2rem",
        marginBottom: "2rem",
        marginLeft: "2rem",
      }}
    >
      <header>
        {isServerPage && <Navbar links={serverLinks} />}
        {!isServerPage && <Navbar links={clientLinks} />}
      </header>
      <main>
        {children}{" "}
        {/* C'est ici que le contenu des pages spécifiques sera inséré */}
      </main>
      <footer>{/* ... */}</footer>
    </div>
  );
};

export default MainLayout;
