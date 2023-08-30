
import { useEffect } from 'react';
import './App.css';
import Main from './Main/Main';
import ScrollToTop from './ScrollToTop/ScrollToTop';

function App() {

  useEffect(() => {
    const progressBar = document.querySelector('.top_progress_bar');

    const updateProgressBar = () => {
      const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      progressBar.value = scrollPercentage;
    };

    window.addEventListener('scroll', updateProgressBar);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div className="App">
      <ScrollToTop />
      <Main />
    </div>
  );
}

export default App;
