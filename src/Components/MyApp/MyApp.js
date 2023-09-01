import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { BubblyContainer, BubblyLink } from "react-bubbly-transitions";
import Main from "../Main/Main";
import NutritionAnalysis from "../NutritionAnalysis/NutritionAnalysis";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const MyApp = () => {

  return (
    <div>
    <BrowserRouter>
      <BubblyContainer />
      <Routes>
        <Route
          path="/"
          element={
            <>
            <ScrollToTop />
              <header className="main_header">
                <div className="container">
                  <div className='d-flex flex-wrap align-items-center justify-content-center'>
                    <ul className='nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 mx-auto'>
                      <li>
                        <BubblyLink 
                          to="/" 
                          colorStart="linear-gradient(to top, #0ba360 0%, #3cba92 100%)" 
                          colorEnd="linear-gradient(to top, #c79081 0%, #dfa579 100%)"
                          >
                          <span className="Btn">
                            Go back
                          </span>
                        </BubblyLink>
                      </li>
                      <li>
                        <BubblyLink 
                          to="/nutrition_analysis" 
                          colorStart="linear-gradient(to top, #30cfd0 0%, #330867 100%)" 
                          colorEnd="linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
                          >
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