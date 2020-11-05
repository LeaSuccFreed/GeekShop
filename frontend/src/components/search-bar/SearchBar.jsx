import React from 'react'

import {SearchBarContainer, Input, SearchIconContainer, SearchLogo} from './search-bar_style'
const SearchBar = () => {
    return (
        <SearchBarContainer>
            <Input type="text" id="search" placeholder="Search"/>
            <SearchIconContainer type="submit">
                <SearchLogo/>
            </SearchIconContainer>
        </SearchBarContainer>
    )
}

export default SearchBar

