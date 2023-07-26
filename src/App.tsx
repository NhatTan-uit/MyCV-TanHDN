import React, { useRef, MutableRefObject } from 'react';
import { GlobalStyle, Wrapper } from './wrap';

//components
import GeneratePDF from './components/GeneratePDF';
import CardSub from './components/CardSub';

function App() {
  const pdfRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  return (
    <>
      <div>
        <GlobalStyle />
        <Wrapper ref={pdfRef}>
          <h1>
            Hello world
          </h1>
          <CardSub
            title={"My name is tan"}
            cardHeight={"22%"}
            cardWidth={"100%"}
            backgroundColor='red'
          ></CardSub>
          <CardSub
            title={"My name is tan"}
            cardHeight={"22%"}
            cardWidth={"100%"}
            backgroundColor='aqua'
          ></CardSub>
          <CardSub
            title={"My name is tan"}
            cardHeight={"22%"}
            cardWidth={"100%"}
            backgroundColor='lime'
          ></CardSub>
          <CardSub
            title={"My name is tan"}
            cardHeight={"22%"}
            cardWidth={"100%"}
            backgroundColor='pink'
          ></CardSub>
        </Wrapper>
      </div>
      <GeneratePDF divref={pdfRef} />
    </>
  );
}

export default App;