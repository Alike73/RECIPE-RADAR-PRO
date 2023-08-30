import myVideo from '../../../Assets/Videos/food.mp4';

const MainBannerVideo = () => {

  return (
    <figure>
      <div className="outerBevel">
        <div className="flatSurface">
          <div className="innerBevel">
            <video className="d-block mx-lg-auto img-fluid" autoPlay muted loop >
              <source src={ myVideo } type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </figure>
  )
}

export default MainBannerVideo;