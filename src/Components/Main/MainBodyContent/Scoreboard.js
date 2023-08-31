
const Scoreboard = ({ calories, recipeTotalWeight}) => {

  return (
    <div className="badge-border">
      <div className="badge-content">
        <h2>{ calories.toFixed() } kcal</h2>
        <p>Total Weight:</p>
        <h3>{ recipeTotalWeight.toFixed() } gr</h3>
      </div>
    </div>
  )
}

export default Scoreboard;