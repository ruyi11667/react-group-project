import immutable from "immutable";
import API from "../../ajax/api";
import ajax from "../../ajax";
import { Dispatch } from "redux";

//type
enum SetSysUserType {
    list = "sys_list",
    update="sys_update",
    status = "set_status",
    delete = "sys_delete",
    roleList = "role_list"
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
            item.index = index + 1;
            // item.changeStatus = changeStatus;
            // item.deleteAction = deleteSysUser;
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
    dispath(action);
    return Promise.resolve(result);
}
export const deleteSysUser = (id: string) => async (dispatch: Dispatch) => {
    // let result:any =await ajax.get(API.SYS_USER_DELETE);
    let action = setSysUserData(SetSysUserType.delete, id);
    dispatch(action);
    // return Promise.resolve(result);
    console.log(id);
}

/**
 * 获取所有角色
 */
export const getAllRole = () => async (dispatch: Dispatch) => {
    let result = await ajax.get(API.ALL_ROLE);
    console.log(result)
    if (result.status=== 200) {
        let action = setSysUserData(SetSysUserType.roleList, result.data.data);
        dispatch(action);
    }
    return Promise.resolve(result);
}

/**
 * 修改管理员信息
 * @param id 
 * @param update 
 */
export const updateSysUser=(id:string,update:{[paramsName:string]:any})=> async (dispatch:Dispatch)=>{
    console.log(update);
    let result:any = await ajax.get(API.SYS_USER_UPDATE,{
        params:{
            id,
            ...update
        }
    });
    let action = setSysUserData(SetSysUserType.update,{update,id});
    dispatch(action);
    return Promise.resolve(result);

}


//state
const initialState = {
    SysUserList: [],
    roleList: []
}

const immutableState = immutable.fromJS(initialState);


//reducer
export default function userReducer(state: any = immutableState, action: Action) {
    switch (action.type) {
        case 'sys_list': {
            return state.set('SysUserList', action.value);

        }
        case 'set_status': {
            let list = state.get('SysUserList');
            list = list.map((item: any) => {
                if (item._id === action.value.id) {
                    item.status = action.value.status;
                }
                return item;
            })


            return state.set('SysUserList', list);
        }

        case SetSysUserType.delete: {
            let list = state.get('SysUserList');

            console.log(list.toJS());
            list = list.map((item: any) => item._id !== action.value);

            return state.set('SysUserList', list);
        }
        case SetSysUserType.roleList: {
            return state.set('roleList', action.value)
        }

        case SetSysUserType.update:{
            let list = state.get('SysUserList');
            list  = list.map((item:any)=>{
                console.log(item);
                if(item._id===action.value.id){
                    return {...item,...action.value.update}
                }
                return item;
            })
        }

        default: {
            return state;
        }
    }


}