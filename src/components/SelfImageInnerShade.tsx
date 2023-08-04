import React from 'react'
import { styled } from 'styled-components';

//Types
type Props = {}

//Styles
const ImageBorderInnerLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(to right, #727577 0.1%, transparent 7%);
  opacity: 0.65;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(to bottom, #727577 0.1%, transparent 7%);
  opacity: 0.65;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(to left, #727577 0.01%, transparent 3%);
  opacity: 0.65;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(to top, #727577 0.01%, transparent 3%);
  opacity: 0.65;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerTunning1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(155deg, #727577 1%, transparent 10%);
  opacity: 0.2;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerTunning2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(135deg, #727577 1%, transparent 10%);
  opacity: 0.2;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerTunning3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(115deg, #727577 1%, transparent 10%);
  opacity: 0.2;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerTunning4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(315deg, #727577 3%, transparent 5%);
  opacity: 0.37;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerTunning5 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(220deg, #727577 1%, transparent 8%);
  opacity: 0.37;
  position: absolute;
  border-radius: 12px;
`;

const ImageBorderInnerTunning6 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 120px;
  width: 120px;
  background-image: linear-gradient(400deg, #727577 1%, transparent 8%);
  opacity: 0.37;
  position: absolute;
  border-radius: 12px;
`;

const SelfImageInnerShade = (props: Props) => {
    return (
        <>
            <ImageBorderInnerLeft />
            <ImageBorderInnerTop />
            <ImageBorderInnerRight />
            <ImageBorderInnerBottom />
            <ImageBorderInnerTunning1 />
            <ImageBorderInnerTunning2 />
            <ImageBorderInnerTunning3 />
            <ImageBorderInnerTunning4 />
            <ImageBorderInnerTunning5 />
            <ImageBorderInnerTunning6 />
        </>
    )
}

export default SelfImageInnerShade