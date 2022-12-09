import './App.css';
import React,{Component}  from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route , Routes} from "react-router-dom";
import SrcLearn from './components/srcContainer/srcContainer';
import Apprentices from './components/apprentices/apprentices';

	
function App() {
    return (
        <>
            {/*Navbar*/}
            {/*<Navbar />*/}
			<SrcLearn />
			<Apprentices />
            <Routes>
            </Routes>
            {/*Footer*/}
            {/*<Footer />*/}

        </>
    )
}

export default App;
