import MainBannerContent from "./MainBannerContent/MainBannerContent";
import MainBodyContent from "./MainBodyContent/MainBodyContent";


const Main = () => {

  return (
    <div className="main">
      <header className="main_header">

      </header>
      <div className="main_banner">
        <MainBannerContent />
      </div>
      <div className="main_body">
        <MainBodyContent />
      </div>
    </div>
  )
}

export default Main;