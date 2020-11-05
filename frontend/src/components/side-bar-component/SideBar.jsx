import React from 'react'

import {CategorieLi, Categories, SideBarContainer} from './side-bar_style'

const SideBar = (props) => {
    return (
        <SideBarContainer {...props}>
            <h3 className='title'>Categories</h3>
            <Categories>
                <CategorieLi to="/mercedes">Mercedes-Benz</CategorieLi>
                <CategorieLi to="lamborghini">Lamborghini</CategorieLi>
                <CategorieLi to='bentley'>Bentley</CategorieLi>
            </Categories>
        </SideBarContainer>
    )
}

export default SideBar
