import { useState } from 'react';
import Navbar from './components/Navbar';
import PujaSection from './components/PujaSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <PujaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;