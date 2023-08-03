import React from 'react'
import { styled } from 'styled-components';
import nonuser from '../assets/nonuser.jpg';

//Types
type Props = {
    image?: string;
}

//Style
const HeaderImage = styled.div<Props>`
  ${({ image }) => image && `
    background-image: url(${image});
  `}
  height: 100px;
  width: 100px;
`;

const SelfImage = (props: Props) => {
  return (
    <HeaderImage />
  )
}

export default SelfImage