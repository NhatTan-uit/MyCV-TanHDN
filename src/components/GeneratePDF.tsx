import React, { MutableRefObject } from 'react'
import { useReactToPrint } from 'react-to-print';

//Types
interface pdfValue {
    divref: MutableRefObject<HTMLDivElement | null>;
}

const GeneratePDF: React.FC<pdfValue> = ({
    divref,
}) => {
    const handlePrint = useReactToPrint({
        content: () => divref.current,
        documentTitle: 'cv-tanhdn',
    });
    
    return (
        <button onClick={handlePrint}>To PDF</button>
    )
}

export default GeneratePDF