import immutable from 'immutable';


const initialState = {
  parkId: "", // 停车场ID
  parkName: "", // 停车场名称
  province: "0", // 省
  city: "0", // 市
  county: "0", // 区
  principal: "", // 负责人
  state: "all", // 状态（全部，开启，关闭）all/open/off
  carportID: "", // 车库编号
  carportName: "", // 车库名称
  carportKind: "all", // 车库类型（全部，平面车库，立体车库）all/planeCarport/stereCarport
  ruleID: "", // 计费规则编号
  ruleName: "", // 计费规则名称
  userKind: "all", // 用户类型（全部/临时车主/包天卡车主/时长卡车主/次卡车主）all/temporaryUser/dayUser/timeUser/cardUser
  billingMode: "all", // 计费方式（全部/时长计费/时段计费/按次计费）all/timeLong/timeSection/number
  freeTime: "", // 免费时长
  cardID: "", // 车位卡编号
  cardName: "", // 车位卡名称
  cardKind: "all", // 车位卡类型（全部/包天卡/时长卡/次卡）all/day/time/number
  equID: "", // 设备编号
  equName: "", // 设备名称
  equIP: "", // 设备序列号
  addMan: "", // 添加人
  park: "all" // 停车场（全部/中原福塔停车场/国际陆港停车场）all/centralPark/internationPark
};

const immutableState = immutable.fromJS(initialState)

export default (state: any = immutableState, action: any) => {
  switch (action.type) {
    case "pushProvince" : {
      return state.set('province', action.province)
    }
    case "pushCity" : {
      return state.set('city', action.city)
    }
    case "pushCounty": {
      return state.set('county', action.county)
    }
    case "pushParkId": {
      return state.set('parkId', action. parkId)
    }
    case "pushParkName": {
      return state.set('parkName', action.parkName)
    }
    case "pushCardID":{
      return state.set('cardID', action.cardID)
    }
    case "pushCardName": {
      return state.set('cardName', action.cardName)
    }
    case "pushCardKind": {
      return state.set('cardKind', action.cardKind)
    }
    case "pushCarportID": {
      return state.set('carportID', action.carportID)
    }
    case "pushCarportName": {
      return state.set('carportName', action.carportName)
    }
    case "pushCarportKind": {
      return state.set('carportKind', action.carportKind)
    }
    case "pushPrincipal": {
      return state.set('principal', action.principal)
    }
    case "pushEquID": {
      return state.set('equID', action.equID)
    }
    case "pushEquName": {
      return state.set('equName', action.equName)
    }
    case "pushEquIP": {
      return state.set('equIP', action.equIP)
    }
    case "pushAddMan": {
      return state.set('addMan', action.addMan)
    }
    case "pushPark": {
      return state.set('park', action.park)
    }
    case "pushRuleID": {
      return state.set('ruleID', action.ruleID)
    }
    case "pushRuleName": {
      return state.set('ruleName', action.ruleName)
    }
    case "pushFreeTime": {
      return state.set('freeTime', action.freeTime)
    }
    case "pushUserKind": {
      return state.set('userKind', action.userKind)
    }
    case "pushBillingMode": {
      return state.set('billingMode', action.billingMode)
    }
    case "pushState": {
      return state.set('state', action.state)
    }
    default:
      return state;
  }
}
