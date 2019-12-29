
import React, { useEffect, useCallback, useState, useMemo } from "react";
import { Table, Divider, Switch, } from "antd";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {requestSysUserList,changeStatus,deleteSysUser} from "../../../../../store/user";


//table标题
let  columns:any = [
    {
        title: "序号",
        dataIndex: 'index'
    },

    {
        title: "账号",
        dataIndex: 'username'
    },
    {
        title: '密码',
        dataIndex: "password"
    },
    {
        title: "昵称",
        dataIndex: "nickname"

    },
    {
        title: "角色",
        dataIndex: "roleName"
    }  
]

const SysUser: React.FC<{}> = function SysUser() {

    

    const dispatch = useDispatch();
    
    const history = useHistory();

    //数据项
    const [data, setData] = useState();
    const [selectedRowKeys, setKey] = useState();
    const onSelectChange = useCallback(
        (selectedRowKeys) => {
            console.log(selectedRowKeys);
            setKey(selectedRowKeys);
        },
        [selectedRowKeys, setKey],
    )
    const rowSelection: any = useMemo(() => ({ selectedRowKeys, onChange: onSelectChange }), [selectedRowKeys]);
    
    
        



    //请求列表
    const requestList = useCallback(
        async () => {
            let list = await dispatch(requestSysUserList());
            console.log(list);
            setData(list);
        },
        [dispatch,setData],
    )


    //组件创建
    useEffect(() => {
        requestList();
    }, [requestList]);

    

    //初始化标题操作
    useEffect(() => {

        let status = {
            title: "状态",
            key: 'status',
            render: (obj: any) => {
                let { _id, status} = obj;
                let defaultChecked = status === '0' ? true : false;
                return (
                <div>
                    <Switch onChange={(checked) => { dispatch(changeStatus(_id, checked))}} checkedChildren="开" unCheckedChildren="关" defaultChecked={defaultChecked} />
                </div>
                )
            }
        };

        let action = {
            title: '操作',
            key: 'action',
            render: (obj: any) => {
                const {_id} = obj;
                return (
                    <span>
                        <a onClick={()=>{
                            history.push('/system/userManager/edit/'+_id);
                        }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={() => {
                           dispatch(deleteSysUser(_id))
                        }}>删除</a>
                       
                    </span>
                )
            }
        };
        
        columns = [...columns,status,action];
        
        return ()=>{
            columns = [
                {
                    title: "序号",
                    dataIndex: 'index'
                },
            
                {
                    title: "账号",
                    dataIndex: 'username'
                },
                {
                    title: '密码',
                    dataIndex: "password"
                },
                {
                    title: "昵称",
                    dataIndex: "nickname"
            
                },
                {
                    title: "角色",
                    dataIndex: "roleName"
                }  
            ]
            
        }

    }, [dispatch])    

    return (
        <div>
            <Table rowKey={(record:any) => record._id} rowSelection={rowSelection} dataSource={data} columns={columns} />
        </div>
    );

        
}



export default SysUser;