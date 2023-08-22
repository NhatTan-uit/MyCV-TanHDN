import React, { MutableRefObject } from 'react'
import ReactToPrint from 'react-to-print';
import { styled } from 'styled-components';

//Types
interface pdfValue {
    divref: MutableRefObject<HTMLDivElement | null>;
}

//Styles
const PrintButton = styled.button`
    padding: 15px;
`

const GeneratePDF: React.FC<pdfValue> = ({
    divref,
}) => {
    return (
        <ReactToPrint 
            trigger={() => {
                return <PrintButton />
            }}
            content={() => divref.current}
            documentTitle={"tan-hdn-cv"}
        />
    )
}

export default GeneratePDF