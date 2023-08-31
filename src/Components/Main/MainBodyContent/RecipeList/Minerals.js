


const Minerals = ({
  ironLabel, ironQuantity, ironUnit,
  magnesiumLabel, magnesiumQuantity, magnesiumUnit,
  potassiumLabel, potassiumQuantity, potassiumUnit,
  sodiumLabel, sodiumQuantity, sodiumUnit
}) => {

  return (
    <div>
      <ul className="menu">
        <li>Minerals:</li>
        <li><span>"{ ironLabel }"</span><em>{ ironQuantity.toFixed() }{ ironUnit }</em></li>
        <li><span>"{ magnesiumLabel }"</span><em>{ magnesiumQuantity.toFixed() }{ magnesiumUnit }</em></li>
        <li><span>"{ potassiumLabel }"</span><em>{ potassiumQuantity.toFixed() }{ potassiumUnit }</em></li>
        <li><span>"{ sodiumLabel }"</span><em>{ sodiumQuantity.toFixed() }{ sodiumUnit }</em></li>
      </ul>
    </div>
  )
}

export default Minerals;