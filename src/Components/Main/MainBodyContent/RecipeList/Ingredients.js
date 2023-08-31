import IngredientsItem from "./IngredientsItem";



const Ingredients = ({ ingredients }) => {

  return (
    <div>
      <ul className="menu">
        <li>Ingredients:</li>
          { ingredients.map((item, index) => <IngredientsItem 
            text = { item.text } 
            weight = { item.weight } 
            key={ index } 

          />)}
      </ul>
    </div>
  )
}

export default Ingredients;