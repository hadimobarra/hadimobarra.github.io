import {createRoot} from 'react-dom/client';
import App from './App';
import React from 'react';
import FrontPage from './pages/frontPage/frontPage';
import BackPage from './pages/backPage/backPage';
import UiPage from './pages/uiPage/uiPage';
import DataPage from './pages/dataPage/dataPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);


// 👇️ wrap App in Router

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App /> }>
			<Route path="/ui" element={<UiPage />} />
			<Route path="/front" element={<FrontPage />} />
			<Route path="/back" element={<BackPage />} />
			<Route path="/data" element={<DataPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);



