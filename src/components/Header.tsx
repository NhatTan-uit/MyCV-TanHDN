import React from 'react'
import { styled } from 'styled-components'

//Color
import { cvcolor } from '../wrap';

//interface
import { CVDataHeader } from '../api';
import SelfImage from './SelfImage';

//Type
type Props = {
    data?: CVDataHeader,
}

//Style
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const HeaderContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 60%;
`;

const Title = styled.h1`
    font-size: 22pt;
    margin-bottom: 5px;
    color: ${cvcolor['text-color-main']};
`;

const Content = styled.p`
    font-size: 13pt;
    text-align: justify;
    color: ${cvcolor['text-color-secondary']};
    word-wrap: break-word;
    white-space: pre-line;
`;


//Component
const Header = (props: Props) => {
    return (
        <HeaderWrapper>
            {
                props.data && props.data.image ? <SelfImage image={props.data.image} /> : <Title>no data</Title>
            }
            <HeaderContentWrapper>
                {
                    props.data && props.data.title ? <Title>{props.data.title}</Title> : <Title>no data</Title>
                }
                {
                    props.data && props.data.content ? <Content>{props.data.content}</Content> : <Content>no data</Content>
                }
            </HeaderContentWrapper>
        </HeaderWrapper>
    )
}

export default Header