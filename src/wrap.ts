import { styled, createGlobalStyle } from "styled-components";

export const colorlist = {
    testbg: "blue",
    testbgg: "gray",
    testbgpart: "red",
    testbgpartsub1: "orange",
    testbgpartsub2: "purple",
};

export const cvcolor = {
    'background-main-color': '#156388',
    'background-secondary-color': '#4CA1C1',
    'background-secondary-color-blain': '#FFFFFF',

    'text-color-main': '#FFFFFF',
    'text-color-secondary': '#F6F3ED',
    'text-color-main-blain': "#525859",
    'text-color-secondary-blain': '#5A5A5A'
};

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        word-wrap: break-word;
        font-family: 'Montserrat', sans-serif;
    }
`;

export const HeaderWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 22%;
`

export const Container = styled.div`
    display: flex;
    align-items: center;
    height: 78.01%;
`

export const ContainerSub = styled.div`
    display: flex;
    flex-direction: column;
    width: 33%;
    justify-content: space-between;
    height: 100%;
`

export const ContainerMain = styled.div`
    background-color: ${cvcolor["background-secondary-color-blain"]};
    display: flex;
    flex-direction: column;
    width: 67%;
    height: 100%;
`

export const Wrapper = styled.div`
    background-color: ${cvcolor["background-main-color"]};
    height: 297mm !important;
    width: 210mm !important;
    margin: 0 auto;
`