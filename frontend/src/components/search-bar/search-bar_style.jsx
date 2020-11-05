import styled from 'styled-components'

import {ReactComponent as SearchIcon} from '../../assets/search.svg'
export const SearchBarContainer = styled.div`
    width: 31.29890454%; /*400px;*/
    height: 25px;
    display: flex;
    border: 2px solid rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    
`
export const Input = styled.input`
    flex-grow: 3;
    outline: none;
    padding: 10px;
    border: none;
    border-radius: 10px 0px 0px 10px;
    
`

export const SearchIconContainer = styled.button`
    flex-grow: 1;
    outline: none;
    display: flex;
    justify-content: center;
    align-content: center;
    border: none;
    outline: none;
    border-radius: 0 10px 10px 0;
`

export const SearchLogo = styled(SearchIcon)`
    
`