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
    SYS_USER_ADD = "/manager/api/user/addUser",

    ALL_ROLE = "/manager/api/role/allRole",

    /*
      省接口列表
      参数： 无
    */
    PROVINCE = '/manager/api/area/province',
    /*
      市接口列表
      参数： provinceId(省号)
    */
    CITY = '/manager/api/area/city',
    /*
      区接口列表
      参数： cityId(市号)
    */
    COUNTY = '/manager/api/area/county',
    /*
      查询所有停车场
      参数： 无
    */
    GET_ALL_PARK = '/manager/api/parking/allPark',
    /*
      分页查询停车场列表
      参数： pageNum: 当前页数； pageSize: 单页条数
    */
    GET_PAGE_PARK = '/manager/api/parking/slotList'
  }
  export default API;