# 移动端api


## 介绍

点播的内容的层次结构是：Category -> OnDemandChannel -> OnDemandProgram。

+ category_id 分类id (如521 => 小说)
+ channel_id 指定电台id (如211852 => 人民的名义) 
+ program_id 具体节目id (如6850879 => 人民的名义001)

## 目录
- [deviceid和userid](#deviceid和userid)
- [API准备](#api准备)
	- [服务器](#服务器)
	- [api使用](#api使用)
		- [获取分类](#获取分类)
		- [获取分类下的属性](#获取分类下的属性)
		- [获取分类下的所有电台或直播电台，并按属性筛选](#获取分类下的所有电台或直播电台并按属性筛选)
		- [获取指定分类下的所有电台](#获取指定分类下的所有电台)
		- [获取指定点播电台信息](#获取指定点播电台信息)
		- [获取点播电台下的点播节目](#获取点播电台下的点播节目)
		- [获取点播节目](#获取点播节目)
		- [获取指定点播电台的推荐电台列表](#获取指定点播电台的推荐电台列表)
		- [点击播放](#点击播放)
		- [获取点播分类推荐](#获取点播分类推荐)
		- [获取直播banner内容(可能移动端没用)](#获取直播banner内容)
		- [搜索](#搜索)
	- [用户](#用户)
	- [Http请求部分](#Http请求部分)

## deviceid和userid

```
deviceid = 51c0c9fdd12577d2da2ea396720bab21
user_id=40e6c8b3a2f0074ca0fe7bc308db303d

```

## api准备

### 服务器
```
http://api2.qingting.fm 信息服务器
http://upod.qingting.fm 播放服务器
http://api.accuweather.com 天气
http://user.api.qingting.fm 用户服务器
http://search.qingting.fm 搜索服务器
```

### api使用

#### 获取分类
```
/v6/media/categories

返回的参数
{
    errorno: 0,
    errormsg: "",
    data: [
        {
            id: 521,
            name: "小说",
            sequence: 1,
            section_id: 208,
            type: "category"
        },
        ...
    ]
  }

```

#### 获取分类下的属性
```
/v6/media/categories/#{category_id}

返回参数
{
	errorno: 0,
	errormsg: "",
	data: [
		{
			id: 21,
			name: "地域",
			values: [
				{
					id: 449,
					name: "国外",
					sequence: 1
				},
				...
			]
		},
		...
	]
}
```

#### 获取分类下的所有电台或直播电台并按属性筛选
```

{
	'推荐默认排序':'bydefault',
	'最热排序':'bytrend',
	'最新排序':'byupdate',
	'2744':'分类下类别id，其他分类以此类推'
}

/v6/media/categories/521/channels/order/bydefault/0/attr/2744/curpage/1/pagesize/30

返回参数

{
	"data":[
		{
		    "auto_play": 0,
		    "category_id": 521,
		    "chatgroup_id": 0,
		    "description": "【火爆完本】平凡人逆袭成一代大侠的故事。有绝世武功，有美人相伴，傻郭靖、俏黄蓉成就一段武林佳话。从漠北到江南，只要有一颗纯朴善良的赤子之心，终会成为一代射雕英雄。金庸最脍炙人口的作品，有华人的地方就有《射雕英雄传》！",
		    "detail": {
		        "podcasters": [
		            {
		                "avatar": "http://pic.qingting.fm/2016/0812/20160812152637673.jpeg",
		                "award_open": "99",
		                "birthday": "",
		                "description": "",
		                "fan_num": 3013,
		                "id": 53803,
		                "location": "",
		                "nickname": "金庸",
		                "sex": 0,
		                "signature": "",
		                "sns_open": true,
		                "user_system_id": "c01de60e8847701fac6db79513fd6562",
		                "weibo_id": "1",
		                "weibo_name": ""
		            }
		        ],
		        "program_count": 153
		    },
		    "id": 166894,
		    "is_finished": 1,
		    "latest_program": "【151】华山论剑2",
		    "link_id": 0,
		    "ordered": 1,
		    "record_enabled": 0,
		    "sale_props": "4771600 4771601 4771602 4771603 4771604",
		    "sale_type": 5,
		    "star": 6,
		    "status": 99,
		    "thumbs": {
		        "200_thumb": "http://pic.qingting.fm/2017/0208/20170208114554968.jpg!200",
		        "400_thumb": "http://pic.qingting.fm/2017/0208/20170208114554968.jpg!400",
		        "800_thumb": "http://pic.qingting.fm/2017/0208/20170208114554968.jpg!800",
		        "large_thumb": "http://pic.qingting.fm/2017/0208/20170208114554968.jpg!large",
		        "medium_thumb": "http://pic.qingting.fm/2017/0208/20170208114554968.jpg!medium",
		        "small_thumb": "http://pic.qingting.fm/2017/0208/20170208114554968.jpg!small"
		    },
		    "title": "射雕英雄传（全集）",
		    "type": "channel_ondemand",
		    "update_time": "2016-08-08 22:08:43"
		}
	]
}
```


#### 获取指定分类下的所有电台
```
/v6/media/categories/521/channels/order/0/curpage/1/pagesize/30 

返回参数
{
	"errorno": 0,
	"errormsg": "",
	"data":[{
	    "id": 211852,
	    "Title": "人民的名义",
	    "Description": "【火爆完本】作者：周梅森  讲播者：纪涵邦 \r\n一位国家部委的项目处长被人举报受贿千万，当最高人民检察院反贪总局侦查处处长侯亮平前来搜查时，看到的却是一位长相憨厚、衣着朴素的“老农民”在简陋破败的旧房里吃炸酱面。当这位腐败分子的面具被最终撕开的同时，与之案件牵连甚紧的H省京州市副市长丁义珍，却在一位神秘人物的暗中相助下，以反侦察手段逃脱法网，流亡海外。案件线索*终定位于由京州光明湖项目引发的一家H省国企大风服装厂的股权争夺，牵连其中的各派政治势力却盘根错节，扑朔迷离。H省检察院反贪局长陈海在调查行动中遭遇离奇的车祸。为了完成当年同窗的未竟事业，精明干练的侯亮平临危受命，接任陈海未竟的事业。在H省政坛，以H省委副书记、政法委书记高育良为代表的“政法系”，以H省委常委、京州市委书记李达康为代表的“秘书帮”相争多年，不分轩轾。新任省委书记沙瑞金的到来，注定将打破这种政治的平衡局面，为H省的改革大业带来新的气息……",
	    "update_time": "2017-04-19 10:06:00",
	    "chatgroup_id": 0,
	    "thumbs": {
	        "small_thumb": "http://pic.qingting.fm/2017/0407/20170407105949294.jpg!small",
	        "medium_thumb": "http://pic.qingting.fm/2017/0407/20170407105949294.jpg!medium",
	        "large_thumb": "http://pic.qingting.fm/2017/0407/20170407105949294.jpg!large",
	        "200_thumb": "http://pic.qingting.fm/2017/0407/20170407105949294.jpg!200",
	        "400_thumb": "http://pic.qingting.fm/2017/0407/20170407105949294.jpg!400",
	        "800_thumb": "http://pic.qingting.fm/2017/0407/20170407105949294.jpg!800"
	    },
	    "category_id": 521,
	    "type": "channel_ondemand",
	    "status": 99,
	    "link_id": 0,
	    "sale_type": 5,
	    "sale_props": "6850879 6850880 6850881 6850882 6850883",
	    "ordered": 1,
	    "is_finished": 1,
	    "auto_play": 0,
	    "record_enabled": 0,
	    "latest_program": "人民的名义062",
	    "star": 6,
	    "detail": {
	        "podcasters": [
	            {
	                "id": 79573,
	                "user_system_id": "a259c7193944dfd78cc964a140f1111e",
	                "nickname": "鸿达以太",
	                "avatar": "http://pic.qingting.fm/2017/03/10/partner_0687ba71ca8ebe35d320a4264c5f104b.png",
	                "sex": 0,
	                "signature": "",
	                "weibo_name": "",
	                "weibo_id": "1",
	                "description": "",
	                "fan_num": 1512,
	                "sns_open": false,
	                "award_open": "99",
	                "location": "",
	                "birthday": ""
	            }
	        ],
	        "program_count": 63
	    }
	}]
}
```
#### 获取指定点播电台信息
```
/v6/media/channelondemands/#{channel_id}

返回数据

{   
    data: {
      "auto_play": 0,
      "category_id": 521,
      "chatgroup_id": 0,
      "description": "江烁和秦一恒是一对神秘的炒房客，他们低价购买远近闻名的凶宅，经过驱鬼辟邪之后，再转手把房子卖出去，每一次都能大赚一笔，生意出奇地好！不料，一场巨大阴谋悄悄在他们身边酝酿，各种凶险无比的凶宅不断出现，他们发现自己已经很难搞定，几次濒临死亡线。此时，他们发现，自己被套进一张杀机四伏的网内！",
      "detail": {
           "activitycount": "8517",
           "authors": [
              {
                 "id": 11583,
                 "qq_id": "",
                 "qq_name": "",
                 "thumb": "",
                 "username": "贰13",
                 "weibo_id": "",
                 "weibo_name": ""
              }
           ],
           "broadcasters": [
              {
                 "id": 10458,
                 "qq_id": "",
                 "qq_name": "",
                 "thumb": "",
                 "username": "纪涵邦",
                 "weibo_id": "",
                 "weibo_name": ""
              },
              {
                 "id": 11490,
                 "qq_id": "",
                 "qq_name": "",
                 "thumb": "",
                 "username": "佟掌柜",
                 "weibo_id": "",
                 "weibo_name": ""
              }
            ],
            "favcount": "18.0万",
            "playcount": "4013.0万",
            "podcasters": null,
            "program_count": 125
       },
       "id": 88352,
       "is_finished": 1,
       "item_type": 0,
       "latest_program": "凶宅笔记第三部_050",
       "link_id": 0,
       "ordered": 1,
       "purchase_item": null,
       "raw_title": "凶宅笔记",
       "record_enabled": 0,
       "sale_props": "",
       "sale_status": "free",
       "sale_type": 0,
       "star": 6,
       "status": 99,
       "tags": "出版,合集,女频,惊悚灵异,男频,鸿达以太",
       "thumbs": {
             "200_thumb": "http://pic.qingting.fm/2015/0325/20150325144341643.jpg!200",
             "400_thumb": "http://pic.qingting.fm/2015/0325/20150325144341643.jpg!400",
             "800_thumb": "http://pic.qingting.fm/2015/0325/20150325144341643.jpg!800",
             "large_thumb": "http://pic.qingting.fm/2015/0325/20150325144341643.jpg!large",
             "medium_thumb": "http://pic.qingting.fm/2015/0325/20150325144341643.jpg!medium",
             "small_thumb": "http://pic.qingting.fm/2015/0325/20150325144341643.jpg!small"
       },
       "title": "凶宅笔记全三部",
       "type": "channel_ondemand",
       "update_time": "2014-12-15 17:18:06",
       "view_type": 1,
       "weburl": "http://m.qingting.fm/vchannels/88352"
    },
    errormsg: "",
    errorno:
  }

```

#### 获取点播电台下的点播节目
```
/v6/media/channelondemands/211852/programs/order/0/curpage/1/pagesize/50  获取自定义顺序数据URL
/v6/media/channelondemands/#{channel_id}/programs/curpage/#{curpage}/pagesize/30  获取指定电台的节目列表

返回参数 （注意"sale_status参数： free为免费，unpaid为付费"）
{
	"page": 1,
    "errormsg": "",
    "data":[{
    	 "detail": {},
	    "update_time": "2017-04-01 10:05:14",
	    "duration": 1387.9,
	    "id": 6850879,
	    "redirect_url": "",
	    "sale_status": "free",
	    "price": 0,
	    "original_fee": 0,
	    "sequence": 0,
	    "title": "人民的名义001",
	    "mediainfo": {
	        "bitrates_url": [
	            {
	                "qetag": "lpomHdBfum7pdWg8V8hD7-J0Yrug",
	                "file_path": "m4a/58df0a0b7cb8917264803bc3_7070565_64.m4a",
	                "bitrate": 62
	            },
	            {
	                "qetag": "FvvPVMTg0Xpyskr_av1nPrp_rImA",
	                "file_path": "m4a/58df0a0b7cb8917264803bc3_7070565_24.m4a",
	                "bitrate": 22
	            }
	        ],
	        "duration": 1387.9,
	        "id": 7070565
	    },
	    "type": "program_ondemand",
	    "thumbs": null,
	    "chatgroup_id": 0,
	    "description": ""
    }]
}

```
#### 获取点播节目
```
/v6/media/programs/2112799 #{program_id}

返回结果 具体节目

{
    "errorno": 0,
    "errormsg": "",
    "data": {
       "chatgroup_id": 0,
       "description": "",
       "detail": {
          "authors": [],
          "broadcasters": []
       },
       "duration": 1180.36,
       "id": 2112799,
       "mediainfo": {
           "bitrates_url": [
               {
                    "bitrate": 24,
                    "file_path": "vod/00/00/0000000000000000000024714128_24.m4a?u=525&channelId=&programId=2112799",
                    "qetag": "Fm2nx3_1N1ezKbkD-g0hHGF7vfnF"
               }
           ],        
           "duration": 1180.36,
           "id": 3132312
       },
       "original_fee": 0,
       "price": 0,
       "redirect_url": "",
       "sale_status": "free",
       "sequence": 1,
       "thumbs": null,
       "title": "凶宅笔记第一部_001",
       "type": "program_ondemand",
       "update_time": "2016-11-14 10:53:53",
       "weburl": "http://m.qingting.fm/vchannels/2112799/programs/2112799"
    }
  }
```
#### 获取指定点播电台的推荐电台列表
```
/v6/media/channelondemands/#{channel_id}/recommends/curpage/#{curpage}/pagesize/#{pagesize}

返回数据
{
  data: [
     {
        "auto_play": 0,
        "category_id": 521,
        "description": "所谓的凶宅就是曾经里面有人横死过的房子。这种死亡的人传说中因为阳寿并没有过完，所以死的会很不甘心。凶宅也会因为他们的作祟而价格狂跌。而我，就是一个专门买卖凶宅，除鬼后倒卖的生意人……",
        "detail": {},
        "id": 85182,
        "is_finished": 1,
        "latest_program": "凶宅笔记001",
        "playcount": "2396.3万",
        "sale_props": "",
        "sale_type": 0,
        "score": 10,
        "thumbs": {
             "200_thumb": "http://pic.qingting.fm/2014/1126/20141126052926603.jpg!200",
             "400_thumb": "http://pic.qingting.fm/2014/1126/20141126052926603.jpg!400",
             "800_thumb": "http://pic.qingting.fm/2014/1126/20141126052926603.jpg!800",
             "large_thumb": "http://pic.qingting.fm/2014/1126/20141126052926603.jpg!large",
             "medium_thumb": "http://pic.qingting.fm/2014/1126/20141126052926603.jpg!medium",
             "small_thumb": "http://pic.qingting.fm/2014/1126/20141126052926603.jpg!small"
        },
        "title": "凶宅笔记第二部",
        "type": "channel_ondemand",
        "update_time": "2014-08-13 16:56:18",
        "weburl": "http://m.qingting.fm/vchannels/85182"
    }
    ...
  ],
  "errcode": 0,
  "errmsg": null,
  "errorno": 0,
  "page": 1,
  "pagesize": 30,
  "total": 249
```

#### 点击播放
```
/vod/00/00/0000000000000000000024139635_64.m4a
```
#### 获取点播分类推荐

精选推荐

```
 精选推荐section_id为0

```

```
/v6/media/recommends/guides/section/#{section_id}

返回参数
{
    "errorno": 0,
    "errormsg": "",
    "data": [
     {
       "brief_name": "读诗",
       "name": "读懂一首诗",
       "recommends": [
        {
              "detail": {
                  "channel_star": 6,
                  "chatgroup_id": 0,
                  "description": "",
                  "detail": {},
                  "duration": 2264,
                  "id": 6974453,
                  "mediainfo": {},
                  "original_fee": 0,
                  "price": 0,
                  "redirect_url": "",
                  "sale_status": "",
                  "sequence": 0,
                  "thumbs": null,
                  "title": "170414期：攻陷好莱坞",
                  "type": "program_ondemand",
                  "update_time": "2017-04-20 23:56:00"
              },
              "id": 2001,
              "object_id": 6974453,
              "parent_info": {
                  "parent_extra": {
                        "category_id": 3251,
                        "tag": ""
                  },
                  "parent_id": 212192,
                  "parent_name": "晓说 2017",
                  "parent_type": "channel_ondemand"
              },
              "sequence": 1,
              "sub_title": "",
              "thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg",
              "thumbs": {
                  "large_thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg!large",
                  "medium_thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg!medium",
                  "small_thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg!small"
              },
              "title": "攻陷好莱坞",
              "update_time": "2017-04-21 00:00:38"
    ...］
  }

```

#### 获取直播banner内容
```
/v6/media/recommend/live/banner

返回数据
{
    errorno: 0,
    errormsg: "",
    data: [
        {
            brief_name: "",
            name: "banner",
            recommends: [
                {
                    detail: {
                        audience_count: 2632124,
                        award_desc: "",
                        award_open: 0,
                        award_text: "",
                        category_id: 5,
                        chatgroup_id: 0,
                        description: "北京音乐广播（调频97.4兆赫、有线调频94.6兆赫）是北京人民广播电台的八个专业广播之一，是以有社会责任感、以年轻人为主要对象、引导时尚为品牌核心的现代化音乐电台。",
                        freq: "",
                        id: 332,
                        link_id: 0,
                        mediainfo: {
                            id: 332
                        },
                        sale_props: "",
                        sale_type: 0,
                        stream_status: 0,
                        thumbs: -{
                            200_thumb: "http://pic.qingting.fm/2015/0828/20150828111022698.jpg!200",
                            400_thumb: "http://pic.qingting.fm/2015/0828/20150828111022698.jpg!400",
                            800_thumb: "http://pic.qingting.fm/2015/0828/20150828111022698.jpg!800",
                            large_thumb: "http://pic.qingting.fm/2015/0828/20150828111022698.jpg!large",
                            medium_thumb: "http://pic.qingting.fm/2015/0828/20150828111022698.jpg!medium",
                            small_thumb: "http://pic.qingting.fm/2015/0828/20150828111022698.jpg!small"
                        },
                        title: "北京音乐广播",
                        type: "channel_live",
                        update_time: "2016-01-14 17:25:38"
                    },
                    id: 960001,
                    object_id: 332,
                    parent_info: null,
                    sequence: 1,
                    sub_title: "",
                    thumb: "http://pic.qingting.fm/2016/0822/20160822100321355.jpg",
                    thumbs: {
                        large_thumb: "http://pic.qingting.fm/2016/0822/20160822100321355.jpg!large",
                        medium_thumb: "http://pic.qingting.fm/2016/0822/20160822100321355.jpg!medium",
                        small_thumb: "http://pic.qingting.fm/2016/0822/20160822100321355.jpg!small"
                    },
                    title: "北京音乐广播",
                    update_time: "2016-08-22 10:03:21"
                },
                ...
          ]
       }
   ]
  }
```

#### 搜索
```
/api/newsearch/findvt?k=lol&groups=all&type=newcms&curpage=1&pagesize=5

//搜索分组类别
"groupValue":['channel_ondemand','program_ondemand','people_podcaster','program_live','channel_live','program_temp']

返回参数
{
	 "title": "搜索结果",
	 "data":[{
	    "groupValue": "channel_ondemand",
	    "doclist": {
	        "numFound": 475,
	        "start": 0,
	        "maxScore": 9.556501,
	        "docs": [
	            {
	                "updatetime": 1489389828,
	                "description": "小智是LOL最幽默的草根解说，每期出的视频备受追捧，主要归于那YD却又销魂的笑声，那贱贱的却富含磁性的嗓音，解说各种调侃十分娱乐，独特的风格，少儿不宜的解说引领着LOL新的时尚。",
	                "title": "LoL超级小智",
	                "podcaster": "游戏攻略大法",
	                "idx_id": "radio_channel_125316",
	                "cover": "http://pic.qingting.fm/2014/1110/20141110042540303.png!200",
	                "rank": 1,
	                "keywords": "游戏攻略大法",
	                "category_id": 3427,
	                "type": "channel_ondemand",
	                "id": 125316,
	                "category_name": "游戏动漫",
	                "score": 0.7825939,
	                "totalscore": 9.556501
	            },
	            {
	                "updatetime": 1435224470,
	                "description": "听着音乐超神！",
	                "title": "LOL超神必备",
	                "podcaster": "游音乐",
	                "idx_id": "radio_channel_99444",
	                "cover": "http://pic.qingting.fm/2015/0311/20150311055820645.jpg!200",
	                "rank": 1,
	                "keywords": "游音乐",
	                "category_id": 3221,
	                "type": "channel_ondemand",
	                "id": 99444,
	                "category_name": "游戏",
	                "score": 0.4395501,
	                "totalscore": 2.6074488
	            },
	            {
	                "updatetime": 1491283961,
	                "description": "¡Let's español!是一个关于西班牙语、西班牙语学习、西班牙趣闻的中、英、西三语节目。\r\n\r\n主播是来自西班牙的Tony和英语专业的Lucía.",
	                "title": "西班牙语¡Let's español!",
	                "podcaster": "Lucia",
	                "idx_id": "radio_channel_140632",
	                "cover": "http://pic.qingting.fm/2016/0309/20160309153901619.jpg!200",
	                "rank": 1,
	                "keywords": "Lucia",
	                "category_id": 537,
	                "type": "channel_ondemand",
	                "id": 140632,
	                "category_name": "教育",
	                "score": 0.32606032,
	                "totalscore": 0.44018143
	            },
	            {
	                "updatetime": 1445591996,
	                "description": "from武汉轻工大学",
	                "title": "Alva",
	                "podcaster": "Alva",
	                "idx_id": "radio_channel_131646",
	                "cover": "http://pic.qingting.fm/2015/1023/20151023171701689.jpg!200",
	                "rank": 1,
	                "keywords": "Alva",
	                "category_id": 1737,
	                "type": "channel_ondemand",
	                "id": 131646,
	                "category_name": "校园",
	                "score": 0.26929748,
	                "totalscore": 0.3635516
	            },
	            {
	                "updatetime": 1445592112,
	                "description": "from武汉轻工大学",
	                "title": "Shirly",
	                "podcaster": "Shirly",
	                "idx_id": "radio_channel_131650",
	                "cover": "http://pic.qingting.fm/2015/1023/201510231718501.jpg!200",
	                "rank": 1,
	                "keywords": "Shirly",
	                "category_id": 1737,
	                "type": "channel_ondemand",
	                "id": 131650,
	                "category_name": "校园",
	                "score": 0.25708258,
	                "totalscore": 0.34706149
	            },
	            {
	                "updatetime": 1492344063,
	                "description": "没有一朵小花会拒绝绽放。Lulu愿与你同行，我们一起来读书，和孩子们一起成长~准备好了吗？让我们一起来聆听成长的声音！\n第一本有声读物《天蓝色的彼岸》——一次温暖的关于生命和死亡的启蒙\n坚定无畏的写实作品——《听见颜色的女孩》",
	                "title": "成长的声音——Lulu故事屋",
	                "podcaster": "Lulu",
	                "idx_id": "radio_channel_140096",
	                "cover": "http://pic.qingting.fm/2016/0113/20160113003351431.png!200",
	                "rank": 1,
	                "keywords": "Lulu",
	                "category_id": 537,
	                "type": "channel_ondemand",
	                "id": 140096,
	                "category_name": "教育",
	                "score": 0.25200897,
	                "totalscore": 0.3402121
	            },
	            {
	                "updatetime": 1480525927,
	                "description": "拒绝模棱两可，拒绝见风使舵，只说具有指导意义的股市分析。",
	                "title": "L股市逻辑",
	                "podcaster": "L股市逻辑",
	                "idx_id": "radio_channel_177228",
	                "cover": "http://pic.qingting.fm/2016/0822/20160822130008791.png!200",
	                "rank": 1,
	                "keywords": "L股市逻辑",
	                "category_id": 533,
	                "type": "channel_ondemand",
	                "id": 177228,
	                "category_name": "财经",
	                "score": 0.24057034,
	                "totalscore": 0.32476994
	            },
	            {
	                "updatetime": 1429846923,
	                "description": "《洛丽塔》（Lolita），又译为《洛莉塔》、《洛丽泰》、《罗莉泰》，是作者弗拉基米尔·纳博科夫流传最广的作品，绝大部分篇幅是死囚亨伯特的自白，叙述了一个中年男子与一个未成年少女的恋爱故事。小说最初未获准在美国发行，于1955年首次被欧洲巴黎奥林匹亚出版社出版。1958年终于出版了美国版，作品一路蹿升到《纽约时报》畅销书单的第一位。《洛丽塔》已被改编成电影。",
	                "title": "洛丽塔 Lolita",
	                "podcaster": "英语有声书库",
	                "idx_id": "radio_channel_104142",
	                "cover": "http://pic.qingting.fm/2015/0424/20150424114234385.jpg!200",
	                "rank": 1,
	                "keywords": "英语有声书库",
	                "category_id": 543,
	                "type": "channel_ondemand",
	                "id": 104142,
	                "category_name": "外语",
	                "score": 0.23342559,
	                "totalscore": 0.31512454
	            },
	            {
	                "updatetime": 1470367361,
	                "description": "新浪微博: 晓月-Helen\r\n微信公众号: helenxworld（Helen晓世界）\r\n我曾经朝九晚五忙忙碌碌，也有过自由自在间隔年，但十年来探索世界的脚步却从未停歇。愿与你分享一路上的点滴，希望那些小小的经验和教训，能让你的旅途少走弯路，留下最美好的回忆。",
	                "title": "Helen晓世界",
	                "podcaster": "Helen晓世界",
	                "idx_id": "radio_channel_167510",
	                "cover": "http://pic.qingting.fm/2016/0727/20160727133725749.png!200",
	                "rank": 1,
	                "keywords": "Helen晓世界",
	                "category_id": 3597,
	                "type": "channel_ondemand",
	                "id": 167510,
	                "category_name": "旅游",
	                "score": 0.23286009,
	                "totalscore": 0.31436113
	            },
	            {
	                "updatetime": 1492437889,
	                "description": "●顶级同声传译Albert带你看英文报道大事小事新鲜事\n●跟着Albert轻松学习最新最实用的英文吧\n●节目文本、单词短语、丰富课程请关注\n【公众号：Albert英语研习社】 \n\n主播：周邦琴Albert\n●没有名牌大学背景，没有英语专业背景\n●没有国外留学经历，没有英语生活环境\n●自学成为同声传译，25岁为瑞士总统翻译\n  28岁为第一夫人翻译",
	                "title": "Albert说英闻",
	                "podcaster": "Albert英语研习社",
	                "idx_id": "radio_channel_208694",
	                "cover": "http://pic.qingting.fm/2017/03/02/partner_658b285ee8f9f7b91e2423b180a70b77.jpg!200",
	                "rank": 1,
	                "keywords": "Albert英语研习社",
	                "category_id": 537,
	                "type": "channel_ondemand",
	                "id": 208694,
	                "category_name": "教育",
	                "score": 0.23277193,
	                "totalscore": 0.31424212
	            },
	            {
	                "updatetime": 1465650107,
	                "description": "愿我的声音能够给你这一刻的静谧，去聆听内心深处最真实的声音。 \r\n《孩子，你的吉他在等你》 \r\n《冷月无声，你踏月而来》 \r\n《不为治愈，只为温暖》 ……",
	                "title": "You''ll be okey",
	                "podcaster": "小唱",
	                "idx_id": "radio_channel_152530",
	                "cover": "http://pic.qingting.fm/2016/0614/20160614223211303.png!200",
	                "rank": 1,
	                "keywords": "小唱",
	                "category_id": 529,
	                "type": "channel_ondemand",
	                "id": 152530,
	                "category_name": "情感",
	                "score": 0.2306272,
	                "totalscore": 0.3113467
	            },
	            {
	                "updatetime": 1470307308,
	                "description": "每天一个专业有声故事，来自全球绘本精选。",
	                "title": "美Li讲故事",
	                "podcaster": "美Li看绘本",
	                "idx_id": "radio_channel_137590",
	                "cover": "http://pic.qingting.fm/2016/0115/20160115144939647.jpg!200",
	                "rank": 1,
	                "keywords": "美Li看绘本",
	                "category_id": 1599,
	                "type": "channel_ondemand",
	                "id": 137590,
	                "category_name": "儿童",
	                "score": 0.21985766,
	                "totalscore": 0.29680786
	            },
	            {
	                "updatetime": 1387172124,
	                "description": "她明明长着天使一样的面孔，怎么有颗恶魔一样的心灵阿！整个一新时代恶作剧之王！什么？还不许人叫她LOLI？有没有搞错，这么无厘头？其实，她就是个神经质少女！",
	                "title": "别叫我LOLI",
	                "podcaster": "",
	                "idx_id": "radio_channel_44106",
	                "cover": "http://pic.qingting.fm/2014/1023/20141023114938888.jpg!200",
	                "rank": 1,
	                "keywords": "芽子",
	                "category_id": 521,
	                "type": "channel_ondemand",
	                "id": 44106,
	                "category_name": "小说",
	                "score": 0.21925712,
	                "totalscore": 0.2959971
	            },
	            {
	                "updatetime": 1472697787,
	                "description": "",
	                "title": "L&L",
	                "podcaster": "ListeningandLearning",
	                "idx_id": "radio_channel_144254",
	                "cover": "http://pic.qingting.fm/2016/0303/20160303162244158.png!200",
	                "rank": 1,
	                "keywords": "ListeningandLearning",
	                "category_id": 537,
	                "type": "channel_ondemand",
	                "id": 144254,
	                "category_name": "教育",
	                "score": 0.21898277,
	                "totalscore": 0.29562673
	            },
	            {
	                "updatetime": 1490286173,
	                "description": "孩子枕边的有声故事屋，每晚伴你甜蜜入睡。",
	                "title": "Lu Lu姐姐哄你入睡",
	                "podcaster": "LuLu姐姐故事屋",
	                "idx_id": "radio_channel_208800",
	                "cover": "http://pic.qingting.fm/2017/03/12/partner_a17bc0206aa27b7ed92bba3c956a85b3.jpg!200",
	                "rank": 1,
	                "keywords": "LuLu姐姐故事屋",
	                "category_id": 1599,
	                "type": "channel_ondemand",
	                "id": 208800,
	                "category_name": "儿童",
	                "score": 0.21854967,
	                "totalscore": 0.29504204
	            },
	            {
	                "updatetime": 1467006397,
	                "description": "你是否看了一部好作品不知道如何更好的安利？你是否看了一部坏作品不知道如何更好的批驳？ 你是不是想知道创作者为什么那么编故事？ Philstrike剧情谈，一个谈剧情，谈创作剧情原因的栏目！",
	                "title": "Phil·strike剧情谈",
	                "podcaster": "Philstrike",
	                "idx_id": "radio_channel_162172",
	                "cover": "http://pic.qingting.fm/2016/0624/20160624125454720.png!200",
	                "rank": 1,
	                "keywords": "Philstrike",
	                "category_id": 3427,
	                "type": "channel_ondemand",
	                "id": 162172,
	                "category_name": "游戏动漫",
	                "score": 0.21766853,
	                "totalscore": 0.2938525
	            },
	            {
	                "updatetime": 1460100233,
	                "description": "分享简单实用的英文口语，更多英语资讯欢迎关注微信公众号：SmethilyFM",
	                "title": "和Emily一起练口语",
	                "podcaster": "英语主播Emily",
	                "idx_id": "radio_channel_141104",
	                "cover": "http://pic.qingting.fm/2016/0121/20160121180453651.jpg!200",
	                "rank": 1,
	                "keywords": "英语主播Emily",
	                "category_id": 537,
	                "type": "channel_ondemand",
	                "id": 141104,
	                "category_name": "教育",
	                "score": 0.21608351,
	                "totalscore": 0.29171273
	            },
	            {
	                "updatetime": 1477044668,
	                "description": "sle人自己的电台\nsle人自己的sle故事\n更多sle故事请关注微信公众号“sle互助圈”",
	                "title": "sle故事",
	                "podcaster": "sle互助圈",
	                "idx_id": "radio_channel_119406",
	                "cover": "http://pic.qingting.fm/2015/0817/20150817140012141.jpg!200",
	                "rank": 1,
	                "keywords": "sle互助圈",
	                "category_id": 539,
	                "type": "channel_ondemand",
	                "id": 119406,
	                "category_name": "健康",
	                "score": 0.21469057,
	                "totalscore": 0.28983226
	            },
	            {
	                "updatetime": 1474272701,
	                "description": "关注微信订阅号：ienglish521  回复：ESL，获取相应《esl pod》学习文档。\r\n 关于 ESLPod ESL专题节目系列教材合集，请参见恶魔的奶爸的书 《把你的英语用起来》，是一本又励志又有独特方法的好书，建议努力学英语的大家都来看看。 \r\n其中对我们比较有用的是这6本。",
	                "title": "ESL Pod 6本教材",
	                "podcaster": "力哥爱英语",
	                "idx_id": "radio_channel_185120",
	                "cover": "http://pic.qingting.fm/2016/0918/20160918173815479.png!200",
	                "rank": 1,
	                "keywords": "力哥爱英语",
	                "category_id": 543,
	                "type": "channel_ondemand",
	                "id": 185120,
	                "category_name": "外语",
	                "score": 0.2072407,
	                "totalscore": 0.27977493
	            },
	            {
	                "updatetime": 1474820134,
	                "description": "传播酒类知识，调酒基础理论知识，红酒酒庄，认识产区，威士忌知识，白兰地等等。。。的理论知识。当然肯定涉及到历史、地理、人文等等。所以这不是简简单单的理论课程哟。假如把葡萄酒的历史抛开，地理人文等等全部抛开，它只是一种单纯的葡萄饮品罢了，品酒可不是单单品尝口感更不是在品尝价格，而是品尝酒庄的历史、风土、人文等等，而且最重要的是酿酒师们的心。知道了这些也就是说可以真正的去寻找你心中的那份“独一无二”。",
	                "title": "Bartender Li的酒类理论小教室",
	                "podcaster": "BartenderLi",
	                "idx_id": "radio_channel_182392",
	                "cover": "http://pic.qingting.fm/2016/0909/20160909010924264.png!200",
	                "rank": 1,
	                "keywords": "BartenderLi",
	                "category_id": 3613,
	                "type": "channel_ondemand",
	                "id": 182392,
	                "category_name": "文化",
	                "score": 0.20674077,
	                "totalscore": 0.27910003
	            },
	            {
	                "updatetime": 1475329362,
	                "description": "K.C.L工作室出品 原创古风玄幻系列广播剧《山海异闻录》",
	                "title": "《山海异闻录》【K.C.L工作室出品】",
	                "podcaster": "KCL工作室",
	                "idx_id": "radio_channel_162240",
	                "cover": "http://pic.qingting.fm/2016/0624/20160624170105437.png!200",
	                "rank": 1,
	                "keywords": "KCL工作室",
	                "category_id": 3442,
	                "type": "channel_ondemand",
	                "id": 162240,
	                "category_name": "广播剧",
	                "score": 0.20296581,
	                "totalscore": 0.27400383
	            },
	            {
	                "updatetime": 1488714969,
	                "description": "秒懂大中型企业Linux关键应用的那些事儿",
	                "title": "Linux最强音随身听",
	                "podcaster": "LinuxONE中国社区",
	                "idx_id": "radio_channel_205884",
	                "cover": "http://pic.qingting.fm/2017/01/15/partner_8a772b92995da6aa0c799e0301ab3ece.png!200",
	                "rank": 1,
	                "keywords": "LinuxONE中国社区",
	                "category_id": 535,
	                "type": "channel_ondemand",
	                "id": 205884,
	                "category_name": "科技",
	                "score": 0.2000559,
	                "totalscore": 0.27007547
	            },
	            {
	                "updatetime": 1386750278,
	                "description": "全球历史最久、最受欢迎、收听人数最多的英语播客",
	                "title": "ESL",
	                "podcaster": "生活英语练起来",
	                "idx_id": "radio_channel_42344",
	                "cover": "http://pic.qingting.fm/2014/1028/20141028025004523.jpg!200",
	                "rank": 1,
	                "keywords": "生活英语练起来",
	                "category_id": 543,
	                "type": "channel_ondemand",
	                "id": 42344,
	                "category_name": "外语",
	                "score": 0.19980012,
	                "totalscore": 0.26973015
	            },
	            {
	                "updatetime": 1492764634,
	                "description": "来自美国的Julia，给小朋友们带来双语绘本故事啦，一句英语一句中文，让孩子们对学习英语的兴趣更大啦！",
	                "title": "Julia的美语绘本故事双语版",
	                "podcaster": "Julia美语绘本故事",
	                "idx_id": "radio_channel_199678",
	                "cover": "http://pic.qingting.fm/2016/12/08/partner_16b08459794f90ba8ce995e166778d55.jpg!200",
	                "rank": 1,
	                "keywords": "Julia美语绘本故事",
	                "category_id": 1599,
	                "type": "channel_ondemand",
	                "id": 199678,
	                "category_name": "儿童",
	                "score": 0.19726878,
	                "totalscore": 0.26631287
	            },
	            {
	                "updatetime": 1482936077,
	                "description": "二次元常规节目",
	                "title": "一起来LU二次元-常规节目",
	                "podcaster": "一起来lu二次元",
	                "idx_id": "radio_channel_181972",
	                "cover": "http://pic.qingting.fm/2016/0901/20160901165229339.png!200",
	                "rank": 1,
	                "keywords": "一起来lu二次元",
	                "category_id": 3427,
	                "type": "channel_ondemand",
	                "id": 181972,
	                "category_name": "游戏动漫",
	                "score": 0.19675297,
	                "totalscore": 0.2656165
	            },
	            {
	                "updatetime": 1444288277,
	                "description": "口语聊 Koolchat why here is a K,We just want to make it cooler! 流行英语 时尚话题！趣味的聊天。这里就是 口语聊Koolchat! Making you feel cool every week!QQ 群号码：460647558",
	                "title": "Koolchat口语聊",
	                "podcaster": "Jackie Shen",
	                "idx_id": "radio_channel_124750",
	                "cover": "http://pic.qingting.fm/2015/0908/2015090811345453.jpg!200",
	                "rank": 1,
	                "keywords": "Jackie Shen",
	                "category_id": 537,
	                "type": "channel_ondemand",
	                "id": 124750,
	                "category_name": "教育",
	                "score": 0.19538537,
	                "totalscore": 0.26377025
	            },
	            {
	                "updatetime": 1418189603,
	                "description": "《xxxHOLiC》的配乐合集",
	                "title": "《xxxHOLiC》配乐合集",
	                "podcaster": "动漫之声",
	                "idx_id": "radio_channel_87524",
	                "cover": "http://pic.qingting.fm/2014/1226/20141226033839929.jpg!200",
	                "rank": 1,
	                "keywords": "动漫之声",
	                "category_id": 3427,
	                "type": "channel_ondemand",
	                "id": 87524,
	                "category_name": "游戏动漫",
	                "score": 0.1942253,
	                "totalscore": 0.26220414
	            },
	            {
	                "updatetime": 1485176022,
	                "description": "直播专区音频  直播萌娃听双语故事，更多互动",
	                "title": "爱Lisa  直播专区音频",
	                "podcaster": "爱Lisa",
	                "idx_id": "radio_channel_205312",
	                "cover": "http://pic.qingting.fm/2017/01/09/partner_5ba0c56041abfa5c1a38ec42f04efe6c.jpg!200",
	                "rank": 1,
	                "keywords": "爱Lisa",
	                "category_id": 537,
	                "type": "channel_ondemand",
	                "id": 205312,
	                "category_name": "教育",
	                "score": 0.19254825,
	                "totalscore": 0.25994012
	            },
	            {
	                "updatetime": 1492151874,
	                "description": "chili是英文辣椒，日文汉字“唐辛子”，在日的国人多以此自居。ko为“子”的发音。就是这个自造词，chiliko！ 希望大家可以更好的看见一个真实的日本",
	                "title": "chiliko聊日本",
	                "podcaster": "四零様",
	                "idx_id": "radio_channel_209864",
	                "cover": "http://pic.qingting.fm/2017/03/15/partner_7e19838dc2fe61764ed67536eee48bec.jpg!200",
	                "rank": 1,
	                "keywords": "四零様",
	                "category_id": 3251,
	                "type": "channel_ondemand",
	                "id": 209864,
	                "category_name": "脱口秀",
	                "score": 0.19150972,
	                "totalscore": 0.25853813
	            },
	            {
	                "updatetime": 1492671251,
	                "description": "让那些歌儿成为我们记忆中的影子~\n让晓语和你一起静听你我的百味人生~",
	                "title": "Loving~Music",
	                "podcaster": "晓语♧Love life",
	                "idx_id": "radio_channel_211666",
	                "cover": "http://pic.qingting.fm/2017/04/18/partner_aecc0f153b84a7149be57a57e7abed5f.jpg!200",
	                "rank": 1,
	                "keywords": "晓语♧Love life",
	                "category_id": 529,
	                "type": "channel_ondemand",
	                "id": 211666,
	                "category_name": "情感",
	                "score": 0.18857491,
	                "totalscore": 0.25457612
	            }
	        ]
	    }
	}]
}
```


## 用户
```
1、获取用户信息，其中user_id如上
/v2/user/user_id/gethistory

返回的参数

{
    "errorno": 0,
    "errormsg": "",
    "expiredtime": 1492855734.219912,
    "data": "[{\"pid\":3235227,\"pname\":\"盗墓笔记8大结局（下） 第21集\",\"resid\":4048939,\"cid\":78160,\"cname\":\"盗墓笔记 8部完整版【周建龙演播】\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2015\\/0818\\/20150818113341770.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1492487681},{\"pid\":4179043,\"pname\":\"黄金瞳 第80集\",\"resid\":4947742,\"cid\":147754,\"cname\":\"黄金瞳\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2017\\/0417\\/2017041710334189.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1492487609},{\"pid\":1993327,\"pname\":\"天才召唤师_1\",\"resid\":2841887,\"cid\":75420,\"cname\":\"天才召唤师\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2015\\/0727\\/20150727180049359.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1492486733},{\"pid\":4589166,\"pname\":\"第八集：英雄末路\",\"resid\":5315150,\"cid\":160534,\"cname\":\"王立群说项羽\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/0616\\/20160616162024241.jpg!200\",\"ctype\":1,\"catid\":531,\"playtime\":1492420113},{\"pid\":6804769,\"pname\":\"纳粹德国的“帝国之鹰”：古德里安\",\"resid\":7030806,\"cid\":140672,\"cname\":\"军林史话\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/0217\\/20160217113458114.jpg!200\",\"ctype\":1,\"catid\":531,\"playtime\":1491806556},{\"pid\":6907612,\"pname\":\"【高莉掌门笑傲江湖】敢恶搞皇帝，让鳌拜卖萌，故宫这位新院长有点儿意思！\",\"resid\":7120788,\"cid\":151964,\"cname\":\"今日简读\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/1208\\/20161208142220884.jpg!200\",\"ctype\":1,\"catid\":545,\"playtime\":1491706195},{\"pid\":4147278,\"pname\":\"欢乐喜剧人2第九期作品--《电台风云》\",\"resid\":4917260,\"cid\":146636,\"cname\":\"岳云鹏孙越欢乐喜剧人专辑\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/1111\\/20161111193635517.jpg!200\",\"ctype\":1,\"catid\":527,\"playtime\":1491548671},{\"pid\":2750390,\"pname\":\"《我要幸福》岳云鹏 孙越\",\"resid\":3573218,\"cid\":101244,\"cname\":\"岳云鹏相声精选集\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/1111\\/20161111192645347.jpg!200\",\"ctype\":1,\"catid\":527,\"playtime\":1491535388},{\"pid\":6880687,\"pname\":\"0405期：叶童自称很感恩张国荣\",\"resid\":7095593,\"cid\":96988,\"cname\":\"金星秀\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2015\\/0203\\/20150203044607164.jpg!200\",\"ctype\":1,\"catid\":3251,\"playtime\":1491532265},{\"pid\":3903272,\"pname\":\"超级贴身保镖  第3集\",\"resid\":4682655,\"cid\":140366,\"cname\":\"超级贴身保镖\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/0118\\/20160118150049333.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1491474872},{\"pid\":6850879,\"pname\":\"【6日限时八折 每集0.3元】人民的名义001\",\"resid\":7070565,\"cid\":211852,\"cname\":\"人民的名义\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2017\\/0401\\/20170401144042345.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1491468850},{\"pid\":1486469,\"pname\":\"鬼吹灯2之龙岭迷窟_31\",\"resid\":2881411,\"cid\":77146,\"cname\":\"鬼吹灯全集【周建龙经典版】\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/0812\\/20160812110518422.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1491381447},{\"pid\":25684,\"pname\":\"爱购爱生活\",\"resid\":1270,\"cid\":1270,\"cname\":\"深圳先锋898\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2013\\/channel_logo\\/1270.jpg!200\",\"ctype\":0,\"catid\":5,\"playtime\":1491024049},{\"pid\":5969980,\"pname\":\"《灾难推理》002集\",\"resid\":6357209,\"cid\":196894,\"cname\":\"灾难推理\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/11\\/28\\/partner_cf9f09e22718d380bbde96b5ca98d20d.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1488383343},{\"pid\":6160009,\"pname\":\"寻龙诀之淮水神窟01\",\"resid\":6500349,\"cid\":201318,\"cname\":\"寻龙诀之淮水神窟\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2016\\/12\\/16\\/partner_51d3e5b4a636a6cfd7241829a26ffdb5.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1488380005},{\"pid\":3091210,\"pname\":\"秘密笔记1 第10集\",\"resid\":3924446,\"cid\":112866,\"cname\":\"一个神秘事件调查员的秘密笔记（全集）\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2017\\/0208\\/20170208113338254.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1488378699},{\"pid\":1426826,\"pname\":\"雍正皇帝一_1\",\"resid\":2920631,\"cid\":78300,\"cname\":\"雍正皇帝全集\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2014\\/0824\\/20140824040318992.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1488181944},{\"pid\":5256133,\"pname\":\"诡案罪1：致命危桥-02\",\"resid\":5817879,\"cid\":181280,\"cname\":\"诡案罪\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2017\\/0216\\/20170216122308484.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1488180595},{\"pid\":6013496,\"pname\":\"064章 阴差\",\"resid\":6391852,\"cid\":195514,\"cname\":\"阴差\",\"cavatar\":\"http:\\/\\/pic.qingting.fm\\/2017\\/0208\\/20170208120545161.jpg!200\",\"ctype\":1,\"catid\":521,\"playtime\":1488007892}]"
}
```


## Http请求部分

参考[Axios](https://github.com/mzabriskie/axios)
