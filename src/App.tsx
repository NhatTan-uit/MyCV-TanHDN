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
      <GeneratePDF divref={pdfRef} />
      <GlobalStyle />
      {
        !loadingState ?
          <Wrapper ref={pdfRef}>
            <HeaderWrapper>
              <Header
                data={cvdataheader}
              ></Header>
            </HeaderWrapper>
            <Container>
              <ContainerSub>
                {
                  cvdatabodysub && cvdatabodysub.length > 0 ?
                    cvdatabodysub.map((item, key) => {
                      if (key % 2 === 0) {
                        return <CardSub
                          key={key}
                          data={item}
                          bgcolor={cvcolor['background-secondary-color']}
                          titlecolor={cvcolor['text-color-main']}
                          textcolor={cvcolor['text-color-secondary']}
                        />
                      }
                      else return <CardSub
                        key={key}
                        data={item}
                        bgcolor={cvcolor['background-main-color']}
                        titlecolor={cvcolor['text-color-main']}
                        textcolor={cvcolor['text-color-secondary']}
                      />
                    })
                    :
                    null
                }
              </ContainerSub>
              <ContainerMain>
                {
                  cvdatabodymain && cvdatabodymain.length > 0 ?
                    cvdatabodymain.map((item, key, arr) => {
                      if (key + 1 === arr.length) {
                        return <CardSub
                          key={key}
                          data={item}
                          bgcolor={cvcolor['background-secondary-color-blain']}
                          titlecolor={cvcolor['text-color-main-blain']}
                          textcolor={cvcolor['text-color-secondary-blain']}
                          ismainpart={true}
                          islastitem={true}
                          eliminatefoot={true}
                        />
                      } else {
                        return <CardSub
                          key={key}
                          data={item}
                          bgcolor={cvcolor['background-secondary-color-blain']}
                          titlecolor={cvcolor['text-color-main-blain']}
                          textcolor={cvcolor['text-color-secondary-blain']}
                          ismainpart={true}
                          eliminatefoot={true}
                        />
                      }
                    })
                    :
                    null
                }
              </ContainerMain>
            </Container>
          </Wrapper>
          :
          <Wrapper>
            Loading...
          </Wrapper>
      }
    </StyleSheetManager>
  );
}

export default App;