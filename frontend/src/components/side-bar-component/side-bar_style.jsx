import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const SideBarContainer = styled.aside`
    position: fixed;
    transition: all 0.5s;
    transform: ${({open}) => open ? 'translateX(0)' : 'translateX(-30rem)' };
    width: 9rem;
    min-height: 100vh;
    background: #f0f0f0;
    z-index: 2;

    & .title{
       margin-left: 23px;
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
`