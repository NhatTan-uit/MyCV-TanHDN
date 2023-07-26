import React, { useRef, MutableRefObject, useState, useEffect } from 'react';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

//api
import { fetchData, CVData } from './api';

//Global Style (wrap.ts)
import { GlobalStyle, Wrapper, Container, ContainerMain, ContainerSub, HeaderWrapper } from './wrap';

//components
import GeneratePDF from './components/GeneratePDF';
import CardSub from './components/CardSub';
import Header from './components/Header';

function App() {
  const pdfRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  //state hooks
  const [loadingState, setLoadingState] = useState(true);
  const [cvdata, setCVData] = useState({});

  //load Data
  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const data = await fetchData();
        console.log(data);
        setCVData(data);
        setLoadingState(false);
      } catch (e) {
        console.log(e);
      }
    }

    fetchCVData();
  }, [fetchData]);

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <GlobalStyle />
      <Wrapper ref={pdfRef}>
        <HeaderWrapper>
          <Header
            bgcolor={'yellow'}
          ></Header>
        </HeaderWrapper>
        <Container>
          <ContainerSub>
            <CardSub
              title={"My name is tan"}
              bgcolor={"red"}
            ></CardSub>
            <CardSub
              title={"My name is tannnnnnnnnnnnnnnnn"}
              bgcolor={"aqua"}
            ></CardSub>
          </ContainerSub>
          <ContainerMain>
            <CardSub
              title={"My name is tan"}
              bgcolor={"lime"}
            ></CardSub>
            <CardSub
              title={"My name is tan"}
              bgcolor={"pink"}
            ></CardSub>
          </ContainerMain>
        </Container>
      </Wrapper>
      <GeneratePDF divref={pdfRef} />
    </StyleSheetManager>
  );
}

export default App;