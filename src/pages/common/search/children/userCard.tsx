import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;


const Card: React.FC<{}> = function Card() {

  const cardID = useSelector(state => (state as any).getIn(['parkingSearch', 'cardID']))
  const cardName = useSelector(state => (state as any).getIn(['parkingSearch', 'cardName']))
  const cardKind = useSelector(state => (state as any).getIn(['parkingSearch', 'cardKind']))

  const dispatch = useDispatch();

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



export default Card;
