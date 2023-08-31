import MainBannerContent from "./MainBannerContent/MainBannerContent";
import MainBodyContent from "./MainBodyContent/MainBodyContent";
import { useEffect, useState } from "react";
import { getRecipes } from "../../FetchData/FetchRecipes";
import { useDispatch, useSelector } from "react-redux";
import { getWordSubmitted, setWordSubmitted } from "../../Redux/RecipesSlice";


const Main = () => {

  const [myRecipes, setMyRecipes] = useState([]);
  const [mySearch, setMySearch] = useState('');
  const wordSubmitted = useSelector(getWordSubmitted);
  const dispatch = useDispatch();

  useEffect(() => {
    getRecipes(setMyRecipes, wordSubmitted);
  }, [wordSubmitted])

  console.log(myRecipes)

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value)
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
          mySearch = { mySearch }
          setMySearch = { setMySearch } 
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