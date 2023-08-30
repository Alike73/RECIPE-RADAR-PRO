import MainBannerContent from "./MainBannerContent/MainBannerContent";
import MainBodyContent from "./MainBodyContent/MainBodyContent";
import podImg from '../../Assets/Images/pod.png';


const Main = () => {

  return (
    <div className="main">
      <header className="main_header">
        <progress className='top_progress_bar' max="100" value="0" />
        <img className="top_logo" src={ podImg } alt="cooking" />
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