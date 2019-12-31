import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log("a", value, option);
};

const StateSele: React.FC<{}> = function StateSele() {

  const state = useSelector(state => (state as any).getIn(['parkingSearch', 'state']));
  const dispatch = useDispatch();

  const handleChange = (value: string) => {
    dispatch({type: "pushState", state: value})
  };

  return (
    <div style={{flex: 1}}>
      <div className="stateBox">
        <span>状态：</span>
        <Select
          defaultValue="all"
          value={state}
          style={{ width: 120 }}
          onChange={handleChange}
          className="state"
          id="state"
        >
          <Option title="state" value="all">
            全部
          </Option>
          <Option title="state" value="open">
            开启
          </Option>
          <Option title="state" value="off">
            关闭
          </Option>
        </Select>
      </div>
    </div>
  );
};



export default StateSele;
