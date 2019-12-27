import React from "react";

const initialState = {
  parkID: "", // 停车场ID
  parkName: "", // 停车场名称
  province: "", // 省
  city: "", // 市
  principal: "", // 负责人
  state: "", // 状态（全部，开启，关闭）all/open/off
  carportID: "", // 车库编号
  carportName: "", // 车库名称
  carportKind: "", // 车库类型（全部，平面车库，立体车库）all/planeCarport/stereCarport
  ruleID: "", // 计费规则编号
  ruleName: "", // 计费规则名称
  userKind: "", // 用户类型（全部/临时车主/包天卡车主/时长卡车主/次卡车主）all/temporaryUser/dayUser/timeUser/cardUser
  billingMode: "", // 计费方式（全部/时长计费/时段计费/按次计费）all/timeLong/timeSection/number
  freeTime: "", // 免费时长
  cardID: "", // 车位卡编号
  cardName: "", // 车位卡名称
  cardKind: "", // 车位卡类型（全部/包天卡/时长卡/次卡）all/day/time/number
  equID: "", // 设备编号
  equName: "", // 设备名称
  equIP: "", // 设备序列号
  addMan: "", // 添加人
  park: "" // 停车场（全部/中原福塔停车场/国际陆港停车场）all/centralPark/internationPark
};


export default (state = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
}
