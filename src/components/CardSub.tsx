import React from 'react'
import { styled } from 'styled-components';
import { CVDataBody } from '../api';

//components
import CardListItem from './CardListItem';

//mUI icons
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
  textcolor: string;
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
  height: 25px;
`

const CardSpacerEnd = styled.div`
  height: 10px;
`

const CardList = styled.ul`
  list-style-position: inside;
  list-style-type: none;
  margin: 0 20px;
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
            <CardListItem
              content={props.data.listcontact.tel}
              icon={<PhoneIcon />}
              textcolor={props.textcolor}
            />
            <CardListItem
              content={props.data.listcontact.gmail}
              icon={<EmailIcon />}
              textcolor={props.textcolor}
            />
            <CardListItem
              linktitle={"Kuro Huynh"}
              islink={true}
              content={props.data.listcontact.facebook}
              icon={<FacebookIcon />}
              textcolor={props.textcolor}
            />
          </CardList> : null
      }
      {
        props.data && props.data.listitem && props.data.listitem.length > 0 ?
          <CardList>
            {
              props.data.listitem.map((item, key) => {
                return <CardListItem
                  key={key}
                  content={item.content}
                  textcolor={props.textcolor}
                />;
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
      <CardSpacerEnd />
    </CardWrapper >
  )
}

export default CardSub