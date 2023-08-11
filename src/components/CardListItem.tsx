import React, { ReactNode } from 'react';
import { styled } from 'styled-components';

//Types
type Props = {
  content: string;
  islink?: boolean;
  linktitle?: string;
  icon?: ReactNode;
  textcolor: string;
};

//Style
const ContactItem = styled.li<Pick<Props, "textcolor">>`
  padding-bottom: 7%;
  font-size: 16.5px;
  letter-spacing: 0.5px;
  color: ${props => props.textcolor}
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  line-height: 1.6;
`;

const Item = styled.div`
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FacebookLink = styled.a<Pick<Props, "textcolor">>`
  text-decoration: none;
  color: ${props => props.textcolor}
`;

const CardListItem = (props: Props) => {
  return <ContactItem {...{
    textcolor: props.textcolor
  }}>
    {
      !props.islink ?
        props.icon ?
          <Container>
            <Item>{props.icon}</Item>
            {props.content}
          </Container>
          :
          <Container>
            {props.content}
          </Container>
        :
        props.linktitle ?
          props.icon ?
            <Container>
              <Item>{props.icon}</Item>
              <FacebookLink
                {...{
                  textcolor: props.textcolor
                }}
                href={props.content}
              >
                {props.linktitle}
              </FacebookLink>
            </Container>
            :
            <Container>
              <FacebookLink
                {...{
                  textcolor: props.textcolor
                }}
                href={props.content}
              >
                {props.linktitle}
              </FacebookLink>
            </Container>
          :
          null
    }
  </ContactItem>;
};

export default CardListItem;