import React from 'react'
import { styled } from 'styled-components'

//interface
import { CVDataHeader } from '../api';

//Type
type Props = {
    bgcolor: string,
    data?: CVDataHeader,
}

//Style
const HeaderWrapper = styled.div<Pick<Props, "bgcolor">>`
    background-color: ${props => props.bgcolor};
`;

const Title = styled.h1`
    
`;


//Component
const Header = (props: Props) => {
    return (
        <HeaderWrapper {...{
            bgcolor: props.bgcolor
        }}>
            {
                props.data && props.data.image? <p>{props.data.image}</p> : <p>fail</p>
            }
        </HeaderWrapper>
    )
}

export default Header