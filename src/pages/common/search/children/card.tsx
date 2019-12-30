import React, { PropsWithChildren } from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;


const Card: React.FC<PropsWithChildren<any>> = function Card(props) {

  // 获得选择器的值
  const handleChange = (value: string) => {
    props.pushCardKind(value)
  };
  // 获取输入的值
  const changeAct = (ev: React.ChangeEvent<HTMLInputElement>) => {
    switch (ev.target.className) {
      case 'cardID':
        props.pushCardID(ev.target.value)
        break;
      case 'cardName':
        props.pushCardName(ev.target.value)
        break;
      default:
        break;
    }
  }

  return (
    <div  style={{flex: 3}}>
      <div className="cardIDBox">
        <span>车位卡编号：</span>
        <input type="text" onChange={changeAct} name="cardID" className="cardID" id="cardID" />
      </div>
      <div className="cardNameBox">
        <span>车位卡名称：</span>
        <input type="text" onChange={changeAct} name="cardName" className="cardName" id="cardName" />
      </div>
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
    </div>
  );
};

const mapStateToProps = (state: {
  parkingSearch: { cardID: any; cardName: any; cardKind: any };
}) => {
  return {
    cardID: state.parkingSearch.cardID, // 车位卡编号
    cardName: state.parkingSearch.cardName, // 车位卡名称
    cardKind: state.parkingSearch.cardKind
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  pushCardID (str: String) {
    dispatch({
      type: 'pushCardID',
      cardID: str
    })
  },
  pushCardName (str: String) {
    dispatch({
      type: 'pushCardName',
      cardName: str
    })
  },
  pushCardKind (str: String) {
    dispatch({
      type: 'pushCardKind',
      cardKind: str
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
