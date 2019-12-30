import React, { PropsWithChildren } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;


const Carport: React.FC<PropsWithChildren<any>> = function Carport(props) {

  const carportID = useSelector(state => (state as any).getIn(['parkingSearch', 'carportID']));
  const carportName = useSelector(state => (state as any).getIn(['parkingSearch', 'carportName']));
  const carportKind = useSelector(state => (state as any).getIn(['parkingSearch', 'carportKind']));
  const dispatch = useDispatch();

  // 获得选择器的值
  const handleChange = (value: string) => {
        dispatch({type: 'pushCarportKind', carportKind: value})
  };
  // 获取输入的值
  const changeAct = (ev: React.ChangeEvent<HTMLInputElement>) => {
    switch (ev.target.className) {
      case 'carportID':
        dispatch({type: 'pushCarportID', carportID: ev.target.value})
        break;
      case 'carportName':
        dispatch({type: 'pushCarportName', carportName: ev.target.value})
        break;
      default:
        break;
    }
  }

  return (
    <div style={{flex: 3}}>
      <div className="carportIDBox">
        <span>车库编号：</span>
        <input
          type="text"
          name="carportID"
          className="carportID"
          id="carportID"
          onChange={changeAct}
        />
      </div>
      <div className="carportNameBox">
        <span>车库名称：</span>
        <input
          type="text"
          name="carportName"
          className="carportName"
          id="carportName"
          onChange={changeAct}
        />
      </div>
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
    </div>
  );
};



export default Carport;