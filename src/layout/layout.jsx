import React ,{useState,useEffect} from 'react';
import Header from '../components/Navbar/Navbar.js';
import Footer from '../components/Footer/Footer.js';
// import {useEffect, useState} from "@types/react";
import loader from "../assets/images/Spinner-2.gif";

const Layout = ({children}) => {

	return (
		<>

			<Header />
				{children}
			<Footer /> 
		</>
	)
}

export default Layout;
