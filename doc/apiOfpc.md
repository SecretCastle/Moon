# PC端api

## 目录
- [服务器](#服务器)
- [api使用](#api使用)
	- [通用获取首页](#common)


### 服务器
``` 
http://i.qingting.fm
```
### api使用

#### common
```
/wapi/guides/featured/common

返回参数
{
    "code": 0,
    "data":{
        "sections":[
            {
                "more": {
                "type": "now"
                },
                "recommends": [
                    {
                        "category_id": 3599,
                        "id": 134800,
                        "playcount": "278.1万",
                        "desc": "轻浮的人，不配拥有真爱",
                        "title": "轻浮的人，不配拥有真爱",
                        "type": "channel_ondemand",
                        "img_url": "http://pic.qingting.fm/2015/1110/20151110165008862.jpg!200",
                        "program_id": 3971371,
                        "score": 6
                    },
                    {
                        "category_id": 3599,
                        "id": 121006,
                        "playcount": "136.2万",
                        "desc": "英伦游记（一）",
                        "title": "英伦游记（一）",
                        "type": "channel_ondemand",
                        "img_url": "http://pic.qingting.fm/2015/0819/2015081916311523.jpg!200",
                        "program_id": 3953754,
                        "score": 6
                    },
                    {
                        "category_id": 3599,
                        "id": 188868,
                        "playcount": "20.1亿",
                        "desc": "道教那些事，驱鬼降魔轮番上演",
                        "title": "道教那些事，驱鬼降魔轮番上演",
                        "type": "channel_ondemand",
                        "img_url": "http://pic.qingting.fm/2017/0424/20170424175010661.jpg!200",
                        "program_id": 2551189,
                        "score": 9
                    },
                    {
                        "category_id": 3599,
                        "id": 157676,
                        "playcount": "1.6亿",
                        "desc": "最爱你的人会为你放低姿态",
                        "title": "最爱你的人会为你放低姿态",
                        "type": "channel_ondemand",
                        "img_url": "http://pic.qingting.fm/2017/0424/20170424175107720.jpg!200",
                        "program_id": 6989609,
                        "score": 7
                    },
                    {
                        "category_id": 3599,
                        "id": 167958,
                        "playcount": "1.0亿",
                        "desc": "这首歌你一定不能错过",
                        "title": "这首歌你一定不能错过",
                        "type": "channel_ondemand",
                        "img_url": "http://pic.qingting.fm/2017/0424/20170424175144157.jpg!200",
                        "program_id": 6989905,
                        "score": 6
                    }
                ],
                "style": "icon",
                "name": "此刻热听"
            }
        ]
    }
}

```