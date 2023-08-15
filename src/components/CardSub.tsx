import React from 'react'
import { css, styled } from 'styled-components';
import { CVDataBody } from '../api';

//components
import CardListItem from './CardListItem';

//mUI icons
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

//Type
type Props = {
  content?: String;
  bgcolor: string;
  titlecolor: string;
  textcolor: string;
  data?: CVDataBody;
  ismainpart?: boolean;
  islastitem?: boolean;
  eliminatefoot?: boolean;
}

//Style
const CardWrapper = styled.div<Pick<Props, "bgcolor">>`
    background-color: ${props => props.bgcolor};
    width: 100%;
`;

const CardHeader = styled.h1<Pick<Props, "titlecolor" | "ismainpart">>`
    color: ${props => props.titlecolor};

    ${props => (props.ismainpart ?
    css`
      margin-left: 30px;
    `
    :
    css`
      text-align: center;
    `)}
`;

const CardSpacer = styled.div`
  height: 15px;
`

const CardSpacerEnd = styled.div`
  height: 15px;
`

const CardList = styled.ul<Pick<Props, "ismainpart">>`
  list-style-position: inside;
  list-style-type: none;
  padding: 0;

  ${props => (props.ismainpart ?
    css`
      margin: 0 30px;
    `
    :
    css`
      margin: 0 20px;
    `)}
`

const CardSub = (props: Props) => {
  return (
    <CardWrapper {...{
      bgcolor: props.bgcolor
    }}>
      {
        !props.islastitem ?
          <CardSpacer />
          : null
      }
      {
        props.data ?
          <CardHeader {...{
            titlecolor: props.titlecolor,
            ismainpart: props.ismainpart
          }}>
            {props.data.title}
          </CardHeader>
          :
          <CardHeader {...{
            titlecolor: props.titlecolor,
            ismainpart: props.ismainpart
          }}>
            nodata
          </CardHeader>
      }
      <CardSpacer />
      {
        props.data && props.data.listcontact ?
          <CardList {...{
            ismainpart: props.ismainpart
          }}>
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
              content={props.data.listcontact.github}
              icon={<GitHubIcon />}
              textcolor={props.textcolor}
              islink={true}
              linktitle={"NhatTan-uit"}
            />
          </CardList> : null
      }
      {
        props.data && props.data.listitem && props.data.listitem.length > 0 ?
          <CardList {...{
            ismainpart: props.ismainpart
          }}>
            {
              props.data.listitem.map((item, key) => {
                return <CardListItem
                  key={key}
                  content={item.content}
                  textcolor={props.textcolor}
                  isbold={item.isbold}
                  isinline={item.isinline}
                  timescheme={item.timescheme}
                />;
              })
            }
          </CardList> : null
      }
      {
        !props.eliminatefoot ?
          <CardSpacerEnd />
          : null
      }
    </CardWrapper >
  )
}

export default CardSub