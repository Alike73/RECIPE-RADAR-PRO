

const RecipeRibbon = ({ cuisineType }) => {

  return (
    <div className="ribbon">
      <span id="changeText">
        { cuisineType }
      </span>
    </div>
  )
}

export default RecipeRibbon;