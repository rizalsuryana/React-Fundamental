import React from "react";
import PropTypes from "prop-types";


const SearchBar = ({keyword, keywordChange}) =>{
    return (

        <input
        className="search-bar"
        type="text"
        placeholder="Search By Name"
        value={keyword}
        onChange={(event)=> keywordChange(event.target.value)}/>
    )
}

SearchBar.propType = {
    keyword         : PropTypes.string.isRequired,
    keywordChange   : PropTypes.func.isRequired
}

export default SearchBar;