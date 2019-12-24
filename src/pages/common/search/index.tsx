import React from "react";
import { Button } from 'antd';
import './style.scss'

import kindDom from "./kindDom";

const Search: React.FC<{ type: String }> = function Search({ type }) {
  const checkDom = () => {
    switch (type) {
      case "park":
        return (
          <div>
            {kindDom.parkIdDom}
            {kindDom.parkNameDom}
            {kindDom.areaDom}
            {kindDom.principalDom}
            {kindDom.stateDom}
          </div>
        );
      case "spot":
        return (
          <div>
            {kindDom.parkIdDom}
            {kindDom.parkNameDom}
            {kindDom.carportIDDom}
            {kindDom.carportNameDom}
            {kindDom.carportKindDom}
            {kindDom.stateDom}
          </div>
        );
      case "billing":
        return (
          <div>
            {kindDom.ruleIDDom}
            {kindDom.ruleNameDom}
            {kindDom.userKindDom}
            {kindDom.billingModeDom}
            {kindDom.freeTimeDom}
          </div>
        );
      case "card":
        return (
          <div>
            {kindDom.parkIdDom}
            {kindDom.parkNameDom}
            {kindDom.cardIDDom}
            {kindDom.cardNameDom}
            {kindDom.cardKindDom}
            {kindDom.stateDom}
          </div>
        );
      case "equipment":
        return (
          <div>
            {kindDom.equIDDom}
            {kindDom.equNameDom}
            {kindDom.equIPDom}
            {kindDom.addManDom}
            {kindDom.parkDom}
            {kindDom.stateDom}
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <section className="SearchBox">
      <div className="frameBox">{checkDom()}</div>
      <Button type="primary">查询</Button>
      <Button type="primary">重置</Button>
      <Button type="danger">新增</Button>
    </section>
  );
};

export default Search;
