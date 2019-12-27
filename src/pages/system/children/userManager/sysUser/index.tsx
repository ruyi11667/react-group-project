
import React, { useEffect, useCallback, useState, useMemo } from "react";
import { Table, Divider, Switch, } from "antd";
import http from "../../../.././../ajax";
import API from "../../.././../../ajax/api";

//table标题
const columns = [
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
    },
    {
        title: "状态",
        key: 'status',
        render: (obj: any) => {
            let { _id, status } = obj;
            let defaultChecked = status === '0' ? true : false;
            return (<div>
                <Switch onChange={(checked) => { handleStatus(_id, checked) }} checkedChildren="开" unCheckedChildren="关" defaultChecked={defaultChecked} />
            </div>)
        }
    },
    {
        title: '操作',
        key: 'action',
        render: (obj: any) => {
            const {_id} = obj;
            return (
                <span>
                     <Divider type="vertical" />
                    <a onClick={()=>handleEdit(_id)}>编辑</a>
                    <a onClick={() => {
                        handleDelete(_id);
                    }}>删除</a>
                   
                </span>
            )
        },
    }
]


const SysUser: React.FC<{}> = function SysUser() {


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
            let result: any = await http.get(API.SYS_USER_LIST);
            if (result.data.code === '0000') {
                let list = result.data.data;
                list = list.map((item: any, index: any) => {
                    item.roleName = item.role.name;
                    item.index = index + 1;
                    return item
                });
                setData(list);

            }
        },
        [],
    )

    //组件创建
    useEffect(() => {
        requestList();
    }, [requestList]);




    return (
        <div>
            <Table rowKey={(record:any) => record._id} rowSelection={rowSelection} dataSource={data} columns={columns} />
        </div>
    )


}


//改变状态
function handleStatus(id: string, checked: boolean) {
    console.log(id, checked);
}

//删除
function handleDelete(id: string) {
    console.log(id);
}

//编辑
function handleEdit(id:string){
    console.log(id);
}


export default SysUser;