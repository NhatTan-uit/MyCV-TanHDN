import React from 'react'

//Types
interface imageProps {
    image: any,
}

const SelfImage: React.FC<imageProps> = ({
    image
}) => {
    return (
        <div>SelfImage</div>
    )
}

export default SelfImage