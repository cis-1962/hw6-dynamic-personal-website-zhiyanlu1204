import React from 'react';
import Introduction from './components/introduction';
import BlogPost from './components/blog';
import 'tailwindcss/tailwind.css';

export default function App() {
  return (
    <main>
      <Introduction />
      <BlogPost />
    </main>
  );
}
