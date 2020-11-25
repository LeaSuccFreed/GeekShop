import styled from 'styled-components'
import {keyframes} from 'styled-components'
import {ReactComponent as LodingLogo} from '../../assets/loadingX.svg'
export const Container = styled.div`
    position: absolute;
    display: flex;
    top: 300px;
    justify-content: center;
    align-items: center;
`

const loadingAnimations = keyframes`
     from{
        transform: rotateZ(0deg);
    }

    to{
        transform: rotateZ(360deg);
    }`

export const Loader = styled(LodingLogo)`
        animation: ${loadingAnimations} 1s ease infinite;
    `