
import CircularProgressBar from './CircularBtn/CircularProgressBar';
import './ScrollToTop.css';
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 600) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    
    return (
        <div>
            <div className="top-to-btn">
                {" "}
                {showTopBtn && (
                    <CircularProgressBar strokeWidth={4} sqSize={40} goToTop = {goToTop} />
                )}{" "}
            </div>
        </div>
    );
};
export default ScrollToTop;