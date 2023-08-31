

const Nutrition = ({ label, quantity, unit }) => {

  return (
    <li className='border-bottom'>
      <span>
        "{ label }"
      </span>
      <em>
        { quantity }{ unit }
      </em>
    </li>
  )
}

export default Nutrition;