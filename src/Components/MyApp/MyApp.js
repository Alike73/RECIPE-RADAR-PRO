import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";

import Main from "../Main/Main";
import NutritionAnalysis from "../NutritionAnalysis/NutritionAnalysis";
import { useEffect } from "react";
import gsap from "../../gsapSetup";

const MyApp = () => {

  useEffect(() => {
    gsap.to(".top_progress_bar", {
        value: 100,
        scrollTrigger: {
            scrub: 0.5,
        },
    });
}, []);

  return (
    <div>
    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header className="main_header">
                <progress className='top_progress_bar' max="100" value="0" />
                <div className="container">
                  <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-auto'>
                      <li>
                        <BubblyLink to="/">
                          <span className="Btn">
                            Go back
                          </span>
                        </BubblyLink>
                      </li>
                      <li>
                        <BubblyLink to="/nutrition_analysis">
                          <span className="Btn">
                            Analyze
                          </span>
                        </BubblyLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </header>
              <Outlet />
            </>
          }
        >
          <Route index element={<Main />} />
          <Route path="nutrition_analysis" element={<NutritionAnalysis />} />
          <Route path="*" element={<>No Match</>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}

export default MyApp;