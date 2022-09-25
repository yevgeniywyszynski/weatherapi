import React from "react";
import styles from '../SearchBar/SearchBar.module.scss';

const SearchBar = ({changePhrase,loadWeatherRequest,phrase, weatherRedux,addHistory}) => {

   const searchPhraseValidation = (phrase) => {
    if(phrase.length < 0 || !isNaN(phrase)){
        alert('wpisz poprawnie nazwe')
    } else {
        loadWeatherRequest(phrase)
        addHistory(weatherRedux)
    }
   }

    return(
        <div className={styles.searchWrapper}>
            <input
                className={styles.inputSearch}
                type="text"
                placeholder='Wpisz miasto'
                onChange={(e)=>changePhrase(e.target.value)}
                >
            </input>
            <button type="button"
                className={styles.btnSearch}
                onClick={() => searchPhraseValidation(phrase)}
                >
                szukaj
            </button>
        </div>
    )
}

export default SearchBar;