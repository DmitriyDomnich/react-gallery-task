import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GalleryPage from './pages/GalleryPage';
import PicturePage from './pages/PicturePage';

function App() {
  return (
    <div className='h-full min-h-screen overflow-hidden bg-gray-200'>
      <Router>
        <Routes>
          <Route path='/' element={<GalleryPage />}></Route>
          <Route path='p/:id' element={<PicturePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
