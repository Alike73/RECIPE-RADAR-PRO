
import './CircularProgressBar.css';
import React, { useEffect, useRef, useState } from 'react';

const CircularProgressBar = ({ sqSize = 40, strokeWidth = 4, goToTop }) => {
  const radius = (sqSize - strokeWidth) / 2;
  const viewBox = `0 0 ${sqSize} ${sqSize}`;
  const dashArray = radius * Math.PI * 2;

  // Use useRef to get a reference to the circle-progress element
  const circleProgressRef = useRef(null);

  // State to store the scroll progress percentage
  const [scrollProgress, setScrollProgress] = useState(0);
  // Update the scroll progress on user scroll
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = documentHeight - windowHeight;
    const progress = Math.min(scrollY / scrollTop, 1);
    setScrollProgress(progress);
  };

  useEffect(() => {
    let requestId;

    const updateScrollProgress = () => {
      handleScroll();
      requestId = requestAnimationFrame(updateScrollProgress);
    };

    updateScrollProgress();

    // Cancel the animation frame on component unmount
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, []);

  // Calculate the new strokeDashoffset based on the scroll progress
  const dashOffset = dashArray - (dashArray * scrollProgress) / 1;

  return (
    <div className="progressBox" onClick={goToTop}>
      <div className='circleOuter'>
        <svg width={sqSize} height={sqSize} viewBox={viewBox}>
          <circle
            className="circle-background"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            ref={circleProgressRef}
            className="circle-progress"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
        </svg>
        <i className="bi bi-arrow-up-circle fs-5" />
      </div>
    </div>
  );
};

export default CircularProgressBar;
