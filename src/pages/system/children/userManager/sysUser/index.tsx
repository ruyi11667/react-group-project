
import React, { useEffect,useCallback} from "react";
import { Table } from "antd";
import  http from "../../../.././../ajax";
import API from "../../.././../../ajax/api";

const SysUser: React.FC<{}> = function SysUser() {
      //请求列表
      const requestList  = useCallback(
          async () => {
            let result:any =   await http.get(API.SYS_USER_LIST);
            if(result.data.code=='0000'){
                let list =  result.data.data;
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
            <Table />
        </div>
    )
}
export default SysUser;