import React, { PropsWithChildren } from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import "./style.scss";
import Park from "./children/park";
import Area from "./children/Area";
import StateSele from "./children/state";
import Carport from "./children/Carport";
import Rule from "./children/Rule";
import Card from "./children/card";
import Equ from "./children/Equ";

const Search: React.FC<PropsWithChildren<any>> = function Search(props) {
  const checkDom = () => {
    switch (props.type) {
      case "park":
        return (
          <div>
            <Park />
            <Area />
            <StateSele />
          </div>
        );
      case "spot":
        return (
          <div>
            <Park />
            <Carport />
            <StateSele />
          </div>
        );
      case "billing":
        return <Rule />;
      case "card":
        return (
          <div>
            <Park />
            <Card />
            <StateSele />
          </div>
        );
      case "equipment":
        return (
          <div>
            <Equ />
            <StateSele />
          </div>
        );
      default:
        return "";
    }
  };

  const findBtnAct = (ev: React.MouseEvent<HTMLButtonElement>) => {
    switch (props.type) {
      case "park":
        console.log(props.parkId, props.parkName, props.province, props.city, props.county, props.principal, props.state)
        break ;
      case "spot":
        console.log(props.parkId, props.parkName, props.carportID, props.carportName, props.carportKind, props.state)
        break ;
      case "billing":
        console.log(props.ruleID, props.ruleName, props.userKind, props.billingMode, props.freeTime)
        break ;
      case "card":
        console.log(props.parkId, props.parkName, props.cardID, props.cardName, props.cardKind, props.state)
        break ;
      case "equipment":
        console.log(props.equID, props.equName, props.equIP, props.addMan, props.park, props.state)
        break ;
      default:
        break ;
    }
  };

  return (
    <section className="SearchBox">
      <div className="frameBox">{checkDom()}</div>
      <div className="searchBtn">
        <Button type="primary" onClick={findBtnAct}>
          查询
        </Button>
        <Button type="primary">重置</Button>
        <Button type="danger">新增</Button>
      </div>
    </section>
  );
};

const mapStateToProps = (state: {
  parkingSearch: {
    parkId: any;
    parkName: any;
    province: any;
    city: any;
    county: any;
    principal: any;
    state: any;
    carportID: any;
    carportName: any;
    carportKind: any;
    ruleID: any;
    ruleName: any;
    userKind: any;
    billingMode: any;
    freeTime: any;
    cardID: any;
    cardName: any;
    cardKind: any;
    equID: any;
    equName: any;
    equIP: any;
    addMan: any;
    park: any;
  };
}) => {
  return {
    parkId: state.parkingSearch.parkId, // 停车场ID
    parkName: state.parkingSearch.parkName, // 停车场名称
    province: state.parkingSearch.province, // 省
    city: state.parkingSearch.city, // 市
    county: state.parkingSearch.county, // 区
    principal: state.parkingSearch.principal, // 负责人
    state: state.parkingSearch.state, // 状态（全部，开启，关闭）all/open/off
    carportID: state.parkingSearch.carportID, // 车库编号
    carportName: state.parkingSearch.carportName, // 车库名称
    carportKind: state.parkingSearch.carportKind, // 车库类型（全部，平面车库，立体车库）all/planeCarport/stereCarport
    ruleID: state.parkingSearch.ruleID, // 计费规则编号
    ruleName: state.parkingSearch.ruleName, // 计费规则名称
    userKind: state.parkingSearch.userKind, // 用户类型（全部/临时车主/包天卡车主/时长卡车主/次卡车主）all/temporaryUser/dayUser/timeUser/cardUser
    billingMode: state.parkingSearch.billingMode, // 计费方式（全部/时长计费/时段计费/按次计费）all/timeLong/timeSection/number
    freeTime: state.parkingSearch.freeTime, // 免费时长
    cardID: state.parkingSearch.cardID, // 车位卡编号
    cardName: state.parkingSearch.cardName, // 车位卡名称
    cardKind: state.parkingSearch.cardKind, // 车位卡类型（全部/包天卡/时长卡/次卡）all/day/time/number
    equID: state.parkingSearch.equID, // 设备编号
    equName: state.parkingSearch.equName, // 设备名称
    equIP: state.parkingSearch.equIP, // 设备序列号
    addMan: state.parkingSearch.addMan, // 添加人
    park: state.parkingSearch.park // 停车场
  };
};

const mapDispatchToProps = (dispatch: any) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Search);
