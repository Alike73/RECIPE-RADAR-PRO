import RecipeImage from "./RecipeImage";
import Ingredients from "./RecipeList/Ingredients";
import Nutrition from "./RecipeList/Nutrition";
import Scoreboard from "./Scoreboard";


const RecipeCard = () => {

  return (
    <div className="wrap">
      <div className="row featurette recipe_card">
        <div className="col-md-5 order-md-1">
          <RecipeImage />
          <Scoreboard />
        </div>
        <div className="col-md-7 order-md-2">
          <Ingredients />
          <Nutrition />
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;