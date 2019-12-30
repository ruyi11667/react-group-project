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
  }
  export default API;