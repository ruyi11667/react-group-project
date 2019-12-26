import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log("a", value, option);
};

const Card: React.FC<{}> = function Card() {
  return (
    <div  style={{flex: 3}}>
      <div className="cardIDBox">
        <span>车位卡编号：</span>
        <input type="text" name="cardID" className="cardID" id="cardID" />
      </div>
      <div className="cardNameBox">
        <span>车位卡名称：</span>
        <input type="text" name="cardName" className="cardName" id="cardName" />
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

const mapDispatchToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
