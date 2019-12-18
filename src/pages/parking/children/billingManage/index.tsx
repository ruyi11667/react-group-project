import React from 'react'
import Search from '@pages/common/search'

const BillingMana: React.FC<{}> = function BillingMana() {
  return (
    <div>
      <h1>计费规则管理</h1>
      <Search type="billing"/>
    </div>
  )
}

export default BillingMana;