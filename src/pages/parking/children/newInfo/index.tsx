import React, { PropsWithChildren } from 'react'

const NewInfo: React.FC<PropsWithChildren<any>> = function NewInfo(props) {
  return (
    <div>新增信息{props.match.params.type}</div>
  )
}

export default NewInfo;