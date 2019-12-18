import React from 'react'
import Search from '@pages/common/search'

const EquipmentMana: React.FC<{}> = function EquipmentMana() {
  return (
    <div>
      <h1>设备管理</h1>
      <Search type="equipment"/>
    </div>
  )
}

export default EquipmentMana;