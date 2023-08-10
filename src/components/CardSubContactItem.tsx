import React, { ReactNode } from 'react'
import { styled } from 'styled-components';

//Types
type Props = {
    content: string,
    icon: ReactNode,
}

//Style
const ContactItem = styled.li`
    
`

const Container = styled.div`
    display: flex;
    align-items: center;
`

const CardSubContactItem = (props: Props) => {
    return (
        <ContactItem>
            <Container>
                {props.icon}
                {props.content}
            </Container>
        </ContactItem>
    )
}

export default CardSubContactItem;