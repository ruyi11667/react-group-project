import immutable from "immutable";
import API from "../../ajax/api";
import ajax from "../../ajax";
import { Dispatch } from "redux";

//type
enum SetSysUserType {
    list = "sys_list",
    status = "set_status"
}



//同步action
const setSysUserData = (type: string, value?: any) => ({
    type,
    value
});


type Action = ReturnType<typeof setSysUserData>;

//异步action
/**
 * 请求管理员列表   
 * @param pageNum 
 * @param pageSize 
 */
export const requestSysUserList = (pageNum?: number, pageSize?: number) => async (dispatch: Dispatch) => {
    let result: any = await ajax.get(API.SYS_USER_LIST, {
        params: {
            pageNum,
            pageSize
        }
    });

    if (result.data.code === '0000') {
        let list = result.data.data;
        list = list.map((item: any, index: any) => {
            item.roleName = item.role.name;
            item.changeStatus = changeStatus;
            return item
        });
        let action = setSysUserData(SetSysUserType.list, list);
        dispatch(action);
        return Promise.resolve(list);
    } else {
        return Promise.reject(new Error('请求失败'));
    }
}
/**
 * 改变管理员状态
 * @param id 
 * @param checked 
 */
export const changeStatus = (id: string, checked: boolean) => async (dispath: Dispatch) => {
    let result: any = await ajax.get(API.SYS_USER_UPDATE, {
        params: {
            id,
            status: checked ? '0' : '1'
        }
    });
    let action = setSysUserData(SetSysUserType.status, { id, status: checked ? '0' : '1' });
    userReducer(immutableState, action);
    return Promise.resolve(result);
}

//state
const initialState = {
    SysUserList: []
} 

const immutableState = immutable.fromJS(initialState);


//reducer
export default function userReducer(state: any = immutableState, action: Action) {
    switch (action.type) {
        case 'sys_list': {
            return  state.set('SysUserList', state.get('SysUserList').concat(action.value));
            
        }
        case 'set_status': {
            let list = state.get('SysUserList');
            list.map((item:any)=>{
                if(item._id===action.value.id){
                    item.status = action.value.status;
                }
                return item;
            })   
         
           
            return  state.set('SysUserList', list);
        }

        default: {
            return state;
        }
    }


}