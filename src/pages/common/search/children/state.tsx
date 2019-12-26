import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log("a", value, option);
};

const StateSele: React.FC<{}> = function StateSele() {
  return (
    <div style={{flex: 1}}>
      <div className="stateBox">
        <span>状态：</span>
        <Select
          defaultValue="all"
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

const mapStateToProps = (state: { parkingSearch: { state: any } }) => {
  return {
    state: state.parkingSearch.state
  };
};

const mapDispatchToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(StateSele);
