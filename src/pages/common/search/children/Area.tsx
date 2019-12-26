import React from "react";
import address from "./../address";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const handleChange = (value: string, option: any) => {
  console.log("a", value, option);
};

const children = Object.entries(address.province_list).map(([key, value]) => {
  return (
    <Option key={key} value={key} title="province">
      {value}
    </Option>
  );
});

const Area: React.FC<{}> = function Area() {
  return (
    <div style={{flex: 2}}>
      <div className="areaBox">
        <span>区域：</span>
        <Select
          defaultValue="0"
          style={{ width: 120 }}
          onChange={handleChange}
          className="province"
          id="province"
        >
          <Option value="0" title="province">
            请选择省
          </Option>
          {children}
        </Select>
        <Select
          defaultValue="0"
          style={{ width: 120 }}
          onChange={handleChange}
          className="city"
          id="city"
        >
          <Option value="0" title="city">
            请选择市
          </Option>
          {children}
        </Select>
      </div>
      <div className="principalBox">
        <span>负责人</span>
        <input
          type="text"
          name="principalBox"
          className="principalBox"
          id="principalBox"
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: {
  parkingSearch: { province: any; city: any; principal: any };
}) => {
  return {
    province: state.parkingSearch.province,
    city: state.parkingSearch.city,
    principal: state.parkingSearch.principal
  };
};

const mapDispatchToProps = (state: any) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Area);
