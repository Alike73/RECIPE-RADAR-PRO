import MainBannerVideo from "./MainBannerVideo";
import MainChef from "./MainChef";
import MainTitle from "./MainTitle";
import SearchInput from "./SearchInput/SearchInput";


const MainBannerContent = ({ myRecipeSearch, finalSearch }) => {

  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse justify-content-center align-items-center g-5 py-5">
        <MainTitle />
        <div className='search_wrapper'>
          <SearchInput 
            myRecipeSearch = { myRecipeSearch } 
            finalSearch = { finalSearch } 
          />
        </div>
        <div className="col-10 col-sm-8 col-lg-6">
          <MainBannerVideo />
        </div>
        <div className="col-lg-6">
          <MainChef />
        </div>
      </div>
    </div>
  )
}

export default MainBannerContent;