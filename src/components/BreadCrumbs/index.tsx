import React from "react";
import { BreadCrumbsProps } from "@/interface";
import styles from "./index.module.less";

const BreadCrumbs: React.FC<BreadCrumbsProps> = (props) => {
  return <div className={styles.breadcrumbs}>{props.title}</div>;
};

export default BreadCrumbs;
