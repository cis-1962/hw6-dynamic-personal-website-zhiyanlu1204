import React from 'react';
import Introduction from './components/introduction';
import BlogPost from './components/blog';
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <main>
      <div className="h-screen">
        <div className="h-auto bg-yellow-100">
          <Introduction />
        </div>
        <div className="h-auto bg-pink-100 flex-1">
          <BlogPost />
        </div>
      </div>
    </main>
  );
}
