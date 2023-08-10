import React from 'react'
import { styled } from 'styled-components';
import { CVDataBody } from '../api';

//components
import CardSubContactItem from './CardSubContactItem';
import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

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

const CardList = styled.ul`
  list-style-position: inside;
  list-style-type: none;
  margin: 0;
  padding: 0;
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
        props.data && props.data.listcontact ?
          <CardList>
            <CardSubContactItem content={props.data.listcontact.tel} icon={<PhoneIcon />} />
            <CardSubContactItem content={props.data.listcontact.gmail} icon={<EmailIcon />} />
            <CardSubContactItem content={props.data.listcontact.facebook} icon={<FacebookIcon />} />
          </CardList> : null
      }
      {
        props.data && props.data.listitem && props.data.listitem.length > 0 ?
          <CardList>
            {
              props.data.listitem.map((item, key) => {
                return <li key={key}>{item.content}</li>;
              })
            }
          </CardList> : null
      }
      {
        props.data && props.data.listicon && props.data.listicon.length > 0 ?
          <CardList>
            {
              props.data.listicon.map((item, key) => {
                return <li key={key}>{item.content}</li>;
              })
            }
          </CardList> : null
      }
      <CardSpacer />
      <CardSpacer />
    </CardWrapper >
  )
}

export default CardSub