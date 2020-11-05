import styled from 'styled-components'

const colors = {
    basecolor: '#0f1010',
    hovercolor: '#ffffff'
  }

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 150px;
  height: 40px;
  margin: 1%;
  border: 2px solid ${colors.basecolor};
  border-radius: 5px;
  font-size: 1rem;
  background-color: #ffff;
  cursor: pointer;

 & span{
    position: relative;
    color: transparent;
    background-image: linear-gradient(
      90deg,
      ${colors.hovercolor} 0%,
      ${colors.hovercolor} 50%,
      ${colors.basecolor} 50%,
        ${colors.basecolor} 100%
    );
    background-repeat: repeat;
    background-size: 200%;
    background-position: 100% 0;
    -webkit-background-clip: text;
    background-clip: text;
    transition: background-position 300ms;
 }

 &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${colors.basecolor};
    transform-origin: 100% 0;
    transform: scale3d(0, 1, 1);
    transition: transform 300ms;
  }
  
  &:hover {
    span{
      background-position: 0 0;
    }

    &::before {
      transform-origin: 0 0;
      transform: scale3d(1, 1, 1);
    }
  }

`