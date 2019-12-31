import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const Equ: React.FC<{}> = function Equ() {

  const equID = useSelector(state => (state as any).getIn(['parkingSearch', 'equID']))
  const equName = useSelector(state => (state as any).getIn(['parkingSearch', 'equName']))
  const equIP = useSelector(state => (state as any).getIn(['parkingSearch', 'equIP']))
  const addMan = useSelector(state => (state as any).getIn(['parkingSearch', 'addMan']))
  const park = useSelector(state => (state as any).getIn(['parkingSearch', 'park']))

  const dispatch = useDispatch();
  // 处理输入值
  const changeAct = (ev: React.ChangeEvent<HTMLInputElement>) => {
    switch (ev.target.className) {
      case 'equID': 
        dispatch({type: 'pushEquID', equID: ev.target.value});
        break;
      case 'equName': {
        dispatch({type: 'pushEquName', equName: ev.target.value});
        break;
      }
      case 'equIP': {
        dispatch({type: 'pushEquIP', equIP: ev.target.value});
        break;
      }
      case 'addMan': {
        dispatch({type: 'pushAddMan', addMan: ev.target.value});
        break;
      }   
      default:
        break;
    }
  }
  // 选择器值
  const handleChange = (value: string) => {
    dispatch({type: 'pushPark', park: value})
  };

  return (
    <div  style={{flex: 5}}>
      <div className="equIDBox">
        <span>设备编号：</span>
        <input value={equID} onChange={changeAct} type="text" name="equID" className="equID" id="equID" />
      </div>
      <div className="equNameBox">
        <span>设备名称：</span>
        <input value={equName} onChange={changeAct} type="text" name="equName" className="equName" id="equName" />
      </div>
      <div className="equIPBox">
        <span>IP：</span>
        <input value={equIP} onChange={changeAct} type="text" name="equIP" className="equIP" id="equIP" />
      </div>
      <div className="addManBox">
        <span>添加人：</span>
        <input value={addMan} onChange={changeAct} type="text" name="addMan" className="addMan" id="addMan" />
      </div>
      <div className="parkBox">
        <span>停车场：</span>
        <Select
          defaultValue="all"
          value={park}
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
