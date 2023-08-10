import React from 'react'
import { styled } from 'styled-components';
import { CVDataBody } from '../api';

//Type
type Props = {
  listitem?: [];
  listicon?: [];
  content?: String;
  bgcolor: string;
  titlecolor: string;
  data?: CVDataBody;
}

//Style
const CardWrapper = styled.div<Pick<Props, "bgcolor">>`
    background-color: ${props => props.bgcolor};
    width: 100%;
`;

const CardHeader = styled.h1<Pick<Props, "titlecolor">>`
    text-align: center;
    color: ${props => props.titlecolor};
`;

const CardSpacer = styled.div`
  height: 30px;
`

const CardSub = (props: Props) => {
  return (
    <CardWrapper {...{
      bgcolor: props.bgcolor
    }}>
      <CardSpacer />
      {
        props.data ?
          <CardHeader {...{
            titlecolor: props.titlecolor
          }}>
            {props.data.title}
          </CardHeader>
          :
          <CardHeader {...{
            titlecolor: props.titlecolor
          }}>
            nodata
          </CardHeader>
      }
      <CardSpacer />
      {
        props.data && props.data.listitem && props.data.listitem.length > 0 ?
          <ul>
            {
              props.data.listitem.map((item, key) => {
                return <li key={key}>{item.content}</li>;
              })
            }
          </ul> : null
      }
      {
        props.data && props.data.listicon && props.data.listicon.length > 0 ?
          <ul>
            {
              props.data.listicon.map((item, key) => {
                return <li key={key}>{item.content}</li>;
              })
            }
          </ul> : null
      }
      <CardSpacer />
      <CardSpacer />
    </CardWrapper >
  )
}

export default CardSub