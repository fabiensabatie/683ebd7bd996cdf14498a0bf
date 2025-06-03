import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextBrick, HtmlBrick, EmptyBrick } from './bricks';
import { ImageBrick, AudioBrick, DocumentBrick, ModelBrick, VideoBrick } from './bricks';

function Slide4() {
  useEffect(() => {
    if (window.parent) {
      window.parent.postMessage({
        type: 'slideNavigation',
        slideIndex: 4
      }, '*');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Implications and Future Research</h1>
            <p className="text-sm text-gray-600">Deliverable Content</p>
          </div>
          <div className="text-sm text-gray-500">
            Section 4 of 4
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <EmptyBrick id="slide-4-top" />
          <TextBrick variant="h2">Discussion on Implications</TextBrick>
          <TextBrick variant="p">
            This study highlights the significant role of AI in enhancing conservation practices,
            particularly in the monitoring of ground-nesting birds. By employing advanced algorithms
            such as YOLOv10, we can achieve real-time detection and analysis, leading to more informed
            conservation strategies.
          </TextBrick>
          <EmptyBrick id="slide-4-space-1" />
          <TextBrick variant="h3">Future Research Directions</TextBrick>
          <TextBrick variant="p">
            Future research should focus on expanding AI applications in diverse ecosystems,
            examining how these technologies can influence policy decisions, and ensuring that
            the insights gained are integrated into effective conservation frameworks.
          </TextBrick>
          <EmptyBrick id="slide-4-space-2" />
          <HtmlBrick>
            <ul>
              <li>Integration of AI in policy-making processes</li>
              <li>Long-term monitoring of bird populations</li>
              <li>Collaboration between technologists and conservationists</li>
            </ul>
          </HtmlBrick>
          <EmptyBrick id="slide-4-bottom" />
        </div>
      </div>

      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="bg-white rounded-full shadow-lg px-6 py-3 flex items-center space-x-4">
          <Link 
            to="/slide/3" 
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
          
        </div>
      </div>
    </div>
  );
}

export default Slide4;