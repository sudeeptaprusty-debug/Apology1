import React, { useState } from 'react';
import BackgroundAmbient from './components/BackgroundAmbient';
import AudioPlayer from './components/AudioPlayer';
import LoadingScreen from './components/LoadingScreen';
import Section1Opening from './components/Section1Opening';
import Section2Timeline from './components/Section2Timeline';
import Section3ImSorry from './components/Section3ImSorry';
import Section4NoExcuses from './components/Section4NoExcuses';
import Section5Cards from './components/Section5Cards';
import Section6Letter from './components/Section6Letter';
import Section7InteractiveApology from './components/Section7InteractiveApology';
import Section8Promises from './components/Section8Promises';
import Section9Final from './components/Section9Final';

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const scrollToTimeline = () => {
    const el = document.getElementById('timeline');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0c0508] text-[#f7eef2] selection:bg-[#9e2a4b] selection:text-white antialiased">
      {/* Subtle Initial Loading Screen */}
      <LoadingScreen onFinish={() => setLoaded(true)} />

      {/* Atmospheric Background with Floating Ambient Hearts & Orbs */}
      <BackgroundAmbient />

      {/* Floating Audio Controller */}
      <AudioPlayer />

      {/* Main Content Area */}
      <main className="relative z-10 flex flex-col">
        {/* Section 1: The Opening */}
        <Section1Opening onNextClick={scrollToTimeline} />

        {/* Section 2: "I Know What Happened" Timeline */}
        <Section2Timeline />

        {/* Section 3: "I'm Sorry" Sentences */}
        <Section3ImSorry />

        {/* Section 4: "No Excuses. Just Honesty." */}
        <Section4NoExcuses />

        {/* Section 5: "What I Want You To Know" Cards */}
        <Section5Cards />

        {/* Section 6: Personal Handwritten Letter */}
        <Section6Letter />

        {/* Section 7: Interactive Apology */}
        <Section7InteractiveApology />

        {/* Section 8: Our Little Promise Checklist */}
        <Section8Promises />

        {/* Final Section: Cinematic Ending */}
        <Section9Final />
      </main>
    </div>
  );
}
