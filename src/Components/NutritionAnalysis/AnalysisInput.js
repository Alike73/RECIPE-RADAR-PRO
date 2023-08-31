
import '../Main/MainBannerContent/SearchInput/SearchInput.css';
import { useState } from "react";
import Swal from "sweetalert2";
import Eyes from "../Main/MainBannerContent/SearchInput/Eyes/Eyes";
import head from '../../Assets/Images/headerChef.png';
import chef from '../../Assets/Images/chef3.png';


const AnalysisInput = ({ finalSearch, myRecipeSearch, mySearch, setMySearch }) => {
    
    const [isSearchInput, setIsSearchInput] = useState(false);
    const [isInputFocused, setIsInputFocused] = useState(false);
    

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
        placeholderTitle: 'Enter your products...',
        space: ' ',
        placeholderIcon: '👀'
    };
    
    const handleAlert = (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Please!',
            text: 'Start typing your products. Example: 2tomato 1apple, etc.',
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
            <div className="d-flex justify-content-end mt-3 px-3">
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

export default AnalysisInput;