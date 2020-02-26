#!/bin/bash
phone=$1
captcha=$2

n=0
max=50 # 运行次数最大值
export PYTHONIOENCODING=utf8
log="./log/$phone.txt"

# echo '' > $log # 是否覆盖log，去掉则覆盖

while (( $n <= $max )); do
    currTime=$(date +"%Y-%m-%d %T")
    request=$(curl -L -b /tmp/curl.cookies -H "Accept: application/json" -H "Content-type: application/json" -X POST http://kz.yq.zszwfw.cn/kzyy-book-service/paramSet/orderData\?phone=${phone}\&captcha=${captcha} | python -c "import json,sys;obj=json.load(sys.stdin);print obj['errMsg'];")
    if [[ $request == "操作成功" ]] || [[ $request == '预约资格已满' ]] || [[ $request == '当天预约已结束' ]];then
        echo "${phone} ${request} ${currTime}"
        echo "${phone} ${request} ${currTime}" >> $log
        break
    else
        echo "${phone} ${request} ${currTime} ${n}"
        echo "${phone} ${request} ${currTime} ${n}" >> $log
    fi
    (( n++ ))
    sleep 0.2
done
