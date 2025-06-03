import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CourseOverview from './components/CourseOverview';
import EditableOverlay from './components/EditableOverlay';
import Slide1 from './components/Slide1';
import Slide2 from './components/Slide2';
import Slide3 from './components/Slide3';
import Slide4 from './components/Slide4';

function App() {
  return (
    <Router>
      <EditableOverlay />
      <Routes>
        <Route path="/" element={<CourseOverview />} />
        <Route path="/slide/1" element={<Slide1 />} />
        <Route path="/slide/2" element={<Slide2 />} />
        <Route path="/slide/3" element={<Slide3 />} />
        <Route path="/slide/4" element={<Slide4 />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
