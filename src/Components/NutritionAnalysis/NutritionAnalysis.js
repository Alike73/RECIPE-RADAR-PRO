import { useEffect, useRef, useState } from 'react';
import analysisIcon from '../../Assets/Images/analysisIcon.png';
import AnalysisInput from './AnalysisInput';
import FetchNutritionAnalysis from '../../FetchData/FetchNutritionAnalysis';
import Nutrition from './Nutrition';
import AnalysisLoader from './AnalysisLoader/AnalysisLoader';
import Swal from "sweetalert2";
import chef from '../../Assets/Images/chef3.png';

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

  const recipeRef = useRef(null);
  
  const handleInputFocus = () => {
    setIsInputFocused(true);
    setIsSearchInput(true);
  };

  const myRecipeSearch = e => {
    setMySearch(e.target.value);
  };

  const scrollToFirstRecipe = () => {
    if (recipeRef.current) {

      recipeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const finalSearch = e => {
    e.preventDefault();
    setWordSubmitted(mySearch);
    setTimeout(() => {
      scrollToFirstRecipe();
    }, 1000);
  };

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
          // alert(error.message);
          Swal.fire({
            color: '#C70039',
            title: 'ERROR!',
            text: 'Ingredients entered incorrectly. Example: 1egg 2bananas 1apple, etc',
            imageUrl: chef,
            imageWidth: 150,
            imageAlt: 'Custom image',
          });
          setStateLoader(false);
        });
    }
  }, [wordSubmitted]);
  

  return (
    <div className="py-5 mt-5 text-center nutrition_analysis_page">
      {stateLoader && <AnalysisLoader />}
      <div className='col-lg-4 mx-auto'>

      <div className="wrap mx-1 my-5">
        <div className="py-2 analysis_header">
          <img 
            className="d-block mx-auto mb-4 analysis_img" 
            src={ analysisIcon } 
            alt="analysisIcon" 
            width={ 120 } 
            onClick={handleInputFocus} 
          />
          <h2 className="analysis_title px-2 py-2">
            Nutrition Analysis
          </h2>
          
          <div className='px-1'>
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
          <p className='p-2 mt-3 fs-5 analysis_text'>
              Click on the magnifying glass, 
              and start typing your products like: 
              <b>1bananas</b> <b>2apples</b> <b>3eggs,</b> <b>1glass of milk</b> etc...
          </p>
        </div>
      </div>
      </div>
      <div className="container mt-5">
        <div className="analysis_list col-lg-8 mx-auto" ref={ recipeRef }>
          <ul className="menu text-start card">
            <li>
            How many elements and minerals in 
            <span className='ms-1 text-center text-decoration-underline'>
              { mySearch }
            </span>
            </li>
            {
              myNutrition && <li className='border-bottom fs-3 fw-bold'><span>"Total calories:"</span><b>{myNutrition.calories} kcal</b></li>
            }
            {
              myNutrition && Object.values(myNutrition.totalNutrients)
                .map(({ label, quantity, unit }) =>
                  <Nutrition
                    label={label}
                    quantity={quantity.toFixed(1)}
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