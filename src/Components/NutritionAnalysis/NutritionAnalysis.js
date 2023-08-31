import { useEffect, useState } from 'react';
import analysisIcon from '../../Assets/Images/analysisIcon.png';
import AnalysisInput from './AnalysisInput';
import FetchNutritionAnalysis from '../../FetchData/FetchNutritionAnalysis';
import Nutrition from './Nutrition';
import AnalysisLoader from './AnalysisLoader/AnalysisLoader';

const NutritionAnalysis = () => {

  const APP_ID = '1bad6450';
  const APP_KEY = '0bcacbd22b58a6c4f59e266f77d32487';
  const APP_URL = 'https://api.edamam.com/api/nutrition-details';

  const [mySearch, setMySearch] = useState('');
  const [wordSubmitted, setWordSubmitted] = useState('');
  const [myNutrition, setMyNutrition] = useState('');
  const [stateLoader, setStateLoader] = useState(false);
  const [isSearchInput, setIsSearchInput] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  
  const handleInputFocus = () => {
    setIsInputFocused(true);
    setIsSearchInput(true);
  };

  const myRecipeSearch = e => {
    setMySearch(e.target.value);
  }

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
  }

  useEffect(() => {
    if (wordSubmitted !== '') {
      let ingr = wordSubmitted.split(/[,,;,\n,\r]/);

      setStateLoader(true);

      FetchNutritionAnalysis(APP_URL, APP_ID, APP_KEY, ingr)
        .then(data => {
          setMyNutrition(data);
          setStateLoader(false);
        })
        .catch(error => {
          alert(error.message);
          setStateLoader(false);
        });
    }
  }, [wordSubmitted]);
  

  return (
    <div className="py-5 mt-5 text-center nutrition_analysis_page">
      {stateLoader && <AnalysisLoader />}
      <div className="wrap col-lg-4 mx-auto my-5">
        <div className="py-2 analysis_header">
          <h2 className="analysis_title px-2 py-5">
            Nutrition Analysis...
          </h2>
          <p className='py-2 fs-5 analysis_text'>
              Click on the magnifying glass, 
              and start typing your products like: 
              <b>1bananas</b> <b>2apples</b> <b>3eggs,</b> <b>1glass of milk</b> etc...
          </p>
          <img 
            className="d-block mx-auto mb-4" 
            src={ analysisIcon } 
            alt="analysisIcon" 
            width={ 150 } 
            onClick={handleInputFocus} 

          />
          <AnalysisInput 
            finalSearch = { finalSearch } 
            myRecipeSearch = { myRecipeSearch } 
            mySearch = { mySearch } 
            setMySearch = { setMySearch }
            handleInputFocus = { handleInputFocus }
            isSearchInput = { isSearchInput }
            setIsSearchInput = { setIsSearchInput }
            isInputFocused = { isInputFocused }
            setIsInputFocused = { setIsInputFocused } 

          />
        </div>
      </div>
      <div className="container mt-5">
        <div className="analysis_list col-lg-8 mx-auto">
          <ul className="menu text-start card">
            <li>How many elements and minerals in { mySearch }:</li>
            {
              myNutrition && <li className='border-bottom fs-3 fw-bold'><span>"Total calories:"</span><b>{myNutrition.calories} kcal</b></li>
            }
            {
              myNutrition && Object.values(myNutrition.totalNutrients)
                .map(({ label, quantity, unit }) =>
                  <Nutrition
                    label={label}
                    quantity={quantity}
                    unit={unit}
                    key={ label }
                  />
                )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NutritionAnalysis;