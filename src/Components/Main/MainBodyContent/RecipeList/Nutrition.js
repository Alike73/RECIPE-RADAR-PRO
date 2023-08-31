

const Nutrition = ({ 
  cholesterolLabel, cholesterolQuantity, cholesterolUnit, 
  carbsLabel, carbsQuantity, carbsUnit, 
  proteinLabel, proteinQuantity, proteinUnit,
  fatLabel, fatQuantity, fatUnit,
  fiberLabel, fiberQuantity, fiberUnit }) => {

  return (
    <div>
      <ul className="menu">
        <li>Nutrition:</li>
        <li><span>"{ cholesterolLabel }"</span><em>{ cholesterolQuantity.toFixed() }{ cholesterolUnit }</em></li>
        <li><span>"{ carbsLabel }"</span><em>{ carbsQuantity.toFixed() }{ carbsUnit }</em></li>
        <li><span>"{ proteinLabel }"</span><em>{ proteinQuantity.toFixed() }{ proteinUnit }</em></li>
        <li><span>"{ fatLabel }"</span><em>{ fatQuantity.toFixed() }{ fatUnit }</em></li>
        <li><span>"{ fiberLabel }"</span><em>{ fiberQuantity.toFixed() }{ fiberUnit }</em></li>
      </ul>
    </div>
  )
}

export default Nutrition;