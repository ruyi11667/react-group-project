import React from "react";
import { Button } from "antd";
import "./style.scss";
import Park from './children/park'
import Area from './children/Area'
import StateSele from './children/state'
import Carport from './children/Carport'
import Rule from './children/Rule'
import Card from './children/card'
import Equ from './children/Equ'

import kindDom from "./kindDom";

const Search: React.FC<{ type: String }> = function Search({ type }) {
  const checkDom = () => {
    switch (type) {
      case "park":
        return (
          <div>
            <Park/>
            <Area/>
            <StateSele/>
          </div>
        );
      case "spot":
        return (
          <div>
            <Park/>
            <Carport/>
            <StateSele/>
          </div>
        );
      case "billing":
        return (
          <Rule/>
        );
      case "card":
        return (
          <div>
            <Park/>
            <Card/>
            <StateSele/>
          </div>
        );
      case "equipment":
        return (
          <div>
            <Equ/>
            <StateSele/>
          </div>
        );
      default:
        return "";
    }
  };

  return (
    <section className="SearchBox">
      <div className="frameBox">
        {checkDom()}
      </div>
      <div className="searchBtn">
        <Button type="primary">查询</Button>
        <Button type="primary">重置</Button>
        <Button type="danger">新增</Button>
      </div>
    </section>
  );
};

export default Search;
