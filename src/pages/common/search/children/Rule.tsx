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

  // 处理输入
  const handleInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    switch (ev.target.className) {
      case 'ruleID': 
        dispatch({type: 'pushRuleID', ruleID: ev.target.value});
        break;
      case 'ruleName': {
        dispatch({type: 'pushRuleName', ruleName: ev.target.value});
        break;
      }
      case 'freeTime': {
        dispatch({type: 'pushFreeTime', freeTime: ev.target.value});
        break;
      }  
      default:
        break;
    }
  };

  // 处理选择器
  const handleChange = (value: string, option: any) => {
    switch (option.props.title) {
      case 'userKind':
        dispatch({type: 'pushUserKind', userKind: value})
        break;
      case 'billingMode':
        dispatch({type: 'pushBillingMode', billingMode: value})
        break;
      default:
        break;
    }
    
  };

  return (
    <div style={{flex: 5}}>
      <div className="ruleIDBox">
        <span>计费规则编号：</span>
        <input onChange={handleInput} type="text" name="ruleID" value={ruleID} className="ruleID" id="ruleID" />
      </div>
      <div className="ruleNameBox">
        <span>计费规则名称：</span>
        <input onChange={handleInput} type="text" name="ruleName" value={ruleName} className="ruleName" id="ruleName" />
      </div>
      <div className="userKindBox">
        <span>用户类型：</span>
        <Select
          defaultValue="all"
          value={userKind}
          style={{ width: 120 }}
          onChange={handleChange}
          className="userKind"
          id="userKind"
        >
          <Option title="userKind" value="all">全部</Option>
          <Option title="userKind" value="temporaryUser">临时车主</Option>
          <Option title="userKind" value="dayUser">包天卡车主</Option>
          <Option title="userKind" value="timeUser">时长卡车主</Option>
          <Option title="userKind" value="cardUser">次卡车主</Option>
        </Select>
      </div>
      <div className="billingModeBox">
        <span>计费方式：</span>
        <Select
          defaultValue="all"
          value={billingMode}
          style={{ width: 120 }}
          onChange={handleChange}
          className="billingMode"
          id="billingMode"
        >
          <Option title="billingMode" value="all">全部</Option>
          <Option title="billingMode" value="timeLong">时长计费</Option>
          <Option title="billingMode" value="timeSection">时段计费</Option>
          <Option title="billingMode" value="number">按次计费</Option>
        </Select>
      </div>
      <div className="freeTimeBox">
        <span>免费时长：</span>
        <input onChange={handleInput} type="text" name="freeTime" value={freeTime} className="freeTime" id="freeTime" />
      </div>
    </div>
  );
};


export default Rule;
