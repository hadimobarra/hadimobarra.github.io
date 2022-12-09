import React,{Component}  from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {Route , Routes} from "react-router-dom";
//import SrcLearn from './components/srcContainer/srcContainer';
import Apprentices from './components/apprentices/apprentices';
//import Fpage from './components/photoFirstPage/FirstPhotoSection';
//import Spage from './components/photoSecondPage/SecondPhotoSection';
import MyCards from './components/card/Card';

	
function App() {
    return (
        <>
            {/*Navbar*/}
            <Navbar />
			<MyCards />
			{/*<SrcLearn /> */}
			<Apprentices />
            <Routes>
            </Routes>
            {/*Footer*/}
            <Footer />

        </>
    )
}

export default App;
