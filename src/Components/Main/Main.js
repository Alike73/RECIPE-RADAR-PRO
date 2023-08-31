import MainBannerContent from "./MainBannerContent/MainBannerContent";
import MainBodyContent from "./MainBodyContent/MainBodyContent";
import { useEffect, useState } from "react";
import { getRecipes } from "../../FetchData/FetchRecipes";
import { useDispatch, useSelector } from "react-redux";
import { getMySearch, getWordSubmitted, setMySearch, setWordSubmitted } from "../../Redux/RecipesSlice";


const Main = () => {

  const [myRecipes, setMyRecipes] = useState([]);
  
  const mySearch = useSelector(getMySearch);
  const wordSubmitted = useSelector(getWordSubmitted);
  const dispatch = useDispatch();

  useEffect(() => {
    getRecipes(setMyRecipes, wordSubmitted);
  }, [wordSubmitted])

  console.log(myRecipes)

  const myRecipeSearch = (e) => {
    dispatch(setMySearch(e.target.value))
  }

  const finalSearch = (e) => {
    e.preventDefault();
    dispatch(setWordSubmitted(mySearch))
  }

  return (
    <div className="main">
      <div className="main_banner">
        <MainBannerContent 
          myRecipeSearch = { myRecipeSearch } 
          finalSearch = { finalSearch }
        />
      </div>
      <div className="main_body">
        <MainBodyContent myRecipes = { myRecipes } />
      </div>
    </div>
  )
}

export default Main;