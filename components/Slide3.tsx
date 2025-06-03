import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextBrick, HtmlBrick, EmptyBrick } from './bricks';
import { ImageBrick, AudioBrick, DocumentBrick, ModelBrick, VideoBrick } from './bricks';

function Slide3() {
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({
        type: 'slideNavigation',
        slideIndex: 3
      }, '*');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Fun Activities for Teaching Music</h1>
            <p className="text-sm text-gray-600">Deliverable Content</p>
          </div>
          <div className="text-sm text-gray-500">
            Section 3 of 4
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <EmptyBrick id="slide-3-top" />
          <TextBrick variant="h2">Interactive Games and Activities</TextBrick>
          <EmptyBrick id="slide-3-section-1" />
          <TextBrick variant="p">Discover engaging methods to make learning music enjoyable for children through interactive games.</TextBrick>
          <EmptyBrick id="slide-3-section-2" />
          <HtmlBrick>
            <ul className="list-disc pl-5">
              <li><TextBrick variant="span">Singing games that promote vocal skills.</TextBrick></li>
              <li><TextBrick variant="span">Instrumental play to develop rhythm and coordination.</TextBrick></li>
              <li><TextBrick variant="span">Movement exercises to enhance musical understanding.</TextBrick></li>
            </ul>
          </HtmlBrick>
          <EmptyBrick id="slide-3-space-1" />
          <TextBrick variant="p">These activities not only support learning but also foster a love for music in children.</TextBrick>
          <EmptyBrick id="slide-3-bottom" />
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
          <Link 
            to="/slide/2" 
            className="flex items-center space-x-2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span>Previous</span>
          </Link>
          <Link 
            to="/" 
            className="text-gray-600 hover:text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Overview
          </Link>
          <Link 
            to="/slide/4" 
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

export default Slide3;