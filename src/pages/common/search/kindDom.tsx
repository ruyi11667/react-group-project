import React from "react";
import address from "./address";
import { Select } from "antd";
const { Option } = Select;

const handleChange = () => {};

const children = Object.entries(address.province_list).map(([key, value]) => {
  return (
    <Option key={key} value={key}>
      {value}
    </Option>
  );
});

// 停车场ID
const parkIdDom = (
  <div className="parkIdBox">
    <span>停车场ID：</span>
    <input type="text" name="parkID" className="parkID" id="parkID" />
  </div>
);
// 停车场名称
const parkNameDom = (
  <div className="parkNameBox">
    <span>停车场名称：</span>
    <input type="text" name="parkName" className="parkName" id="parkName" />
  </div>
);
// 区域
const areaDom = (
  <div className="areaBox">
    <span>区域：</span>
    <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={handleChange}
      className="province"
      id="province"
    >
      <Option value="0">请选择省</Option>
      {children}
    </Select>
    <Select
      defaultValue="0"
      style={{ width: 120 }}
      onChange={handleChange}
      className="city"
      id="city"
    >
      <Option value="0">请选择市</Option>
      {children}
    </Select>
  </div>
);
// 负责人
const principalDom = (
  <div className="principalBox">
    <span>负责人</span>
    <input
      type="text"
      name="principalBox"
      className="principalBox"
      id="principalBox"
    />
  </div>
);
// 状态
const stateDom = (
  <div className="stateBox">
    <span>状态：</span>
    <Select
      defaultValue="all"
      style={{ width: 120 }}
      onChange={handleChange}
      className="state"
      id="state"
    >
      <Option value="all">全部</Option>
      <Option value="open">开启</Option>
      <Option value="off">关闭</Option>
    </Select>
  </div>
);
// 车库编号
const carportIDDom = (
  <div className="carportIDBox">
    <span>车库编号：</span>
    <input type="text" name="carportID" className="carportID" id="carportID" />
  </div>
);
// 车库名称
const carportNameDom = (
  <div className="carportNameBox">
    <span>车库编号：</span>
    <input
      type="text"
      name="carportName"
      className="carportName"
      id="carportName"
    />
  </div>
);
// 车库类型
const carportKindDom = (
  <div className="carportKindBox">
    <span>车库类型：</span>
    <Select
      defaultValue="all"
      style={{ width: 120 }}
      onChange={handleChange}
      className="carportKind"
      id="carportKind"
    >
      <Option value="all">全部</Option>
      <Option value="planeCarport">平面车库</Option>
      <Option value="stereCarport">立体车库</Option>
    </Select>
  </div>
);
// 计费规则编号
const ruleIDDom = (
  <div className="ruleIDBox">
    <span>停车场名称：</span>
    <input type="text" name="ruleID" className="ruleID" id="ruleID" />
  </div>
);
// 计费规则名称
const ruleNameDom = (
  <div className="ruleNameBox">
    <span>停车场名称：</span>
    <input type="text" name="ruleName" className="ruleName" id="ruleName" />
  </div>
);
// 用户类型
const userKindDom = (
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
);
// 计费方式
const billingModeDom = (
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
);
// 免费时长
const freeTimeDom = (
  <div className="freeTimeBox">
    <span>免费时长：</span>
    <input type="text" name="freeTime" className="freeTime" id="freeTime" />
  </div>
);
// 车位卡编号
const cardIDDom = (
  <div className="cardIDBox">
    <span>车位卡编号：</span>
    <input type="text" name="cardID" className="cardID" id="cardID" />
  </div>
);
// 车位卡名称
const cardNameDom = (
  <div className="cardNameBox">
    <span>车位卡名称：</span>
    <input type="text" name="cardName" className="cardName" id="cardName" />
  </div>
);
// 车位卡类型
const cardKindDom = (
  <div className="cardKindBox">
    <span>车位卡类型：</span>
    <Select
      defaultValue="all"
      style={{ width: 120 }}
      onChange={handleChange}
      className="cardKind"
      id="cardKind"
    >
      <Option value="all">全部</Option>
      <Option value="day">包天卡</Option>
      <Option value="time">时长卡</Option>
      <Option value="number">次卡</Option>
    </Select>
  </div>
);
// 设备编号
const equIDDom = (
  <div className="equIDBox">
    <span>设备编号：</span>
    <input type="text" name="equID" className="equID" id="equID" />
  </div>
);
// 设备名称
const equNameDom = (
  <div className="equNameBox">
    <span>设备名称：</span>
    <input type="text" name="equName" className="equName" id="equName" />
  </div>
);
// IP
const equIPDom = (
  <div className="equIPBox">
    <span>IP：</span>
    <input type="text" name="equIP" className="equIP" id="equIP" />
  </div>
);
// 添加人
const addManDom = (
  <div className="addManBox">
    <span>添加人：</span>
    <input type="text" name="addMan" className="addMan" id="addMan" />
  </div>
);
// 停车场
const parkDom = (
  <div className="parkBox">
    <span>车位卡类型：</span>
    <Select
      defaultValue="all"
      style={{ width: 120 }}
      onChange={handleChange}
      className="park"
      id="park"
    >
      <Option value="all">全部</Option>
      <Option value="1">国际</Option>
      <Option value="2">中原</Option>
      <Option value="3">停车场</Option>
    </Select>
  </div>
);

export default {
  parkIdDom,
  parkNameDom,
  areaDom,
  principalDom,
  stateDom,
  carportIDDom,
  carportNameDom,
  carportKindDom,
  ruleIDDom,
  ruleNameDom,
  userKindDom,
  billingModeDom,
  freeTimeDom,
  cardIDDom,
  cardNameDom,
  cardKindDom,
  equIDDom,
  equNameDom,
  equIPDom,
  addManDom,
  parkDom
};
