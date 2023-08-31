

const IngredientsItem = ({ text, weight }) => {

  return (
    <li>
      <span>
        "{ text }"
      </span>
      <em>
        { weight.toFixed() }gr
      </em>
    </li>
  )
}

export default IngredientsItem;