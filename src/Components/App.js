
import './App.css';
import CubicLoader from './CubicLoader/CubicLoader';
import MyApp from './MyApp/MyApp';
import { useEffect, useState } from 'react';


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
      { loading 
        ? (<CubicLoader />) 
        : (<MyApp />)
      }
    </div>
  );
}

export default App;
