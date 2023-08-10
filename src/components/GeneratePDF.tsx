import React, { MutableRefObject } from 'react'
import { useReactToPrint } from 'react-to-print';
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
    const handlePrint = useReactToPrint({
        content: () => divref.current,
        documentTitle: 'cv-tanhdn',
    });
    
    return (
        <PrintButton onClick={handlePrint}>To PDF</PrintButton>
    )
}

export default GeneratePDF