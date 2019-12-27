import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log("a", value, option);
};

const Carport: React.FC<{}> = function Carport() {
  return (
    <div style={{flex: 3}}>
      <div className="carportIDBox">
        <span>车库编号：</span>
        <input
          type="text"
          name="carportID"
          className="carportID"
          id="carportID"
        />
      </div>
      <div className="carportNameBox">
        <span>车库名称：</span>
        <input
          type="text"
          name="carportName"
          className="carportName"
          id="carportName"
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


const mapStateToProps = (state: {
  parkingSearch: { carportID: any; carportName: any; carportKind: any };
}) => {
  return {
    carportID: state.parkingSearch.carportID,
    carportName: state.parkingSearch.carportName,
    carportKind: state.parkingSearch.carportKind
  };
};

const mapDispatchToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Carport);