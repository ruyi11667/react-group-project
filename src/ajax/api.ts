// 管理接口
enum API{
    /*
      登录接口
      参数： username  password
    */
    LOGIN_API = '/manager/api/login',

   /*
      财务统计接口
      参数： start end type(out in) today 
    */
    FINANCE_STAT_API= '/manager/api/finance/stat',

    //分页查询管理员列表
    SYS_USER_LIST= '/manager/api/user/listUser',
    //修改管理员信息
    SYS_USER_UPDATE = '/manager/api/user/updateUser',
    //删除用户
    SYS_USER_DELETE = "/manager/api/user/deleteUser",

    ALL_ROLE = "/manager/api/role/allRole"

  }
  export default API;