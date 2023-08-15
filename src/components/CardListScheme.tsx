import React from 'react'
import { CVScheme } from '../api'
import { styled } from 'styled-components'

//Types
type Props = {
    content: string,
    scheme: CVScheme,
}

//Styles
const Container = styled.div`
    display: flex;
    white-space: pre-line
`;

const Timer = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 15%;
    font-weight: bold;
`;

const Liner = styled.div`
    width: 4px;
    height: 65%;
    background-color: #bbb;
    margin: 5px 10px;
`;

const Circle = styled.div`
    height: 10px;
    width: 10px;
    margin-top: 5px;
    background-color: #bbb;
    border-radius: 50%;
`

const Seperator = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100%;
    align-items: center;
`

const ContentPart = styled.div`
    display: flex;
    flex-direction: column;
`;

const Item = styled.div`
    line-height: 1.5;
    text-align: justify;
    font-size: 15px;
`;

const Header = styled.h4`
    padding-bottom: 5px;
    font-size: 17px;
`;

const CardListScheme = (props: Props) => {
    return (
        <Container>
            <Timer>
                <Item>
                    {props.scheme.timestart}
                </Item>
                <Item>
                    {props.scheme.timeend}
                </Item>
            </Timer>
            <Seperator>
                <Circle />
                <Liner />
            </Seperator>
            <ContentPart>
                <Header>
                    {props.scheme.title}
                </Header>
                <Item>
                    {props.content}
                </Item>
            </ContentPart>
        </Container>
    )
}

export default CardListScheme;