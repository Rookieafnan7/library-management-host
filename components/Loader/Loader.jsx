/* eslint-disable @next/next/no-img-element */
// import React from 'react';
import LoaderImg from "../../public/pics/loader.svg";
import styles from "../../src/styles/Loader.module.css"

const Loader = () => {
  return (
    <div className={`${styles['loader']} ${styles['flex']} ${styles['flex-c']}`}>
      <img src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader