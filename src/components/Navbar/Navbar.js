import React ,{useState,useEffect} from 'react';
import styles from "./Navbar.module.scss";
import logo from "../../assets/images/logo.png";
import { Link } from 'react-router-dom';
import loader from "../../assets/images/Spinner-2.gif";

// import {useEffect, useState} from "@types/react";
const Navbar = () => {

    return (
        <>

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
            </>
    );
};

export default Navbar;