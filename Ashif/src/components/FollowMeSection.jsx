import React, { useRef, useState } from 'react';
import Crosshair from './Crosshair';

export default function FollowMeSection() {
  const containerRef = useRef(null);
  const [showCrosshair, setShowCrosshair] = useState(false);

  // Replace with your actual Instagram URL
  const instagramUrl = "https://www.instagram.com/ashif.zip/";

  const handleShootClick = () => {
    window.open(instagramUrl, "_blank");
  };

  return (
    <section
      ref={containerRef}
      className="min-h-screen w-full flex flex-col items-center justify-center relative"
      style={{
        backgroundImage:
          'repeating-radial-gradient(#0c0a0a 80%, #2f312f 90%, #3f4549 90%)',
        backgroundSize: '65px 65px',
        outline: 'none',
      }}
      onMouseEnter={() => setShowCrosshair(true)}
      onMouseLeave={() => setShowCrosshair(false)}
      onFocus={() => setShowCrosshair(true)}
      onBlur={() => setShowCrosshair(false)}
      tabIndex={0}
    >
      <div className="w-full text-center pt-12 pb-8">
        <span className="text-3xl font-bold text-white">Dare to Shoot It</span>
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center flex-1">
        <button
          className="btn-round"
          aria-label="Shoot"
          onClick={handleShootClick}
        ></button>
      </div>
      {showCrosshair && (
        <Crosshair containerRef={containerRef} color="#ffffff" />
      )}
    </section>
  );
}