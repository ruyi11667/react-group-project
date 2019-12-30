import React, { PropsWithChildren } from "react";
import { connect } from "react-redux";
import { Select } from "antd";
const { Option } = Select;


const Carport: React.FC<PropsWithChildren<any>> = function Carport(props) {

  // 获得选择器的值
  const handleChange = (value: string) => {
    props.pushCarportKind(value)
  };
  // 获取输入的值
  const changeAct = (ev: React.ChangeEvent<HTMLInputElement>) => {
    switch (ev.target.className) {
      case 'carportID':
        props.pushCarportID(ev.target.value)
        break;
      case 'carportName':
        props.pushCarportName(ev.target.value)
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


const mapStateToProps = (state: {
  parkingSearch: { carportID: any; carportName: any; carportKind: any };
}) => {
  return {
    carportID: state.parkingSearch.carportID,
    carportName: state.parkingSearch.carportName,
    carportKind: state.parkingSearch.carportKind
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  pushCarportID(str: String){
    dispatch({
      type: 'pushCarportID',
      carportID: str
    })
  },
  pushCarportName(str: String){
    dispatch({
      type: 'pushCarportName',
      carportName: str
    })
  },
  pushCarportKind(str: String){
    dispatch({
      type: 'pushCarportKind',
      carportKind: str
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Carport);