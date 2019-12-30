import React, { useState, useCallback ,useEffect} from 'react';
import SysUser from "./sysUser";
import BizUser from "./bizUser";
import { Button, Layout } from "antd";



import "./style.scss";

const Content = Layout.Content;


function Tab(props: { [propName: string]: any }) {

  const clickBtn = useCallback(
    (index: number) => {
      props.changeIndex(index);
    },
    [],
  )

  return (
    <div className="sys-tabBtn">
      <Button onClick={() => {
        clickBtn(0);
      }} className={props.selectIndex === 0 ? 'btn active' : 'btn'} >用户列表</Button>
      <Button onClick={() => {
        clickBtn(1);
      }} className={props.selectIndex === 1 ? 'btn active' : 'btn'} >管理员列表</Button>
    </div>
  )
}

const UserManager: React.FC<{}> = function UserManager() {

  
const [selectIndex, setSelect] = useState(1);
const handleChangeIndex = useCallback(
    (index: number) => {
      setSelect(index);
    },
    [selectIndex]
  )

  let Com: any = null;

  if (selectIndex === 1) {
    Com = SysUser;
  } else {
    Com = BizUser;
  }

  return (
    <>
      <Content
        style={{
          background: "#fff",
          padding: "24px 20px",
          margin: "0 10px"
        }}
      >
        <Tab  changeIndex={handleChangeIndex} selectIndex={selectIndex} />
        <Com></Com>
      </Content>
    </>
  );

}

export default UserManager;
