import chef from '../../../Assets/Images/chef3.png';

const MainChef = () => {

  return (
    <>
      <img 
        src={ chef } 
        className="d-block mx-auto img-fluid chefIcon" 
        alt="Italian chef" 
        width="200" 
        loading="lazy" 
      />
    </>
  )
}

export default MainChef;