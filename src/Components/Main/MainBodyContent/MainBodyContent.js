
import RecipeCard from "./RecipeCard";

const MainBodyContent = ({ myRecipes, firstRecipeRef }) => {

  return (
    <div className="container py-5 mt-5">
      { myRecipes.map((item, index) => <RecipeCard
          key={ index }
          firstRecipeRef = { firstRecipeRef }
          indexFirstRecipe = { index }
          label = { item.recipe.label }
          image = { item.recipe.image }
          calories = { item.recipe.calories }
          ingredients={ item.recipe.ingredients}
          cuisineType = { item.recipe.cuisineType }
          cholesterolLabel = { item.recipe.totalDaily.CHOLE.label }
          cholesterolQuantity = { item.recipe.totalDaily.CHOLE.quantity}
          cholesterolUnit = { item.recipe.totalDaily.CHOLE.unit }
          carbsLabel = { item.recipe.totalDaily.CHOCDF.label }
          carbsQuantity = { item.recipe.totalDaily.CHOCDF.quantity }
          carbsUnit = { item.recipe.totalDaily.CHOCDF.unit }
          proteinLabel = { item.recipe.totalDaily.PROCNT.label }
          proteinQuantity=  { item.recipe.totalDaily.PROCNT.quantity }
          proteinUnit ={ item.recipe.totalDaily.PROCNT.unit }
          fatLabel = { item.recipe.totalDaily.FAT.label }
          fatQuantity = { item.recipe.totalDaily.FAT.quantity }
          fatUnit = { item.recipe.totalDaily.FAT.unit }
          recipeTotalWeight = { item.recipe.totalWeight }
          learnMoreLink = { item.recipe.url }
          fiberLabel = { item.recipe.totalDaily.FIBTG.label }
          fiberQuantity = { item.recipe.totalDaily.FIBTG.quantity }
          fiberUnit = { item.recipe.totalDaily.FIBTG.unit }
          ironLabel = { item.recipe.totalDaily.FE.label }
          ironQuantity = { item.recipe.totalDaily.FE.quantity }
          ironUnit = { item.recipe.totalDaily.FE.unit }
          magnesiumLabel = { item.recipe.totalDaily.MG.label }
          magnesiumQuantity = { item.recipe.totalDaily.MG.quantity }
          magnesiumUnit = { item.recipe.totalDaily.MG.unit }
          potassiumLabel = { item.recipe.totalDaily.K.label }
          potassiumQuantity = { item.recipe.totalDaily.K.quantity }
          potassiumUnit = { item.recipe.totalDaily.K.unit }
          sodiumLabel = { item.recipe.totalDaily.NA.label }
          sodiumQuantity = { item.recipe.totalDaily.NA.quantity }
          sodiumUnit = { item.recipe.totalDaily.NA.unit }

        />)}
    </div>
  )
}

export default MainBodyContent;