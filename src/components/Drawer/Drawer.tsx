// MyComponent.tsx

import React from "react";
import styles from "./drawer.module.scss";

const Drawer: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.drawer}>Contenu du composant</div>
    </div>
  );
};

export default Drawer;
