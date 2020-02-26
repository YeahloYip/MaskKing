// ==UserScript==
// @name         MaskKing
// @namespace    http://tampermonkey.net/
// @version      3.0
// @description  try to take all mask!
// @author       Yeahlo
// @match        *://kz.yq.zszwfw.cn/kzyy-register/
// @match        *://kz.yq.zszwfw.cn/kzyy-register/?ad_check=1*
// @require      http://libs.baidu.com/jquery/2.0.0/jquery.min.js
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    var startTimeout = 10000; // 延时10秒启动
    var timeout = 100; // 点击间隔500毫秒
    var i = 0; // 点击计数
    var clickInterval;

    $(function () {
        $("<div id='maskClickCount' style='display: block;z-index: 9999999;color: #000;position: fixed;'></div>").appendTo('body');
        setTimeout(function () {
            run();
        }, startTimeout);

        function run() {
            clickInterval = setInterval(function () {
                var orderBtn = $("#hq_btn");
                var backBtn = $(".back_but[onclick='window.history.go(-1); ']");
                var loading = $(".loadinggetcode");
                if (loading.length > 0) {
                    console.log('loading');
                    $("#maskClickCount").html('loading');
                    clearInterval(clickInterval);
                }
                if (backBtn.length > 0) {
                    console.log('backBtn');
                    $("#maskClickCount").html('backBtn');
                    clearInterval(clickInterval);
                } else if (orderBtn.length > 0) {
                    // console.log('clickOrder');
                    clickOrder(orderBtn);
                }
            }, timeout);
        }

        function clickOrder(btn) {
            if (btn.prop("disabled") == false) {
                console.log('click');
                btn.click();
                clearInterval(clickInterval);

                var myDate = new Date();
                var t = myDate.toLocaleString();
                var ms = myDate.getMilliseconds(); // 获取当前毫秒数(0-999)

                $("#maskClickCount").html('click:' + i + ' finish' + t + '.' + ms);
            } else {
                $("#maskClickCount").html('click:' + i);
            }

            i++;
        }
    });
})();