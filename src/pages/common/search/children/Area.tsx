import React, { useState, PropsWithChildren } from "react";
import Api from "@ajax/api";
import Http from "@ajax/index";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const Area: React.FC<PropsWithChildren<any>> = function Area(props) {
  const [province, setprovince] = useState();
  const [city, setctiy] = useState();
  const [county, setcounty] = useState();

  // 创建选择器的dom
  const handleChildren = (data: Object & Array<Object>, type: String) => {
    switch (type) {
      case "province":
        setprovince(
          Object.entries(data).map(([key, value]) => {
            return (
              <Option key={key} value={key} title="province">
                {value}
              </Option>
            );
          })
        );
        break;
      case "city":
        setctiy(
          data.map(item => {
            let key = Object.keys(item);
            let value = Object.values(item);
            return (
              <Option key={key[0]} value={key[0]} title="city">
                {value[0]}
              </Option>
            );
          })
        );
        break;
      case "county":
        setcounty(
          data.map(item => {
            let key = Object.keys(item);
            let value = Object.values(item);
            return (
              <Option key={key[0]} value={key[0]} title="county">
                {value[0]}
              </Option>
            );
          })
        );
        break;
      default:
        break;
    }
  };

  // 获得选择器的值
  const handleChange = (value: string, option: any) => {
    switch (option.props.title) {
      case "province":
        props.pushProvince(value);
        break;
      case "city":
        props.pushCity(value);
        break;
      case "county":
        props.pushCounty(value);
      default:
        break;
    }
  };

  // 省获得焦点的回调
  const provinceFoc = async () => {
    let {
      data: { data }
    } = await Http.get(Api.PROVINCE);
    handleChildren(data, "province");
  };
  // 市获得焦点的回调
  const cityFoc = async () => {
    if (!props.province) {
      return;
    }
    let {
      data: { data }
    } = await Http.get(Api.CITY, {
      params: { provinceId: props.province }
    });
    handleChildren(data, "city");
  };
  // 区获得焦点的回调
  const countyFoc = async () => {
    if (!props.city) {
      return;
    }
    let {
      data: { data }
    } = await Http.get(Api.COUNTY, {
      params: { cityId: props.city }
    });
    handleChildren(data, "county");
  };

  return (
    <div style={{ flex: 3 }}>
      <div className="areaBox">
        <span>区域：</span>
        <div>
          <Select
            defaultValue="0"
            style={{ width: 120 }}
            onChange={handleChange}
            className="province"
            id="province"
            onFocus={provinceFoc}
          >
            <Option value="0" title="province">
              请选择省
            </Option>
            {province}
          </Select>
          <Select
            defaultValue="0"
            style={{ width: 120 }}
            onChange={handleChange}
            onFocus={cityFoc}
            className="city"
            id="city"
            disabled={!props.province || props.province == '0'}
          >
            <Option value="0" title="city">
              请选择市
            </Option>
            {city}
          </Select>
          <Select
            defaultValue="0"
            style={{ width: 120 }}
            onChange={handleChange}
            onFocus={countyFoc}
            className="county"
            id="county"
            disabled={!props.city || props.city == '0' || props.province == '0'}
          >
            <Option value="0" title="county">
              请选择区
            </Option>
            {county}
          </Select>
        </div>
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

const mapDispatchToProps = (dispatch: any) => ({
  pushProvince(str: String) {
    dispatch({
      type: "pushProvince",
      province: str
    });
  },
  pushCity(str: String) {
    dispatch({
      type: "pushCity",
      city: str
    });
  },
  pushCounty(str: String) {
    dispatch({
      type: "pushCounty",
      county: str
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Area);
