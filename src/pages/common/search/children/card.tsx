import React, { PropsWithChildren } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;


const Card: React.FC<PropsWithChildren<any>> = function Card(props) {

  const cardID = useSelector(state => (state as any).getIn(['parkingSearch', 'cardID']));
  const cardName = useSelector(state => (state as any).getIn(['parkingSearch', 'cardName']));
  const cardKind = useSelector(state => (state as any).getIn(['parkingSearch', 'cardKind']));
  const dispatch = useDispatch();

  // 获得选择器的值
  const handleChange = (value: string) => {
    dispatch({type: 'pushCardKind', cardKind: value})
  };
  // 获取输入的值
  const changeAct = (ev: React.ChangeEvent<HTMLInputElement>) => {
    switch (ev.target.className) {
      case 'cardID':
        dispatch({type: 'pushCardID', cardID: ev.target.value})
        break;
      case 'cardName':
        dispatch({type: 'pushCardName', cardName: ev.target.value})
        break;
      default:
        break;
    }
  }

  return (
    <div  style={{flex: 3}}>
      <div className="cardIDBox">
        <span>车位卡编号：</span>
        <input value={cardID} type="text" onChange={changeAct} name="cardID" className="cardID" id="cardID" />
      </div>
      <div className="cardNameBox">
        <span>车位卡名称：</span>
        <input value={cardName} type="text" onChange={changeAct} name="cardName" className="cardName" id="cardName" />
      </div>
      <div className="cardKindBox">
        <span>车位卡类型：</span>
        <Select
          defaultValue="all"
          value={cardKind}
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
    </div>
  );
};


export default Card;
