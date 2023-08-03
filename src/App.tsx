import React, { useRef, MutableRefObject, useState, useEffect } from 'react';

import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

//api
import { fetchData, CVDataHeader, CVDataBody } from './api';

//Global Style (wrap.ts)
import { GlobalStyle, Wrapper, Container, ContainerMain, ContainerSub, HeaderWrapper, cvcolor } from './wrap';

//components
import GeneratePDF from './components/GeneratePDF';
import CardSub from './components/CardSub';
import Header from './components/Header';

function App() {
  const pdfRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  //state hooks
  const [loadingState, setLoadingState] = useState(true);
  const [cvdatabodysub, setCVDataBodySub] = useState<CVDataBody[]>([]);
  const [cvdatabodymain, setCVDataBodyMain] = useState<CVDataBody[]>([]);
  const [cvdataheader, setCVDataHeader] = useState<CVDataHeader>();

  //load Data
  useEffect(() => {
    const fetchCVData = async () => {
      try {
        const data = await fetchData();
        setCVDataBodySub(data.body.sub);
        setCVDataBodyMain(data.body.main);
        setCVDataHeader(data.header);
        setLoadingState(false);
      } catch (e) {
        console.log(e);
      }
    }

    fetchCVData();
  }, []);

  return (
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <GlobalStyle />
      {
        !loadingState ?
          <Wrapper ref={pdfRef}>
            <HeaderWrapper>
              <Header
                bgcolor={'yellow'}
                data={cvdataheader}
              ></Header>
            </HeaderWrapper>
            <Container>
              <ContainerSub>
                {
                  cvdatabodysub && cvdatabodysub.length > 0 ?
                    cvdatabodysub.map((item, key) => {
                      if (key % 2 == 0) {
                        return <CardSub key={key} data={item} bgcolor={cvcolor['background-secondary-color']} />
                      }
                      else return <CardSub key={key} data={item} bgcolor={cvcolor['background-main-color']} />
                    })
                    :
                    <p>no item</p>
                }
              </ContainerSub>
              <ContainerMain>
                {
                  cvdatabodymain && cvdatabodymain.length > 0 ?
                    cvdatabodymain.map((item, key) => {
                      return <CardSub key={key} data={item} bgcolor={cvcolor['background-secondary-color-blain']} />
                    })
                    :
                    <p>no item</p>
                }
              </ContainerMain>
            </Container>
          </Wrapper>
          :
          <Wrapper>
            Loading...
          </Wrapper>
      }
      <GeneratePDF divref={pdfRef} />
    </StyleSheetManager>
  );
}

export default App;