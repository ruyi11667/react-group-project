
import React, { useEffect, useCallback, useState, useMemo } from "react";
import { Table, Divider, Switch, Button, Input, Row, Col, Select ,Pagination, message} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { requestSysUserList, changeStatus, deleteSysUser,addSysUser } from "../../../../../store/user";
import { getAllRole } from "../../../../../store/user";

const { Option } = Select;
//table标题
let columns: any = [
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




    const history = useHistory();
    const location = useLocation();

    const dispatch = useDispatch();
    const roleList = useSelector(state => (state as any).getIn(['user', 'roleList']));

    const [pageSize, setPageSize] = useState(10);
    const [pageNum, setPageNum] = useState(0);

    //组件创建
    useEffect(() => {
        requestRole();
    }, [])


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






    //分页请求列表
    const requestList = useCallback(
        async () => {
            let list = await dispatch(requestSysUserList(pageNum,pageSize));
            console.log(list);
            setData(list);
        },
        [dispatch, setData,pageNum,pageSize],
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
                let { _id, status } = obj;
                let defaultChecked = status === '0' ? true : false;
                return (
                    <div>
                        <Switch onChange={(checked) => { dispatch(changeStatus(_id, checked)) }} checkedChildren="开" unCheckedChildren="关" defaultChecked={defaultChecked} />
                    </div>
                )
            }
        };

        let action = {
            title: '操作',
            key: 'action',
            render: (obj: any) => {
                const { _id } = obj;
                return (
                    <span>
                        <a onClick={() => {
                            history.push('/system/userManager/edit/' + _id);
                        }}>编辑</a>
                        <Divider type="vertical" />
                        <a onClick={ async () => {
                            try {
                                await dispatch(deleteSysUser(_id));
                                message.success("删除成功",0.5);
                                requestList();
                            
                            } catch (error) {
                                message.success("删除失败",0.5);
                            }
                        }}>删除</a>

                    </span>
                )
            }
        };

        columns = [...columns, status, action];

        return () => {
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
            <section className="SearchBox">
                <div className="frameBox">
                    <Row>

                        <Col>
                            <Input addonBefore={<span>账号</span>} />
                        </Col>

                        <Col>
                            <Input addonBefore={<span>组织</span>} />
                        </Col>
                        <Col span={4}>
                            <Select  style={{ width: '100%'}}  placeholder="角色"  >
                                {roleList.map((item: any, index: number) => {
                                    return <Option key={index} value={item._id}>{item.name}</Option>
                                })}
                            </Select>
                        </Col>
                        <Col>
                            <Input addonBefore={<span>添加人</span>} />
                        </Col>
                    </Row>



                </div>
                <Row className="searchBtn">
                    <Col offset={1} span={2}>
                        <Button type="primary">查询</Button>
                    </Col>
                    <Col span={2}>
                        <Button type="primary">重置</Button>
                    </Col>
                    <Col span={2}>
                        <Button type="danger" onClick={()=>{history.push('/system/userManager/edit/new')}}>新增</Button>
                    </Col>
                </Row>
            </section>
            <Table  pagination={{pageSize:pageSize,total:15,onChange:(page)=>{setPageNum(page-1)}}} rowKey={(record: any) => record._id} rowSelection={rowSelection} dataSource={data} columns={columns} />
        </div>
    );


}



export default SysUser;