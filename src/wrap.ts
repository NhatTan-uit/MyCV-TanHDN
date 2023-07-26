import { styled, createGlobalStyle } from "styled-components";

export const colorlist = {
    testbg: "blue",
    testbgpart: "red",
    testbgpartsub: "yellow",
};

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        
    }
`;

export const Wrapper = styled.div`
    background-color: ${colorlist.testbg};
    height: 297mm !important;
    width: 210mm !important;
    margin: 0 auto;
`