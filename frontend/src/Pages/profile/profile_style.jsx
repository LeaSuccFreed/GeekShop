import styled from 'styled-components';
import {device} from '../../components/size_style'

export const Container = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 30%;
align-items: center;

&:last-child{
	padding-top: 1vh;
}


@media ${device.laptop}{
	width: 50%;
}

@media ${device.mobileL}{
	width: 100%;
}
`

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
height: 15vh;
justify-content: space-evenly;
width: 88%/*360px*/;
align-items: center;

& label{
    align-self: flex-start;
	padding-left: 5%
}

& input{
    width: 88%/*360px*/;
	background: #fff;
	color: $input-text-color;
	font: inherit;
	/* box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1); */
    border: 2px solid black;
	outline: 0;
	padding: 12px 18px;
}

`