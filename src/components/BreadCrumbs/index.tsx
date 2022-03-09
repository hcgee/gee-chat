/*
 * @Author: huhanchi 
 * @Date: 2022-03-09 22:52:23 
 * @Last Modified by:   huhanchi 
 * @Last Modified time: 2022-03-09 22:52:23 
 */
import React from "react";
import { BreadCrumbsProps } from "@/interface";
import styles from "./index.module.less";

const BreadCrumbs: React.FC<BreadCrumbsProps> = (props) => {
  return <div className={styles.breadcrumbs}>{props.title}</div>;
};

export default BreadCrumbs;
