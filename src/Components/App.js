
import './App.css';
// import Main from './Main/Main';
import ScrollToTop from './ScrollToTop/ScrollToTop';
import MyApp from './MyApp/MyApp';
import { useEffect, useState } from 'react';
import MosquitoLoader from './MosquitoLoader/MosquitoLoader';

function App() {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  

  return (
    <div className="App">
      {loading ? (<MosquitoLoader />) : (
        <>
          <ScrollToTop />
          <MyApp />
        </>
      )}
    </div>
  );
}

export default App;
