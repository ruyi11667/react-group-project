import React, { useState, PropsWithChildren } from "react";
import Api from "@ajax/api";
import Http from "@ajax/index";
import { useSelector, useDispatch } from "react-redux";
import { Select } from "antd";
const { Option } = Select;

const Area: React.FC<PropsWithChildren<any>> = function Area(props) {

  const province = useSelector(state => (state as any).getIn(['parkingSearch', 'province']));
  const city = useSelector(state => (state as any).getIn(['parkingSearch', 'city']));
  const county = useSelector(state => (state as any).getIn(['parkingSearch', 'county']));
  const principal = useSelector(state => (state as any).getIn(['parkingSearch', 'principal']));
  const dispatch = useDispatch();

  const [provinceDom, setprovinceDom] = useState();
  const [cityDom, setctiyDom] = useState();
  const [countyDom, setcountyDom] = useState();

  // 创建选择器的dom
  const handleChildren = (data: Object & Array<Object>, type: String) => {
    switch (type) {
      case "province":
        setprovinceDom(
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
        setctiyDom(
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
        setcountyDom(
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
        dispatch({type: 'pushProvince', province: value})
        break;
      case "city":
        dispatch({type: 'pushCity', city: value})
        break;
      case "county":
        dispatch({type: 'pushCounty', county: value})
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
    if (!province) {
      return;
    }
    let {
      data: { data }
    } = await Http.get(Api.CITY, {
      params: { provinceId: province }
    });
    handleChildren(data, "city");
  };
  // 区获得焦点的回调
  const countyFoc = async () => {
    if (!city) {
      return;
    }
    let {
      data: { data }
    } = await Http.get(Api.COUNTY, {
      params: { cityId: city }
    });
    handleChildren(data, "county");
  };

  // 负责人
  const principalInpt = (ev: React.ChangeEvent<HTMLInputElement>) => {
    console.log('b', ev.target.value)
    dispatch({type: 'pushPrincipal', principal: ev.target.value})
  }

  return (
    <div style={{ flex: 3 }}>
      <div className="areaBox">
        <span>区域：</span>
        <div>
          <Select
            defaultValue="0"
            value={province}
            style={{ width: 120 }}
            onChange={handleChange}
            className="province"
            id="province"
            onFocus={provinceFoc}
          >
            <Option value="0" title="province">
              请选择省
            </Option>
            {provinceDom}
          </Select>
          <Select
            defaultValue="0"
            value={city}
            style={{ width: 120 }}
            onChange={handleChange}
            onFocus={cityFoc}
            className="city"
            id="city"
            disabled={!province || province === '0'}
          >
            <Option value="0" title="city">
              请选择市
            </Option>
            {cityDom}
          </Select>
          <Select
            defaultValue="0"
            value={county}
            style={{ width: 120 }}
            onChange={handleChange}
            onFocus={countyFoc}
            className="county"
            id="county"
            disabled={!city || city === '0' || province === '0'}
          >
            <Option value="0" title="county">
              请选择区
            </Option>
            {countyDom}
          </Select>
        </div>
      </div>
      <div className="principalBox">
        <span>负责人</span>
        <input
          type="text"
          value={principal}
          onChange={principalInpt}
          name="principalBox"
          className="principalBox"
          id="principalBox"
        />
      </div>
    </div>
  );
};


export default Area;
