import { styled, createGlobalStyle } from "styled-components";

export const colorlist = {
    testbg: "blue",
    testbgg: "gray",
    testbgpart: "red",
    testbgpartsub1: "orange",
    testbgpartsub2: "purple",
};

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        word-wrap: break-word;
    }
`;

export const HeaderWrapper = styled.div`
    background-color: ${colorlist.testbgg};
    display: flex;
    align-items: center;
    height: 22%;
    margin: 2%;
`

export const Container = styled.div`
    background-color: ${colorlist.testbgpart};
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerSub = styled.div`
    background-color: ${colorlist.testbgpartsub1};
    display: flex;
    flex-direction: column;
    width: 33%;
    margin: 2%;
`

export const ContainerMain = styled.div`
    background-color: ${colorlist.testbgpartsub2};
    display: flex;
    flex-direction: column;
    width: 67%;
    margin: 2%;
`

export const Wrapper = styled.div`
    background-color: ${colorlist.testbg};
    height: 297mm !important;
    width: 210mm !important;
    margin: 0 auto;
`