import React, { useEffect, useState, Suspense, PropsWithChildren } from "react";
import { renderRoutes } from 'react-router-config'
import { Table } from "antd";
import Loading from '@pages/common/loading/index'
import Search from "@pages/common/search";
import Api from "@ajax/api";
import Http from "@ajax/index";
import "./style.scss";

const ParkMana: React.FC<PropsWithChildren<any>> = function RarkMana(props) {
  const [pageNum, setpageNum] = useState(0);

  const columns = [
    {
      title: "序号",
      dataIndex: "index",
      key: "index"
    },
    {
      title: "停车场ID",
      dataIndex: "parkId",
      key: "parkId"
    },
    {
      title: "停车场名称",
      dataIndex: "parkName",
      key: "parkName"
    },
    {
      title: "停车场地址",
      dataIndex: "parkArea",
      key: "parkArea"
    },
    {
      title: "经纬度",
      dataIndex: "GPS",
      key: "GPS"
    },
    {
      title: "车位数",
      dataIndex: "spotSum",
      key: "spotSum"
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state"
    },
    {
      title: "操作",
      dataIndex: "handle",
      key: "handle"
    }
  ];

  const data = [
    {
      key: 1,
      index: 1,
      parkId: "123",
      parkName: "中原停车场",
      parkArea: "广州市深圳市宝安区",
      GPS: "123/123",
      spotSum: "100",
      state: "open",
      handle: "New York No. 1 Lake Park"
    },
    {
      key: 2,
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park"
    }
  ];

  // rowSelection objects indicates the need for row selection
  const rowSelection = {
    onChange: (selectedRowKeys: any, selectedRows: any) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    onSelect: (record: any, selected: any, selectedRows: any) => {
      console.log(record, selected, selectedRows);
    },
    onSelectAll: (selected: any, selectedRows: any, changeRows: any) => {
      console.log(selected, selectedRows, changeRows);
    }
  };

  useEffect(() => {
    Http.get(Api.GET_PAGE_PARK, {
      params: {
        pageNum: pageNum,
        pageSize: 8
      }
    }).then(res => {
      console.log(res);
    });
  }, []);

  return (
    <div>
      <Search type="park" />
      <Table
        className="showData"
        columns={columns}
        rowSelection={rowSelection}
        dataSource={data}
      />
      {/* 懒加载 */}
      <Suspense fallback={<Loading />}>
        {renderRoutes(props.route.routes)}
      </Suspense>
    </div>
  );
};

export default ParkMana;
