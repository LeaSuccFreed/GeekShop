import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    position: absolute;
    transition: all 0.5s;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-30rem)' };
    width: 9rem;
    min-height: 100vh;
    background-color: rgba(0, 0, 0, .95);
;
    z-index: 2;

    & .title{
       margin-left: 23px;
       color: white
    }
`
export const Categories = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const CategorieLi = styled(Link)`
     margin-bottom: 1rem; 
    border-bottom: 2px solid white;
    color: white;
`