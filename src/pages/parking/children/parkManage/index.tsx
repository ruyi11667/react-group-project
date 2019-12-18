import React from 'react'
import Search from '@pages/common/search'

const ParkMana: React.FC<{}> = function RarkMana() {
  return (
    <div>
      <h1>停车场管理</h1>
      <Search type="park"/>
    </div>
  )
}

export default ParkMana;