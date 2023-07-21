import React, { useState } from "react";
import styles from "../styles/galery.module.scss"; // Import the SCSS file
import { useArts } from "@/services/art_services";
import Drawer from "@/components/Drawer/Drawer";

const Galerie = () => {
  return (
    <div className={styles.container}>
      <Drawer />
    </div>
  );
};

export default Galerie;
