$(function () {
    var time = 200;
    var runtimes = 100;
    var i = 0;
    var msg = '';
    var interval = setInterval(function () {
        $.ajax({
            type: "post",
            url: 'http://kz.yq.zszwfw.cn/kzyy-book-service/paramSet/orderData?phone=' + phone +
                '&captcha=' + captcha,
            data: {},
            dataType: "json",
            success: function (data) {
                var html = $('#logs').html();
                i++;
                if (i > runtimes) {
                    clearInterval(interval);
                    msg = "已自动停止，刷新页面可以重启<br/>";
                } else {
                    msg = data.errMsg + phone;
                    if (data.errMsg == '操作成功') {
                        clearInterval(interval);
                    }
                    if (data.errMsg == '预约资格已满') {
                        clearInterval(interval);
                    }
                    if (data.errMsg == '当天预约已结束') {
                        clearInterval(interval);
                    }
                }
                $('#logs').html(i + msg + "<br/>" + html);
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
                clearInterval(interval);
            }
        });
    }, time);
})
