import React, { useMemo, useState, useRef, useCallback, useEffect } from "react";
import { Layout } from "antd";
import { useParams } from "react-router-dom";
import { Input, Button, Select,message } from "antd";
import "./style.scss";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getAllRole,updateSysUser } from "../../../../../store/user";

const Content = Layout.Content;
const { Option } = Select;


const SysUserEdit: React.FC<{}> = function SysUserEdit() {

    //id为new是新增页面
    let { id } = useParams();

    const history = useHistory();
    const dispatch = useDispatch();
    const list = useSelector(state => (state as any).getIn(['user', 'SysUserList']));
    const roleList = useSelector(state => (state as any).getIn(['user', 'roleList']));

    console.log(roleList);

    // const [nickname, setNickname] = useState();
    // const [usename, setUsername] = useState();
    // const [password, setPassword] = useState();
    const [role,setRole] = useState();

    const nicknameRef: any = useRef();
    const usernameRef: any = useRef();
    const passwordRef: any = useRef();
    const roleRef: any = useRef();



    //组件挂载
    useEffect(() => {
        requestRole();
    }, [])

    const confirm = useCallback(
        async () => {
            let username = ''
            let nickname = nicknameRef.current.state.value;
            if (id === 'new') {
                username = usernameRef.current.state.value;
            }
            let password = passwordRef.current.state.value;
           
            
            console.log(password,role);

            //此处请求后台
            if(id!=="new"){//修改
               try {
                await  dispatch(updateSysUser((id as string),{nickname,password,role})); 
                message.success('修改成功',0.5);
                history.goBack();
               } catch (error) {
                   message.error(error.message,0.5);
               }
                
                
            }
        },
        [nicknameRef, usernameRef, passwordRef, roleRef,role],
    );


    //请求所有的角色列表
    const requestRole = useCallback(async () => {
        try {

            if (roleList.size <= 0) {
                await dispatch(getAllRole());

            }

        } catch (error) {
            console.log(error)
        }
    }, [roleList]);

    const sysUser = useMemo(() => {
        return list.find((item: any) => item._id === id)
    }, [list])




    return (
        <Content
            style={{
                background: "#fff",
                padding: "24px 20px",
                margin: "0 10px"
            }}
        >
            {id === 'new' && <Input ref={usernameRef} style={{ width: '80%', marginBottom: '20px' }} defaultValue={sysUser && sysUser.username} placeholder="账号" />}
            <Input ref={nicknameRef} style={{ width: '60%', marginBottom: '20px' }} placeholder="昵称" defaultValue={sysUser && sysUser.nickname} />
            <Input type="password" ref={passwordRef} style={{ width: '60%', marginBottom: '20px' }} defaultValue={sysUser && sysUser.password} placeholder="密码" />
            <Select ref={roleRef} style={{ width: '60%', marginBottom: '20px' }} defaultValue={sysUser && sysUser.role._id} placeholder="角色" onChange={(role:any)=>setRole(role)} >
               {roleList.map((item:any,index:number)=>{
                  return  <Option key={index} value={item._id}>{item.name}</Option>
               })}
            </Select>

            <div className="sys-edit-opa">

                <Button type="primary" onClick={confirm} className="sys-btn" >确认</Button>
                <Button type="danger" onClick={() => { history.goBack() }} className="sys-btn">取消</Button>
            </div>
        </Content>
    )
}
export default SysUserEdit;