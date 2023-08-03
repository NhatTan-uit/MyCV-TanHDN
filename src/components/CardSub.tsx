import React from 'react'
import { styled } from 'styled-components';
import { CVDataBody } from '../api';

//Type
type Props = {
  listitem?: [];
  listicon?: [];
  content?: String;
  bgcolor: string;
  data?: CVDataBody;
}

//Style
const CardWrapper = styled.div<Pick<Props, "bgcolor">>`
    background-color: ${props => props.bgcolor};
    width: 100%;
`;

const CardSub = (props: Props) => {
  return (
    <CardWrapper {...{
      bgcolor: props.bgcolor
    }}>
      {
        props.data? <h1>{props.data.title}</h1>: <p>nodata</p>
      }
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