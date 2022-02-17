import React, { useEffect, useContext, useState } from "react";
import default_image from "@/assets/head.jpg";
import styles from "./index.module.less";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <img src={default_image} alt="" />
      <div className={styles['contact-name']}>欧文</div>
    </div>
  );
};

export default Contact;
