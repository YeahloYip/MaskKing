# 2.0 SHELL版 & PY版
- 服务器上线了负载动态平衡，接口内路由跳转
- js直接提交失效，但postman或直接curl依然可以提交，因此

* 开发了shell版（py版友人开发），通过run.sh启动多个sh实现多号同时抢
* shell版使用curl方法提交，附加参数 -L: Follow redirects，-b: --cookie <data|filename> Send cookies from string/file，-H: --header <header/@file> Pass custom header(s) to server
* 获得结果json使用python解析，判断状态

但此版本2日就失效了