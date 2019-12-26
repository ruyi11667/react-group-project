import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log('a', value, option);
  
};

const Rule: React.FC<{}> = function Rule() {
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

const mapStateToProps = (state: { parkingSearch: { ruleID: any; ruleName: any; userKind: any; billingMode: any; freeTime: any; }; }) => {
  return {
    ruleID: state.parkingSearch.ruleID, // 计费规则编号
    ruleName: state.parkingSearch.ruleName, // 计费规则名称
    userKind: state.parkingSearch.userKind, // 用户类型（全部/临时车主/包天卡车主/时长卡车主/次卡车主）all/temporaryUser/dayUser/timeUser/cardUser
    billingMode: state.parkingSearch.billingMode, // 计费方式（全部/时长计费/时段计费/按次计费）all/timeLong/timeSection/number
    freeTime: state.parkingSearch.freeTime // 免费时长
  }
}

const mapDispatchToProps = (state: any) => ({})


export default connect(mapStateToProps, mapDispatchToProps)(Rule);
