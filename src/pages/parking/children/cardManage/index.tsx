import React from 'react'
import Search from '@pages/common/search'

const CardMana: React.FC<{}> = function CardMana() {
  return (
    <div>
      <h1>车位卡管理</h1>
      <Search type="card"/>
    </div>
  )
}

export default CardMana;