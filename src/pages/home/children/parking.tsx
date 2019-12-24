import React from 'react'
import {useParams} from 'react-router-dom'
const Parking:React.FC<{}> = function Parking(props) {
  const params = useParams();
  console.log(params);
  let value = Object.values(params);
  return (
    <div>{value}页面</div>
  )
}

export default Parking;