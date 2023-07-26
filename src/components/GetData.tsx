import React from 'react'

//Types
interface rawDataExample {
    data: JSON
}

const GetData: React.FC<rawDataExample> = ({
    data
}) => {
  return (
    <div>GetData</div>
  )
}

export default GetData