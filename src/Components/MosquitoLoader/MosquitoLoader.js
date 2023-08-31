import './MosquitoLoader.css';

const MosquitoLoader = () => {

  return (
    <div className="mosquito_loader">
      <div className="mosquito">
        <div className="mosquito__leftLeg mosquito__leftLeg_back"></div>
        <div className="mosquito__leftLeg mosquito__leftLeg_front"></div>
        <div className="mosquito__rightLeg mosquito__rightLeg_back"></div>
        <div className="mosquito__rightLeg mosquito__rightLeg_front"></div>
        <div className="mosquito__leftWing"></div>
        <div className="mosquito__rightWing"></div>
        <div className="mosquito__body"></div>

        <div className="mosquito__face">
          <div className="mosquito__leftEye"></div>
          <div className="mosquito__rightEye"></div>
          <div className="mosquito__nose">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MosquitoLoader;