import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextBrick, HtmlBrick, EmptyBrick } from './bricks';
import { ImageBrick, AudioBrick, DocumentBrick, ModelBrick, VideoBrick } from './bricks';

function Slide1() {
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({
        type: 'slideNavigation',
        slideIndex: 1
      }, '*');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Introduction to Music Education</h1>
            <p className="text-sm text-gray-600">Deliverable Content</p>
          </div>
          <div className="text-sm text-gray-500">
            Section 1 of 4
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <EmptyBrick id="slide-1-top" />
          <TextBrick variant="h2">Overview of the Importance of Music Education</TextBrick>
          <EmptyBrick id="slide-1-section-1" />
          <TextBrick variant="p">Music education plays a crucial role in the cognitive and emotional development of children. It enhances their ability to learn and fosters creativity.</TextBrick>
          <EmptyBrick id="slide-1-section-2" />
          <TextBrick variant="p">Through engaging methods and strategies, teaching music can be a fun and rewarding experience for both educators and students.</TextBrick>
          <EmptyBrick id="slide-1-section-3" />
          <TextBrick variant="h3">Cognitive Benefits</TextBrick>
          <EmptyBrick id="slide-1-section-4" />
          <TextBrick variant="p">Research indicates that music education can improve memory, attention, and even mathematical skills.</TextBrick>
          <EmptyBrick id="slide-1-section-5" />
          <TextBrick variant="h3">Emotional Development</TextBrick>
          <EmptyBrick id="slide-1-section-6" />
          <TextBrick variant="p">Music helps children express their emotions and develop social skills through group activities and performances.</TextBrick>
          <EmptyBrick id="slide-1-bottom" />
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
          
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Overview
          </Link>
          <Link 
            to="/slide/2" 
            className="flex items-center space-x-2 bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <span>Next</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Slide1;