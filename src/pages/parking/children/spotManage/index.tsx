import React from 'react'
import Search from '@pages/common/search'

const SpotMana: React.FC<{}> = function SpotMana() {
  return (
    <div>
      <h1>停车位管理</h1>
      <Search type="spot"/>
    </div>
  )
}

export default SpotMana;