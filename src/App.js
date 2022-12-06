
import './App.css';
import React,{Component}  from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {Route , Routes} from "react-router-dom";
function App() {
    return (
        <>

            <Navbar />
            <Routes>
            </Routes>
            <Footer />

        </>
    )
}

export default App;
