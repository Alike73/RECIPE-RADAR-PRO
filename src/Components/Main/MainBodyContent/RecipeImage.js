import RecipeRibbon from "./RecipeRibbon";
import testImg from '../../../Assets/Images/recipeBg.webp';

const RecipeImage = () => {

  return (
    <figure className="media_frame">
      <RecipeRibbon />
      <div className="outerBevel">
        <div className="flatSurface">
          <div className="innerBevel">
            <div className="gradient-border">
              <img src={ testImg } alt="abc" width="500" />
            </div>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default RecipeImage;