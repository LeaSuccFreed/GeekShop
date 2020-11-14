import React from 'react'

import {CategorieLi, Categories, SideBarContainer} from './side-bar_style'

const SideBar = (props) => {
    return (
        <SideBarContainer {...props}>
            <h3 className='title'>Categories</h3>
            <Categories>
                <CategorieLi to="marvel">Marvel</CategorieLi>
                <CategorieLi to="dc">DC</CategorieLi>
                <CategorieLi to='archie'>Archie</CategorieLi>
                <CategorieLi to='/'>All</CategorieLi>
            </Categories>
        </SideBarContainer>
    )
}

export default SideBar
