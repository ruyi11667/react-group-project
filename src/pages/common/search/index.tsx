import React, { PropsWithChildren } from "react";
import { Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import Park from './children/park'
import Area from './children/Area'
import StateSele from './children/state'
import Carport from './children/Carport'
import Rule from './children/Rule'
import Card from './children/card'
import Equ from './children/Equ'
import UserCard from './children/userCard'

const Search: React.FC<PropsWithChildren<any>> = function Search(props) {
  const parkId = useSelector(state =>
    (state as any).getIn(["parkingSearch", "parkId"])
  );
  const parkName = useSelector(state =>
    (state as any).getIn(["parkingSearch", "parkName"])
  );
  const province = useSelector(state =>
    (state as any).getIn(["parkingSearch", "province"])
  );
  const city = useSelector(state =>
    (state as any).getIn(["parkingSearch", "city"])
  );
  const county = useSelector(state =>
    (state as any).getIn(["parkingSearch", "county"])
  );
  const principal = useSelector(state =>
    (state as any).getIn(["parkingSearch", "principal"])
  );
  const state = useSelector(state =>
    (state as any).getIn(["parkingSearch", "state"])
  );
  const carportID = useSelector(state =>
    (state as any).getIn(["parkingSearch", "parkId"])
  );
  const carportName = useSelector(state =>
    (state as any).getIn(["parkingSearch", "carportName"])
  );
  const carportKind = useSelector(state =>
    (state as any).getIn(["parkingSearch", "carportKind"])
  );
  const ruleID = useSelector(state =>
    (state as any).getIn(["parkingSearch", "ruleID"])
  );
  const ruleName = useSelector(state =>
    (state as any).getIn(["parkingSearch", "ruleName"])
  );
  const userKind = useSelector(state =>
    (state as any).getIn(["parkingSearch", "userKind"])
  );
  const billingMode = useSelector(state =>
    (state as any).getIn(["parkingSearch", "billingMode"])
  );
  const freeTime = useSelector(state =>
    (state as any).getIn(["parkingSearch", "freeTime"])
  );
  const cardID = useSelector(state =>
    (state as any).getIn(["parkingSearch", "cardID"])
  );
  const cardName = useSelector(state =>
    (state as any).getIn(["parkingSearch", "cardName"])
  );
  const cardKind = useSelector(state =>
    (state as any).getIn(["parkingSearch", "cardKind"])
  );
  const equID = useSelector(state =>
    (state as any).getIn(["parkingSearch", "equID"])
  );
  const equName = useSelector(state =>
    (state as any).getIn(["parkingSearch", "equName"])
  );
  const equIP = useSelector(state =>
    (state as any).getIn(["parkingSearch", "equIP"])
  );
  const addMan = useSelector(state =>
    (state as any).getIn(["parkingSearch", "addMan"])
  );
  const park = useSelector(state =>
    (state as any).getIn(["parkingSearch", "park"])
  );

  const dispatch = useDispatch();

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
        case "userCard":
          return (
            <div>
              <UserCard/>
            </div>
          );
      default:
        return "";
    }
  };

  const findBtnAct = (ev: React.MouseEvent<HTMLButtonElement>) => {
    switch (props.type) {
      case "park":
        console.log(parkId, parkName, province, city, county, principal, state);
        break;
      case "spot":
        console.log(
          parkId,
          parkName,
          carportID,
          carportName,
          carportKind,
          state
        );
        break;
      case "billing":
        console.log(ruleID, ruleName, userKind, billingMode, freeTime);
        break;
      case "card":
        console.log(parkId, parkName, cardID, cardName, cardKind, state);
        break;
      case "equipment":
        console.log(equID, equName, equIP, addMan, park, state);
        break;
      default:
        break;
    }
  };

  // 新增按钮
  const newBtnClc = async (ev: React.MouseEvent<HTMLButtonElement>) => {
    console.log(props);
    switch (props.type) {
      case 'park':
        // if(props.location.pathname === '/home' || props.location.pathname === '/' ) {
          window.location.replace('/parking/parkManage/addNew');
        // }
        
        break;
    
      default:
        break;
    }
    // /parking/parkManage/addNew
  };

  return (
    <section className="SearchBox">
      <div className="frameBox">{checkDom()}</div>
      <div className="searchBtn">
        <Button type="primary" onClick={findBtnAct}>
          查询
        </Button>
        <Button type="primary">重置</Button>
        <Button type="danger" onClick={newBtnClc}>
          新增
        </Button>
      </div>
    </section>
  );
};

export default Search;
