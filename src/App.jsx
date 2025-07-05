import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Pages/Navbar';
import Search from './pages/Search';
import Premium from './pages/Premium';
import Support from './pages/Support';
import Download from './pages/Download';
import InstallApp from './pages/InstallApp';
import Sign_Up from './pages/Sign_Up';
import Loge_In from './pages/Loge_In';
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/premium" element={<Premium/>} />
          <Route path="/support" element={<Support/>} />
          <Route path="/download" element={<Download/>} />
          <Route path="/install" element={<InstallApp/>} />
          <Route path="/signup" element={<Sign_Up/>} />
          <Route path="/login" element={<Loge_In/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
