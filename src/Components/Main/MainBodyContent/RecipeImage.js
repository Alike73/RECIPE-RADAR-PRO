import RecipeRibbon from "./RecipeRibbon";

const RecipeImage = ({ image, label, cuisineType }) => {

  return (
    <figure className="media_frame my_recipe_img">
      <RecipeRibbon cuisineType = { cuisineType } />
      <div className="outerBevel">
        <div className="flatSurface">
          <div className="innerBevel">
            <div className="gradient-border">
              <img src={ image } alt={ label } title={ label } width="500" />
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default RecipeImage;