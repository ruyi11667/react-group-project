import React, {useState} from 'react'
import  Search from "@pages/common/search";
import { Table } from 'antd';

const RoleManager: React.FC<{}> = function RoleManager() {
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
    },
    {
      title: '角色',
      dataIndex: 'role',
    },
    {
      title: '描述',
      dataIndex: 'detail',
    },
    {
      title: '已分配人数',
      dataIndex: 'peopleNum',
    },
    {
      title: '添加人',
      dataIndex: 'addPeople',
    },
    {
      title: '添加时间',
      dataIndex: 'addTime',
    },
    {
      title: '操作',
      dataIndex: 'make',
    },
  ];

  const [selectedRowKeys, setselectedRowKeys] = useState([])

  const onSelectChange = (selectedRowKeys: any)=> {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    setselectedRowKeys( selectedRowKeys );
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  return (
    <div>
      <Search type="userCard" />
      <Table columns={columns} rowSelection={rowSelection}  />
    </div>
  )
}

// dataSource={data}
// const data = [
//   {
//     key: '1',
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//   },
//   {
//     key: '2',
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//   },
//   {
//     key: '3',
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//   },
//   {
//     key: '4',
//     name: 'Disabled User',
//     age: 99,
//     address: 'Sidney No. 1 Lake Park',
//   },
// ];

// rowSelection object indicates the need for row selection



export default RoleManager;