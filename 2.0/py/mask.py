import _thread
import asyncio
import time
import requests
import json


async def ForOnePerson(tel,che):
    headers = {"UserAgent":"Mozilla/5.0 (iPhone; CPU iPhone OS 11_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E302 MicroMessenger/6.6.6 NetType/WIFI Language/zh_CN"}
    s = requests.session()

    r = s.post('http://kz.yq.zszwfw.cn/kzyy-book-service/paramSet/orderData?phone=' + tel + '&captcha=' + che,headers = headers,allow_redirects=True,verify=False)
    resultString = json.dumps(r.json(), ensure_ascii=False)
    with open('log.txt',"a+") as f:
        f.writelines(tel + ':' + resultString)
        f.writelines('\n')
    print(resultString + '\n')

if __name__ == "__main__":
    loop = asyncio.get_event_loop()
    f = open("ReloadData.txt", "r")
    f_read=f.read()
    f_read = '[' + f_read[2:]
    datalist = json.loads(f_read)
    while 1:
        try:
            for data in datalist:
                loop.run_until_complete(ForOnePerson(data['Tel'], data['Che']))
        except:
            print ("Error: 无法启动线程\n")

    
