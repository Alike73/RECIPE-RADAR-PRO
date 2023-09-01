import './TopProgressScroll.css';
import gsap from '../../gsapSetup';
import { useEffect } from 'react';

const TopProgressScroll = () => {

  useEffect(() => {
    gsap.to(".sidebarProgress", {
        value: 100,
        scrollTrigger: {
            scrub: 0.5,
        },
    });
  }, []);

  return (
    <>
      <progress 
        className='sidebarProgress' 
        max="100" 
        value="0" 
      />
    </>
  )
}

export default TopProgressScroll;