import React from 'react';
import { styled } from 'styled-components'; //Types

interface CardInfo {
  title: String;
  listItem?: String[];
  listIcon?: [];
  content?: String;
  cardHeight: string;
  cardWidth: string;
  backgroundColor: string;
} //Style

const CardWrapper = styled.div<Pick<CardInfo, "cardHeight" | "cardWidth" | "backgroundColor">>`
    background-color: ${props => props.backgroundColor};
    height: ${props => props.cardHeight};
    width: ${props => props.cardWidth};
`;

const CardSub: React.FC<CardInfo> = ({
  title,
  listItem,
  listIcon,
  content,
  cardHeight,
  cardWidth,
  backgroundColor
}) => {
  return <CardWrapper {...{
    cardHeight,
    cardWidth,
    backgroundColor
  }}>
            <h1>{title}</h1>
            {listItem && listItem.length > 0 ? <ul>
                        {listItem.map((item, key) => {
        return <li key={key}>{item}</li>;
      })}
                    </ul> : null}
            {listIcon && listIcon.length > 0 ? <ul>
                        {listIcon.map((item, key) => {
        return <li key={key}>{item}</li>;
      })}
                    </ul> : null}
            {content ? <p>{content}</p> : null}
        </CardWrapper>;
};

export default CardSub;