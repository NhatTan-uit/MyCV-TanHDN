import React from 'react'
import { styled } from 'styled-components'

//Type
type Props = {
    image?: string,
    bgcolor: string
}

//Style
const HeaderWrapper = styled.div<Pick<Props, "bgcolor">>`
    background-color: ${props => props.bgcolor};
`;

const Header = (props: Props) => {
    return (
        <HeaderWrapper {...{
            bgcolor: props.bgcolor
        }}>
            {
                props.image? <p>success</p> : <p>fail</p>
            }
        </HeaderWrapper>
    )
}

export default Header