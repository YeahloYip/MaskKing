# 3.0 油猴版
- 服务器上线了接口数据加密，签名。
- 排队机制修改页面重复点击会重置排队
- 前端页面增加了session，导致浏览器不能直接多开
- 前端页面增加了登录和抢购验证码。
- 前端页面js上避免了直接去掉button的disabled即可提交
- 前端页面加入了稳定的倒计时同步，切换tab即可立即同步时间，或定时同步时间

* postman或直接curl已无法提交，破解js的加密与签名工作量无法估计，直接放弃任何外部提交方法
* 使用firefox浏览器，并引入了浏览器插件Tampermonkey和Firefox Multi-Account Containers
* 油猴插件内加入js内容，循环检测倒计时结束时的按键状态，捕捉可以点击时立即点击，点击后立即停止
* Firefox Multi-Account Containers允许了firefox浏览器可以多个session账号登录，实现多开同时抢
* Tampermonkey: https://www.tampermonkey.net/
* Firefox Multi-Account Containers: https://github.com/mozilla/multi-account-containers#readme