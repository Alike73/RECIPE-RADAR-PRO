import LearnMoreBtn from "./LearnMoreBtn";
import RecipeImage from "./RecipeImage";
import Ingredients from "./RecipeList/Ingredients";
import Minerals from "./RecipeList/Minerals";
import Nutrition from "./RecipeList/Nutrition";
import Scoreboard from "./Scoreboard";
import gsap from '../../../gsapSetup';
import { useEffect } from 'react';



const RecipeCard = ({
  label, image, calories, ingredients, 
  cuisineType, cholesterolLabel, cholesterolQuantity, 
  cholesterolUnit, carbsLabel, carbsQuantity, carbsUnit,
  proteinLabel, proteinQuantity, proteinUnit, fatLabel, 
  fatQuantity, fatUnit, recipeTotalWeight, learnMoreLink,
  fiberLabel, fiberQuantity, fiberUnit,
  ironLabel, ironQuantity, ironUnit,
  magnesiumLabel, magnesiumQuantity, magnesiumUnit,
  potassiumLabel, potassiumQuantity, potassiumUnit,
  sodiumLabel, sodiumQuantity, sodiumUnit, firstRecipeRef, indexFirstRecipe
}) => {

  useEffect(() => {
    gsap.utils.toArray(".my_recipe_img").forEach((image) => {
      gsap.fromTo(
        image,
        {
          opacity: .2,
          scale: .9,
          y: '50%',
        },
        {
          opacity: 1,
          scale: 1,
          y: '0%',
          duration: 1.5,          // Set the duration of the animation in seconds
          ease: 'power1.out',
          scrollTrigger: {
            trigger: image.parentElement,
            start: "top center", // Change this to adjust when the animation starts
            end: "center center", // Change this to adjust when the animation ends
            toggleActions: 'play none reverse none',
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="wrap my-5" ref={indexFirstRecipe === 0 ? firstRecipeRef : null}>
      <div className="row featurette recipe_card">
      <h3 className="recipe_title">{ label }</h3>
        <div className="col-md-5 order-md-1">
          <RecipeImage image = { image } label = { label } cuisineType = { cuisineType } />
          <Scoreboard calories = { calories } recipeTotalWeight = { recipeTotalWeight } />
        </div>
        <div className="col-md-7 order-md-2">
          <Ingredients ingredients = { ingredients } />
          <Nutrition 
            cholesterolLabel = { cholesterolLabel }
            cholesterolQuantity= { cholesterolQuantity}
            cholesterolUnit = { cholesterolUnit }
            carbsLabel ={ carbsLabel }
            carbsQuantity = { carbsQuantity }
            carbsUnit = { carbsUnit }
            proteinLabel = { proteinLabel }
            proteinQuantity = { proteinQuantity }
            proteinUnit = { proteinUnit }
            fatLabel = { fatLabel }
            fatQuantity = { fatQuantity }
            fatUnit = { fatUnit }
            fiberLabel = { fiberLabel }
            fiberQuantity = { fiberQuantity}
            fiberUnit = { fiberUnit }
          />
          <Minerals
            ironLabel = { ironLabel }
            ironQuantity = { ironQuantity }
            ironUnit = { ironUnit } 
            magnesiumLabel = { magnesiumLabel } 
            magnesiumQuantity = { magnesiumQuantity } 
            magnesiumUnit = { magnesiumUnit } 
            potassiumLabel = { potassiumLabel }
            potassiumQuantity = { potassiumQuantity }
            potassiumUnit = { potassiumUnit }
            sodiumLabel = { sodiumLabel }
            sodiumQuantity = { sodiumQuantity }
            sodiumUnit = { sodiumUnit }
          />
          <div className="d-flex justify-content-end">
            <LearnMoreBtn learnMoreLink = {learnMoreLink } />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeCard;