import React, { ReactNode } from 'react';
import { css, styled } from 'styled-components';
import { CVScheme } from '../api';
import CardListScheme from './CardListScheme';

//Types
type Props = {
  content: string;
  islink?: boolean;
  linktitle?: string;
  icon?: ReactNode;
  isbold?: boolean;
  isinline?: boolean;
  timescheme?: CVScheme;
  textcolor: string;
};

//Style
const ContactItem = styled.li<Pick<Props, "textcolor" | "isinline">>`
  padding-bottom: 4%;
  font-size: 15.5px;
  letter-spacing: 0.5px;
  
  color: ${props => props.textcolor};

  ${props => props.isinline &&
    css`
      display: inline-block;
      margin-right: 5px;
    `}
`;

const Container = styled.div<Pick<Props, "isbold">>`
  display: flex;
  align-items: center;
  line-height: 1.5;

  ${props => (props.isbold &&
    css`
      font-weight: bold;
    `)}
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
    textcolor: props.textcolor,
    isbold: props.isbold,
    isinline: props.isinline
  }}>
    {
      props.timescheme ?
        <CardListScheme content={props.content} scheme={props.timescheme} />
        :
        !props.islink ?
          props.icon ?
            <Container {...{
              isbold: props.isbold
            }}>
              <Item>{props.icon}</Item>
              {props.content}
            </Container>
            :
            <Container {...{
              isbold: props.isbold
            }}>
              {props.content}
            </Container>
          :
          props.linktitle ?
            props.icon ?
              <Container {...{
                isbold: props.isbold
              }}>
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
              <Container {...{
                isbold: props.isbold
              }}>
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