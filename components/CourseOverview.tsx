import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function CourseOverview() {
  // Notify parent window about overview (index 0)
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({
        type: 'slideNavigation',
        slideIndex: 0 // Overview is always index 0
      }, '*');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Course Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Teaching Kids Music
          </h1>
          <p className="text-xl text-gray-600 mb-2">Interactive Course</p>
          <div className="w-24 h-1 bg-black mx-auto"></div>
        </header>

        {/* Course Structure */}
        <div className="grid gap-6">
          
          <Link 
            to="/slide/1" 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block group relative "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
                  1
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-black transition-colors">Introduction to Music Education</h2>
                
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </Link>
          
          <Link 
            to="/slide/2" 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block group relative "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
                  2
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-black transition-colors">Fundamental Concepts of Music</h2>
                
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </Link>
          
          <Link 
            to="/slide/3" 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block group relative "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
                  3
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-black transition-colors">Fun Activities for Teaching Music</h2>
                
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </Link>
          
          <Link 
            to="/slide/4" 
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow block group relative "
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-bold mr-4">
                  4
                </div>
                <h2 className="text-xl font-semibold text-gray-800 group-hover:text-black transition-colors">Practical Tips for Parents and Educators</h2>
                
              </div>
              <svg class="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" /></svg>
            </div>
          </Link>
          
        </div>

        {/* Footer */}
        <footer className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600 mb-4">
            Ready to start learning? Click on any slide above to begin!
          </p>
          
          <Link 
            to="/slide/1" 
            className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors inline-block"
          >
            Start Course
          </Link>
          
        </footer>
      </div>
    </div>
  );
}

export default CourseOverview;
