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
            <h1 className="text-2xl font-bold text-gray-900">Introduction to the Study</h1>
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
          <TextBrick variant="h2">Understanding AI-Driven Monitoring of Ground-Nesting Birds</TextBrick>
          <EmptyBrick id="slide-1-section-1" />
          <TextBrick variant="p">This research paper explores the significance of monitoring ground-nesting birds and the role of artificial intelligence in wildlife conservation.</TextBrick>
          <EmptyBrick id="slide-1-section-2" />
          <TextBrick variant="p">The case study focuses on curlew detection, utilizing YOLOv10 for real-time monitoring of these vital species.</TextBrick>
          <EmptyBrick id="slide-1-section-3" />
          <HtmlBrick>
            <p>By integrating AI technology, researchers can enhance the accuracy and efficiency of monitoring efforts, ultimately contributing to the preservation of ground-nesting bird populations.</p>
          </HtmlBrick>
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