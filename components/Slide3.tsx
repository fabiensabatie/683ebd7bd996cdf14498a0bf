import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextBrick, HtmlBrick, EmptyBrick } from './bricks';
import { ImageBrick, AudioBrick, DocumentBrick, ModelBrick, VideoBrick } from './bricks'; // DO NOT use the other brick components for content but KEEP their imports.

function Slide3() {
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({
        type: 'slideNavigation',
        slideIndex: 3 // Use 1-based index for navigation
      }, '*');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Results and Findings</h1>
            <p className="text-sm text-gray-600">Interactive Course - Understanding AI-Driven Monitoring of Ground-Nesting Birds</p>
          </div>
          <div className="text-sm text-gray-500">
            Slide 3 of 4
          </div>
        </div>
      </header>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          
      <EmptyBrick id="slide-3-top" />
      <div className="text-center py-12">
        <TextBrick variant="h1" className="mb-6">Results and Findings</TextBrick>
        <EmptyBrick id="slide-3-title-below" />
        <TextBrick className="text-lg mb-8">
          Welcome to Understanding AI-Driven Monitoring of Ground-Nesting Birds! This slide is part of your interactive course.
        </TextBrick>
        <EmptyBrick id="slide-3-content-1" />
        <div className="space-y-4">
          <div className="bg-gray-50 p-6 rounded-lg">
            <TextBrick variant="h3" className="text-lg font-medium text-gray-800 mb-2">Add your content here</TextBrick>
            <EmptyBrick id="slide-3-content-2" />
            <TextBrick className="text-gray-600">You can edit this slide content in the editor or ask the AI assistant to help you create engaging educational content.</TextBrick>
          </div>
          <EmptyBrick id="slide-3-content-3" />
        </div>
      </div>
      <EmptyBrick id="slide-3-bottom" />
    
        </div>
      </div>

      {/* Navigation */}
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
