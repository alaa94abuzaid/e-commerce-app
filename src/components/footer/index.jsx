import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

import styles from "./footer.module.scss";

export const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footerWrapper}>
      <Button onClick={() => navigate("/")}>Home Page</Button>
    </div>
  );
};
