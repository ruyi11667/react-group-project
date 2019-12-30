import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log("a", value, option);
};

const Equ: React.FC<{}> = function Equ() {

  const equID = useSelector(state => (state as any).getIn(['parkingSearch', 'equID']))
  const equName = useSelector(state => (state as any).getIn(['parkingSearch', 'equName']))
  const equIP = useSelector(state => (state as any).getIn(['parkingSearch', 'equIP']))
  const addMan = useSelector(state => (state as any).getIn(['parkingSearch', 'addMan']))
  const park = useSelector(state => (state as any).getIn(['parkingSearch', 'park']))

  const dispatch = useDispatch();

  return (
    <div  style={{flex: 5}}>
      <div className="equIDBox">
        <span>设备编号：</span>
        <input type="text" name="equID" className="equID" id="equID" />
      </div>
      <div className="equNameBox">
        <span>设备名称：</span>
        <input type="text" name="equName" className="equName" id="equName" />
      </div>
      <div className="equIPBox">
        <span>IP：</span>
        <input type="text" name="equIP" className="equIP" id="equIP" />
      </div>
      <div className="addManBox">
        <span>添加人：</span>
        <input type="text" name="addMan" className="addMan" id="addMan" />
      </div>
      <div className="parkBox">
        <span>车位卡类型：</span>
        <Select
          defaultValue="all"
          style={{ width: 120 }}
          onChange={handleChange}
          className="park"
          id="park"
        >
          <Option value="all">全部</Option>
          <Option value="1">国际</Option>
          <Option value="2">中原</Option>
          <Option value="3">停车场</Option>
        </Select>
      </div>
    </div>
  );
};


export default Equ;
