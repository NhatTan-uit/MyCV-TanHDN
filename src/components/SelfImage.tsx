import React from 'react'
import { styled } from 'styled-components';
import hdnt from '../assets/hdnt-uit.jpg';

//components
import SelfImageInnerShade from './SelfImageInnerShade';

//Types
type Props = {
  image?: string;
}


//Style
const ImageBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 140px;
  width: 140px;
  border: 15px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.49);
  border-radius: 20px;
`;

const ImageBorderHide = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 140px;
  width: 140px;
  border: 11px solid white;
  border-radius: 20px;
  position: absolute;
`;

const HeaderImage = styled.img<Props>`
  height: 120px;
  width: 120px;
  object-fit: cover;
  object-position: 100% 0%;
`;

const SelfImage = (props: Props) => {
  return (
    <ImageBorder>
      <SelfImageInnerShade />
      <ImageBorderHide />
      <HeaderImage src={hdnt} />
    </ImageBorder>
  )
}

export default SelfImage