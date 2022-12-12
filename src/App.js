import React from "react";
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from './pages/introPage/introPage';
import FrontPage from './pages/frontPage/frontPage';
import UiPage from './pages/uiPage/uiPage';
import BackPage from './pages/backPage/backPage';
import DataPage from './pages/dataPage/dataPage';

	
function App() {
    return (
		<>
			<Routes>
				<Route exact path="/" element={<IntroPage />} />
				<Route path="/ui" element={<UiPage />} />
				<Route path="/front" element={<FrontPage />} />
				<Route path="/back" element={<BackPage />} />
				<Route path="/data" element={<DataPage />} />
			</Routes>
		</> 
    )
}

export default App;
