
import './SearchInput.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getWindowWidth, setWindowWidth } from '../../../../Redux/RecipesSlice';
import Swal from "sweetalert2";
import Eyes from "./Eyes/Eyes";
import head from '../../../../Assets/Images/headerChef.png';
import chef from '../../../../Assets/Images/chef3.png';


const SearchInput = ({ finalSearch, myRecipeSearch, mySearch, setMySearch }) => {

    // const isShowBtn = useSelector(getShowBtn);
    const [isSearchInput, setIsSearchInput] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);
    const windowWidth = useSelector(getWindowWidth);
    const dispatch = useDispatch();

    

    const handleInputFocus = () => {
        setIsInputFocused(true);
        setIsSearchInput(true);
    };

    const handleInputBlur = () => {
        setIsInputFocused(false);
        setIsSearchInput(false);
    };
    
    const handleCleanInput = () => {
        setMySearch('');
    }

    const placeholderItems = {
        placeholderTitle: 'Enter your ingredients...',
        space: ' ',
        placeholderIcon: '👀'
    };

    // Event listener to update the screen size on window resize
    useEffect(() => {
        const handleResize = () => {
            dispatch(setWindowWidth(window.innerWidth));
        };
            window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [dispatch]);

    // Function to check if the screen size is less than 800px
    const isSmallScreen = windowWidth < 800;
    
    const handleAlert = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Please!',
            text: 'Start typing your ingredients first.',
            imageUrl: chef,
            imageWidth: 150,
            // imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }
    

    const btnContent = mySearch ? 'Submit' : (
        <div>
            <Eyes />
            <div className='mouth mt-1'>
                <div className='teeth_wrapper'>
                    <div className='teeth' />
                    <div className='teeth' />
                </div>
            </div>
        </div>
    ) 

    return (
        <form onSubmit={ mySearch ? finalSearch : handleAlert }>
            <div className={ isSearchInput 
            ? 'searchInputOuterActive' 
            : 'searchInputOuter'} onClick={handleInputFocus}
            >
            { !isSearchInput && (
                <img className='chef_head' src={ head } alt="chef-head" />
            )}
            <span className={`eye ${isSearchInput ? 'eyeActive' : ''}`}>
            <Eyes />
            </span>
            <input 
                className={ isSearchInput 
                    ? `form-control form-control-lg ${ isInputFocused ? 'searchProjectInputActive' : 'searchProjectInputActive' }`
                    : `form-control form-control-lg ${ isInputFocused ? 'searchProjectInput' : 'searchProjectInput' }`
                } 
                type="search" 
                placeholder={`${ placeholderItems.placeholderTitle } ${ placeholderItems.space } ${ placeholderItems.placeholderIcon }`} 
                aria-label=".form-control-lg example"
                onFocus={ handleInputFocus }
                onBlur={ mySearch ? handleInputFocus : handleInputBlur }
                value={ mySearch} 
                onChange={ myRecipeSearch }
                // onKeyDown={handleKeyPress}
            />
            {/* ---To fix later, clean input on click--- */}
            { isSearchInput && (
                <i className="bi bi-x fs-3" onClick={ handleCleanInput } />
            )}
            </div>
            <div className={ isSmallScreen ? 'd-flex justify-content-end mt-3' : 'd-flex mt-3'}>
                <button
                    // disabled = { !mySearch } 
                    type="submit" 
                    className="Btn"
                    onClick={ mySearch ? finalSearch : handleAlert } 
                    >
                    { btnContent }
                </button>
            </div>
        </form>
    )
}

export default SearchInput;