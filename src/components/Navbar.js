import React from 'react';
import styles from "./Navbar.module.scss";
import logo from "../assets/images/logo.png";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <header className={styles.header}>
          <div className={styles.logo}>
            <img className={styles.logo}  src= {logo} alt="logo"/>
          </div>
          <div className={styles.listContainer}>
               <ul className={styles.list}>
                   <li><Link to="">Data</Link> </li>
                   <li><Link to="">Back</Link> </li>
                   <li><Link to="">Front</Link> </li>
                    <li><Link to="">Ux</Link></li>
               </ul>
            </div>
        </header>
    );
};

export default Navbar;