import React from 'react'
import { styled } from 'styled-components';

//Type
type Props = {
  title: String;
  listitem?: [];
  listicon?: [];
  content?: String;
  bgcolor: string;
}

//Style
const CardWrapper = styled.div<Pick<Props, "bgcolor">>`
    background-color: ${props => props.bgcolor};
`;

const CardSub = (props: Props) => {
  return (
    <CardWrapper {...{
      bgcolor: props.bgcolor
    }}>
      <h1>{props.title}</h1>
      {
        props.listitem && props.listitem.length > 0 ?
          <ul>
            {
              props.listitem.map((item, key) => {
                return <li key={key}>{item}</li>;
              })
            }
          </ul> : null
      }
      {
        props.listicon && props.listicon.length > 0 ?
          <ul>
            {
              props.listicon.map((item, key) => {
                return <li key={key}>{item}</li>;
              })
            }
          </ul> : null
      }
      {
        props.content ? <p>{props.content}</p> : null
      }
    </CardWrapper>
  )
}

export default CardSub