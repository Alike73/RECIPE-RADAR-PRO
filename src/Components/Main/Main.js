import MainBannerContent from "./MainBannerContent/MainBannerContent";
import MainBodyContent from "./MainBodyContent/MainBodyContent";
import { useEffect, useRef, useState } from "react";
import { getRecipes } from "../../FetchData/FetchRecipes";
import { useDispatch, useSelector } from "react-redux";
import { getMySearch, getWordSubmitted, setMySearch, setWordSubmitted } from "../../Redux/RecipesSlice";


const Main = () => {

  const [myRecipes, setMyRecipes] = useState([]);
  const mySearch = useSelector(getMySearch);
  const wordSubmitted = useSelector(getWordSubmitted);

  const firstRecipeRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    getRecipes(setMyRecipes, wordSubmitted);
  }, [wordSubmitted]);

  const myRecipeSearch = (e) => {
    dispatch(setMySearch(e.target.value));
  };

  const scrollToFirstRecipe = () => {
    if (firstRecipeRef.current) {
      firstRecipeRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const finalSearch = (e) => {
    scrollToFirstRecipe();
    e.preventDefault();
    dispatch(setWordSubmitted(mySearch));
  };

  return (
    <div className="main">
      <div className="main_banner">
        <MainBannerContent 
          myRecipeSearch = { myRecipeSearch } 
          finalSearch = { finalSearch }
        />
      </div>
      <div className="main_body">
        <MainBodyContent 
        myRecipes = { myRecipes } 
        firstRecipeRef = { firstRecipeRef } 

        />
      </div>
    </div>
  )
}

export default Main;