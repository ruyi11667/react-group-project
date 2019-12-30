import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log('a', value, option);
  
};

const Rule: React.FC<{}> = function Rule() {

  const ruleID = useSelector(state => (state as any).getIn(['parkingSearch', 'ruleID']));
  const ruleName = useSelector(state => (state as any).getIn(['parkingSearch', 'ruleName']));
  const userKind = useSelector(state => (state as any).getIn(['parkingSearch', 'userKind']));
  const billingMode = useSelector(state => (state as any).getIn(['parkingSearch', 'billingMode']));
  const freeTime = useSelector(state => (state as any).getIn(['parkingSearch', 'freeTime']));
  const dispatch = useDispatch();

  return (
    <div style={{flex: 5}}>
      <div className="ruleIDBox">
        <span>计费规则编号：</span>
        <input type="text" name="ruleID" className="ruleID" id="ruleID" />
      </div>
      <div className="ruleNameBox">
        <span>计费规则名称：</span>
        <input type="text" name="ruleName" className="ruleName" id="ruleName" />
      </div>
      <div className="userKindBox">
        <span>用户类型：</span>
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={handleChange}
          className="userKind"
          id="userKind"
        >
          <Option value="all">全部</Option>
          <Option value="temporaryUser">临时车主</Option>
          <Option value="dayUser">包天卡车主</Option>
          <Option value="timeUser">时长卡车主</Option>
          <Option value="cardUser">次卡车主</Option>
        </Select>
      </div>
      <div className="billingModeBox">
        <span>计费方式：</span>
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={handleChange}
          className="billingMode"
          id="billingMode"
        >
          <Option value="all">全部</Option>
          <Option value="timeLong">时长计费</Option>
          <Option value="timeSection">时段计费</Option>
          <Option value="number">按次计费</Option>
        </Select>
      </div>
      <div className="freeTimeBox">
        <span>免费时长：</span>
        <input type="text" name="freeTime" className="freeTime" id="freeTime" />
      </div>
    </div>
  );
};


export default Rule;
