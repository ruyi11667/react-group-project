import React from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log("a", value, option);
};

const Equ: React.FC<{}> = function Equ() {
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

const mapStateToProps = (state: {
  parkingSearch: {
    equID: any;
    equName: any;
    equIP: any;
    addMan: any;
    park: any;
  };
}) => {
  return {
    equID: state.parkingSearch.equID, // 车位卡编号
    equName: state.parkingSearch.equName, // 车位卡名称
    equIP: state.parkingSearch.equIP,
    addMan: state.parkingSearch.addMan,
    park: state.parkingSearch.park
  };
};

const mapDispatchToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Equ);
