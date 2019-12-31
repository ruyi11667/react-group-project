import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;


const Card: React.FC<{}> = function Card() {
  return (
    <div  style={{flex: 3}}>
      <div className="cardIDBox">
        <span>角色：</span>
        <input type="text" name="cardID" className="cardID" id="cardID" />
      </div>
      <div className="cardNameBox">
        <span>角色描述：</span>
        <input type="text" name="cardName" className="cardName" id="cardName" />
      </div>
      <div className="cardNameBox">
        <span>添加人：</span>
        <input type="text" name="cardName" className="cardName" id="cardName" />
      </div>
      <div className="cardKindBox">
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
