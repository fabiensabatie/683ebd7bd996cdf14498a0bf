import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextBrick, HtmlBrick, EmptyBrick } from './bricks';
import { ImageBrick, AudioBrick, DocumentBrick, ModelBrick, VideoBrick } from './bricks';

function Slide2() {
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({
        type: 'slideNavigation',
        slideIndex: 2
      }, '*');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Fundamental Concepts of Music</h1>
            <p className="text-sm text-gray-600">Deliverable Content</p>
          </div>
          <div className="text-sm text-gray-500">
            Section 2 of 4
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <EmptyBrick id="slide-2-top" />
          <TextBrick variant="h2">Key Musical Concepts</TextBrick>
          <EmptyBrick id="slide-2-section-1" />
          <TextBrick variant="h3">Rhythm</TextBrick>
          <TextBrick variant="p">Rhythm is the pattern of sounds and silence in music. It can be taught using clapping and body percussion to make it engaging for kids.</TextBrick>
          <EmptyBrick id="slide-2-space-1" />
          <TextBrick variant="h3">Melody</TextBrick>
          <TextBrick variant="p">Melody refers to the tune of the music. Encourage children to sing simple melodies and create their own using instruments.</TextBrick>
          <EmptyBrick id="slide-2-space-2" />
          <TextBrick variant="h3">Harmony</TextBrick>
          <TextBrick variant="p">Harmony is the combination of different musical notes played or sung simultaneously. Use simple chords on a piano or guitar to demonstrate this concept.</TextBrick>
          <EmptyBrick id="slide-2-space-3" />
          <TextBrick variant="h3">Dynamics</TextBrick>
          <TextBrick variant="p">Dynamics refer to the volume of sound in music. Teach kids to play softly and loudly, using terms like 'piano' for soft and 'forte' for loud.</TextBrick>
          <EmptyBrick id="slide-2-bottom" />
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
          <Link 
            to="/slide/1" 
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
            to="/slide/3" 
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

export default Slide2;