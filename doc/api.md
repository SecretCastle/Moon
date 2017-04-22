# 准备

## 目录
- [deviceid和userid](#deviceid和userid)
- [API准备](#a#pi准备)
	- [服务器](###服务器)
	- [api使用](###api使用)
		- [获取分类](####1、获取分类)
		- [点击某分类，此次点击521](####2、点击某分类，此次点击521)
		- [点击某一个产品如id为174180下的列表](####3、点击某一个产品如id为174180下的列表)
		- [点击播放](####4、点击播放)
		- [获取首页推荐banner](####5、获取首页推荐banner)
		- [获取某个分类下banner](####6、获取某个分类下banner)
	- [用户](###用户)
	- [Http请求部分](###Http请求部分)

## deviceid 和 userid

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
```

### api使用

#### 1、获取分类
```
/v6/media/categories 

返回的参数
{
	"errorno": 0,
	"errormsg": "",
	"data": [{
		"id": 521,
		"name": "小说",
		"sequence": 1,
		"section_id": 208,
		"type": "category"
	}, {
		"id": 3629,
		"name": "畅销小说",
		"sequence": 2,
		"section_id": 1115,
		"type": "category"
	}, {
		"id": 3617,
		"name": "精品内容",
		"sequence": 3,
		"section_id": 1011,
		"type": "category"
	}, {
		"id": 523,
		"name": "音乐",
		"sequence": 4,
		"section_id": 139,
		"type": "category"
	}, {
		"id": 545,
		"name": "头条",
		"sequence": 6,
		"section_id": 199,
		"type": "category"
	}, {
		"id": 527,
		"name": "相声小品",
		"sequence": 7,
		"section_id": 209,
		"type": "category"
	}, {
		"id": 3251,
		"name": "脱口秀",
		"sequence": 8,
		"section_id": 200,
		"type": "category"
	}, {
		"id": 529,
		"name": "情感",
		"sequence": 9,
		"section_id": 82,
		"type": "category"
	}, {
		"id": 539,
		"name": "健康",
		"sequence": 10,
		"section_id": 107,
		"type": "category"
	}, {
		"id": 531,
		"name": "历史",
		"sequence": 12,
		"section_id": 213,
		"type": "category"
	}, {
		"id": 1599,
		"name": "儿童",
		"sequence": 13,
		"section_id": 214,
		"type": "category"
	}, {
		"id": 547,
		"name": "娱乐",
		"sequence": 14,
		"section_id": 210,
		"type": "category"
	}, {
		"id": 3330,
		"name": "女性",
		"sequence": 15,
		"section_id": 204,
		"type": "category"
	}, {
		"id": 3252,
		"name": "搞笑",
		"sequence": 16,
		"section_id": 201,
		"type": "category"
	}, {
		"id": 537,
		"name": "教育",
		"sequence": 17,
		"section_id": 116,
		"type": "category"
	}, {
		"id": 1585,
		"name": "公开课",
		"sequence": 19,
		"section_id": 74,
		"type": "category"
	}, {
		"id": 3613,
		"name": "文化",
		"sequence": 20,
		"section_id": 893,
		"type": "category"
	}, {
		"id": 3496,
		"name": "评书",
		"sequence": 21,
		"section_id": 515,
		"type": "category"
	}, {
		"id": 3276,
		"name": "戏曲",
		"sequence": 22,
		"section_id": 217,
		"type": "category"
	}, {
		"id": 533,
		"name": "财经",
		"sequence": 23,
		"section_id": 215,
		"type": "category"
	}, {
		"id": 535,
		"name": "科技",
		"sequence": 24,
		"section_id": 216,
		"type": "category"
	}, {
		"id": 3385,
		"name": "汽车",
		"sequence": 25,
		"section_id": 207,
		"type": "category"
	}, {
		"id": 3238,
		"name": "体育",
		"sequence": 26,
		"section_id": 203,
		"type": "category"
	}, {
		"id": 1737,
		"name": "校园",
		"sequence": 27,
		"section_id": 166,
		"type": "category"
	}, {
		"id": 3427,
		"name": "游戏动漫",
		"sequence": 28,
		"section_id": 205,
		"type": "category"
	}, {
		"id": 3442,
		"name": "广播剧",
		"sequence": 29,
		"section_id": 206,
		"type": "category"
	}, {
		"id": 3588,
		"name": "影视",
		"sequence": 31,
		"section_id": 569,
		"type": "category"
	}, {
		"id": 3597,
		"name": "旅游",
		"sequence": 35,
		"section_id": 674,
		"type": "category"
	}, {
		"id": 3599,
		"name": "自媒体",
		"sequence": 37,
		"section_id": 732,
		"type": "category"
	}, {
		"id": 3600,
		"name": "品牌电台",
		"sequence": 38,
		"section_id": 751,
		"type": "category"
	}, {
		"id": 3605,
		"name": "时尚",
		"sequence": 40,
		"section_id": 818,
		"type": "category"
	}, {
		"id": 3608,
		"name": "中国之声",
		"sequence": 42,
		"section_id": 837,
		"type": "category"
	}, {
		"id": 3631,
		"name": "会员专区",
		"sequence": 53,
		"section_id": 1142,
		"type": "category"
	}]
}

```

#### 2、点击某分类，此次点击521
```
/v6/media/categories/521

返回参数
{
    "errorno": 0,
    "errormsg": "",
    "data": [
        {
            "id": 32,
            "name": "分类",
            "values": [
                {
                    "id": 2761,
                    "name": "评书名家",
                    "sequence": 1
                },
                {
                    "id": 2743,
                    "name": "青春校园",
                    "sequence": 1
                },
                {
                    "id": 2742,
                    "name": "穿越架空",
                    "sequence": 1
                },
                {
                    "id": 3182,
                    "name": "推理刑侦",
                    "sequence": 1
                },
                {
                    "id": 2762,
                    "name": "广播剧",
                    "sequence": 1
                },
                {
                    "id": 2745,
                    "name": "社科经管",
                    "sequence": 1
                },
                {
                    "id": 2744,
                    "name": "武侠仙侠",
                    "sequence": 1
                },
                {
                    "id": 517,
                    "name": "悬疑探险",
                    "sequence": 2
                },
                {
                    "id": 511,
                    "name": "惊悚灵异",
                    "sequence": 3
                },
                {
                    "id": 508,
                    "name": "玄幻超能",
                    "sequence": 4
                },
                {
                    "id": 518,
                    "name": "古风言情",
                    "sequence": 6
                },
                {
                    "id": 509,
                    "name": "现代言情",
                    "sequence": 8
                },
                {
                    "id": 510,
                    "name": "都市现代",
                    "sequence": 10
                },
                {
                    "id": 520,
                    "name": "官商职场",
                    "sequence": 11
                },
                {
                    "id": 516,
                    "name": "历史军事",
                    "sequence": 12
                },
                {
                    "id": 513,
                    "name": "文学小说",
                    "sequence": 13
                }
            ]
        },
        {
            "id": 33,
            "name": "热门作者",
            "values": [
                {
                    "id": 2748,
                    "name": "桐华",
                    "sequence": 1
                },
                {
                    "id": 2070,
                    "name": "天蚕土豆",
                    "sequence": 1
                },
                {
                    "id": 2747,
                    "name": "唐七公子",
                    "sequence": 1
                },
                {
                    "id": 2746,
                    "name": "Vivibear",
                    "sequence": 1
                },
                {
                    "id": 2109,
                    "name": "蔡骏",
                    "sequence": 1
                },
                {
                    "id": 2071,
                    "name": "我吃西红柿",
                    "sequence": 1
                },
                {
                    "id": 2107,
                    "name": "天下霸唱",
                    "sequence": 1
                },
                {
                    "id": 2147,
                    "name": "南派三叔",
                    "sequence": 1
                },
                {
                    "id": 2069,
                    "name": "江南",
                    "sequence": 1
                },
                {
                    "id": 2094,
                    "name": "孔二狗",
                    "sequence": 1
                },
                {
                    "id": 2072,
                    "name": "唐家三少",
                    "sequence": 1
                },
                {
                    "id": 2749,
                    "name": "严歌苓",
                    "sequence": 1
                }
            ]
        },
        {
            "id": 171,
            "name": "标签",
            "values": [
                {
                    "id": 2386,
                    "name": "热门排行",
                    "sequence": 1
                },
                {
                    "id": 3291,
                    "name": "主妇",
                    "sequence": 1
                },
                {
                    "id": 2045,
                    "name": "总裁",
                    "sequence": 1
                },
                {
                    "id": 2741,
                    "name": "盗墓",
                    "sequence": 1
                },
                {
                    "id": 2127,
                    "name": "影视原著",
                    "sequence": 1
                }
            ]
        },
        {
            "id": 187,
            "name": "属性",
            "values": [
                {
                    "id": 3258,
                    "name": "限时免费",
                    "sequence": 1
                },
                {
                    "id": 2135,
                    "name": "合集",
                    "sequence": 1
                },
                {
                    "id": 2079,
                    "name": "蜻蜓FM出品",
                    "sequence": 1
                },
                {
                    "id": 2126,
                    "name": "原创",
                    "sequence": 1
                },
                {
                    "id": 2174,
                    "name": "火爆完本",
                    "sequence": 1
                },
                {
                    "id": 2125,
                    "name": "出版",
                    "sequence": 1
                },
                {
                    "id": 2911,
                    "name": "付费精品",
                    "sequence": 14
                }
            ]
        },
        {
            "id": 265,
            "name": "性别",
            "values": [
                {
                    "id": 3289,
                    "name": "男频",
                    "sequence": 1
                },
                {
                    "id": 3290,
                    "name": "女频",
                    "sequence": 1
                }
            ]
        }
    ]
}
```
#### 2、点击某分类，获得分类（此为获得521下对前30个）
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
#### 3、点击某一个产品 如id为174180下的列表
```
/v6/media/channelondemands/211852/programs/order/0/curpage/1/pagesize/50?user_id=40e6c8b3a2f0074ca0fe7bc308db303d

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
#### 4、点击播放
```
/vod/00/00/0000000000000000000024139635_64.m4a
```
#### 5、获取首页推荐banner
```
/v6/media/recommends/guides/section/0

返回参数
{
	"errormsg": "",
   "errorno": 0,
   "data":[
		   {
		    "recommends": [
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 2264,
		                    "bitrates_url": [
		                        {
		                            "qetag": "lpW4p5iOqJz7VM_Rjr9-9k1WDwCF",
		                            "file_path": "m4a/58f85fe57cb8917260d75844_7178804_64.m4a",
		                            "bitrate": 62
		                        },
		                        {
		                            "qetag": "lsjVyXoxAtXomOU869gL5ZNZYz6D",
		                            "file_path": "m4a/58f85fe57cb8917260d75844_7178804_24.m4a",
		                            "bitrate": 22
		                        }
		                    ],
		                    "id": 7178804
		                },
		                "duration": 2264,
		                "id": 6974453,
		                "update_time": "2017-04-21 08:00:00",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 6,
		                "sequence": 0,
		                "title": "170414期：攻陷好莱坞",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "晓说 2017",
		                "parent_id": 212192,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 3251
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 2001,
		            "thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg",
		            "object_id": 6974453,
		            "sequence": 1,
		            "title": "攻陷好莱坞",
		            "update_time": "2017-04-21 00:00:38",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0420/20170420170518395.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 981,
		                    "bitrates_url": [
		                        {
		                            "qetag": "ltDxntGfE1ew7snmcHAArZQJJ_fe",
		                            "file_path": "m4a/568f82617b28aa1a6aff82d6_4656928_64.m4a",
		                            "bitrate": 62
		                        },
		                        {
		                            "qetag": "FnCFQ9hLaJ6Tdrl_w4lrTJFwrCyd",
		                            "file_path": "m4a/568f82617b28aa1a6aff82d6_4656928_24.m4a",
		                            "bitrate": 22
		                        }
		                    ],
		                    "id": 4656928
		                },
		                "duration": 981,
		                "id": 3873391,
		                "update_time": "2016-01-08 17:42:25",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 10,
		                "sequence": 0,
		                "title": "龙血战神 第1集",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "龙血战神",
		                "parent_id": 139706,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 521
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 2002,
		            "thumb": "http://pic.qingting.fm/2017/0417/20170417113627124.jpg",
		            "object_id": 3873391,
		            "sequence": 2,
		            "title": "吞食神龙精血，成就无上神尊",
		            "update_time": "2017-04-22 11:48:34",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0417/20170417113627124.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0417/20170417113627124.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0417/20170417113627124.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 1882,
		                    "bitrates_url": [
		                        {
		                            "qetag": "lr9Ar2Kfni4fBuuruopNQTdQPKhH",
		                            "file_path": "m4a/58aa95e67cb89166563b3b43_6818718_64.m4a",
		                            "bitrate": 62
		                        },
		                        {
		                            "qetag": "ll_C9l2F0LSAcOsBQPgMWs0I6v05",
		                            "file_path": "m4a/58aa95e67cb89166563b3b43_6818718_24.m4a",
		                            "bitrate": 22
		                        }
		                    ],
		                    "id": 6818718
		                },
		                "duration": 1882,
		                "id": 6547503,
		                "update_time": "2017-03-24 15:47:46",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 10,
		                "sequence": 0,
		                "title": "《童子尿煮鸡蛋》",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "郭德纲于谦相声精选",
		                "parent_id": 25888,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 527
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 2003,
		            "thumb": "http://pic.qingting.fm/2017/0421/20170421162111186.jpg",
		            "object_id": 6547503,
		            "sequence": 3,
		            "title": "于谦的祖父，5岁就死了",
		            "update_time": "2017-04-22 11:48:20",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0421/20170421162111186.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0421/20170421162111186.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0421/20170421162111186.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 1266,
		                    "bitrates_url": [
		                        {
		                            "qetag": "FlKClCXHxrx0CxkyckSswmMlC0y2",
		                            "file_path": "vod/00/00/0000000000000000000024429040_24.m4a",
		                            "bitrate": 24
		                        }
		                    ],
		                    "id": 3002335
		                },
		                "duration": 1266,
		                "id": 2144092,
		                "update_time": "2014-10-22 10:51:18",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 10,
		                "sequence": 0,
		                "title": "小马宝莉 第01集 友谊的魔力（上）",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "小马宝莉",
		                "parent_id": 80360,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 1599
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 2004,
		            "thumb": "http://pic.qingting.fm/2017/0412/20170412114108322.jpg",
		            "object_id": 2144092,
		            "sequence": 4,
		            "title": "关于友谊的魔法动画片",
		            "update_time": "2017-04-22 11:48:09",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0412/20170412114108322.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0412/20170412114108322.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0412/20170412114108322.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "url": "https://sss.qingting.fm/ipay/?activity_id=58f9ad7acfc6cc4e81e8282b",
		                "title": "全民读书日，精品限时5折！",
		                "id": 1133,
		                "network": "",
		                "type": "activity",
		                "thumb": "http://pic.qingting.fm/2017/0421/20170421204353958.jpg",
		                "description": "高值精品，只有2天，5折疯抢！不点开你可能就错过了一个亿"
		            },
		            "parent_info": null,
		            "id": 2005,
		            "thumb": "http://pic.qingting.fm/2017/0421/20170421204353958.jpg",
		            "object_id": 1133,
		            "sequence": 5,
		            "title": "全民读书日，精品限时5折！",
		            "update_time": "2017-04-22 11:48:45",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0421/20170421204353958.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0421/20170421204353958.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0421/20170421204353958.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 4638,
		                    "bitrates_url": [
		                        {
		                            "qetag": "lk2sNpoxEVYITOtgeTZe7XT7ijBt",
		                            "file_path": "m4a/58809a2d7cb891397863dfc8_6684770_64.m4a",
		                            "bitrate": 62
		                        },
		                        {
		                            "qetag": "ltFi4K8WTk3H0OPPhWabac4HHIVQ",
		                            "file_path": "m4a/58809a2d7cb891397863dfc8_6684770_24.m4a",
		                            "bitrate": 22
		                        }
		                    ],
		                    "id": 6684770
		                },
		                "duration": 4638,
		                "id": 6343390,
		                "update_time": "2017-01-13 12:10:42",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 6,
		                "sequence": 0,
		                "title": "【红楼梦】第一回 甄士隐梦幻识通灵 贾雨村风尘怀闺秀（1）",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "蒋勋人文经典合集全八部【限时特惠】 ",
		                "parent_id": 205768,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 3617
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 2006,
		            "thumb": "http://pic.qingting.fm/2017/0407/20170407113458793.jpg",
		            "object_id": 6343390,
		            "sequence": 6,
		            "title": "从这里开始，爱上文学",
		            "update_time": "2017-04-22 11:48:42",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0407/20170407113458793.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0407/20170407113458793.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0407/20170407113458793.jpg!large"
		            },
		            "sub_title": ""
		        }
		    ],
		    "sequence": 0,
		    "brief_name": "",
		    "section_id": 2,
		    "name": "banner",
		    "redirect": null
		}
   ] 
}

```

#### 6、获取某个分类下banner
```
注意：section_id 通过categories获取
/v6/media/recommends/guides/section/section_id

返回参数
{
	"errormsg": "",
    "errorno": 0,
    "data":[
    		{
		    "recommends": [
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 1387,
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
		                    "id": 7070565
		                },
		                "duration": 1387,
		                "id": 6850879,
		                "update_time": "2017-04-01 10:05:14",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 6,
		                "sequence": 0,
		                "title": "人民的名义001",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "人民的名义",
		                "parent_id": 211852,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 3629
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 1116001,
		            "thumb": "http://pic.qingting.fm/2017/0407/20170407144821519.jpg",
		            "object_id": 6850879,
		            "sequence": 1,
		            "title": "最新完结！史上尺度最大的反腐作品",
		            "update_time": "2017-04-20 10:46:52",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0407/20170407144821519.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0407/20170407144821519.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0407/20170407144821519.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 1060,
		                    "bitrates_url": [
		                        {
		                            "qetag": "loodmy_P7LZWQeIrOTrew1hPrbmH",
		                            "file_path": "m4a/5819b9947cb891101952bd62_6210039_64.m4a",
		                            "bitrate": 62
		                        },
		                        {
		                            "qetag": "Foq_VgW3Kg6hGaLaU-YfyLG5fV3A",
		                            "file_path": "m4a/5819b9947cb891101952bd62_6210039_24.m4a",
		                            "bitrate": 22
		                        }
		                    ],
		                    "id": 6210039
		                },
		                "duration": 1060,
		                "id": 5775458,
		                "update_time": "2016-11-02 18:01:56",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 6,
		                "sequence": 0,
		                "title": "【4月20日加入付费精品】紫阳 001",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "紫阳",
		                "parent_id": 192542,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 3629
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 1116002,
		            "thumb": "http://pic.qingting.fm/goods/2017/04/21/aa70157f82d56d43d96666759a6fc137.jpg",
		            "object_id": 5775458,
		            "sequence": 2,
		            "title": "五胡乱华，仙人下山定乾坤",
		            "update_time": "2017-04-21 10:52:36",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/goods/2017/04/21/aa70157f82d56d43d96666759a6fc137.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/goods/2017/04/21/aa70157f82d56d43d96666759a6fc137.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/goods/2017/04/21/aa70157f82d56d43d96666759a6fc137.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 998,
		                    "bitrates_url": [
		                        {
		                            "qetag": "lkJRAyjNs7bLsduzdyHOeJlcvGD6",
		                            "file_path": "m4a/56fb79897b28aa5826244475_4947661_64.m4a",
		                            "bitrate": 62
		                        },
		                        {
		                            "qetag": "FjG4rBOMMx4C-rOGwQ9l1uoNEXQ4",
		                            "file_path": "m4a/56fb79897b28aa5826244475_4947661_24.m4a",
		                            "bitrate": 22
		                        }
		                    ],
		                    "id": 4947661
		                },
		                "duration": 998,
		                "id": 4178962,
		                "update_time": "2016-06-14 16:56:44",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 6,
		                "sequence": 0,
		                "title": "黄金瞳 第1集",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "黄金瞳",
		                "parent_id": 147754,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 3629
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 1116003,
		            "thumb": "http://pic.qingting.fm/2017/0421/20170421110755597.jpg",
		            "object_id": 4178962,
		            "sequence": 3,
		            "title": "小职员双眼异变，走上人生巅峰",
		            "update_time": "2017-04-21 11:07:55",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0421/20170421110755597.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0421/20170421110755597.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0421/20170421110755597.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 1261,
		                    "bitrates_url": [
		                        {
		                            "qetag": "lrw4IZSqE8CDtAXOF1wYXnGfEuyv",
		                            "file_path": "m4a/588025b47cb891397863daee_6680989_64.m4a",
		                            "bitrate": 62
		                        },
		                        {
		                            "qetag": "FrV8_m_J-iQn7Fla1Et7UWZuRXTp",
		                            "file_path": "m4a/588025b47cb891397863daee_6680989_24.m4a",
		                            "bitrate": 22
		                        }
		                    ],
		                    "id": 6680989
		                },
		                "duration": 1261,
		                "id": 6378848,
		                "update_time": "2017-01-19 10:38:17",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 6,
		                "sequence": 0,
		                "title": "超级道士在都市第一集（粉丝群：524878677）",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "超级道士在都市",
		                "parent_id": 206089,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 3629
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 1116004,
		            "thumb": "http://pic.qingting.fm/2017/0412/20170412142727796.jpg",
		            "object_id": 6378848,
		            "sequence": 4,
		            "title": "道门天才演绎别样校园修真之路！",
		            "update_time": "2017-04-12 14:27:28",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0412/20170412142727796.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0412/20170412142727796.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0412/20170412142727796.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "detail": {},
		                "mediainfo": {
		                    "duration": 65,
		                    "bitrates_url": [
		                        {
		                            "qetag": "FhYfQA7jU38rxmw8UMCHd9p7OS4f",
		                            "file_path": "vod/00/00/0000000000000000000026093193_24.m4a",
		                            "bitrate": 24
		                        },
		                        {
		                            "qetag": "Fp4NpFKAjfqWIc1uJiXCTuvq09zg",
		                            "file_path": "vod/00/00/0000000000000000000026093193_64.m4a",
		                            "bitrate": 64
		                        }
		                    ],
		                    "id": 3969478
		                },
		                "duration": 65,
		                "id": 3145606,
		                "update_time": "2015-08-06 14:35:27",
		                "redirect_url": "",
		                "sale_status": "",
		                "type": "program_ondemand",
		                "channel_star": 0,
		                "sequence": 0,
		                "title": "主妇也疯狂 预告",
		                "thumbs": null,
		                "original_fee": 0,
		                "price": 0,
		                "chatgroup_id": 0,
		                "description": ""
		            },
		            "parent_info": {
		                "parent_name": "主妇也疯狂（完本）",
		                "parent_id": 114926,
		                "parent_extra": {
		                    "tag": "",
		                    "category_id": 3629
		                },
		                "parent_type": "channel_ondemand"
		            },
		            "id": 1116005,
		            "thumb": "http://pic.qingting.fm/2017/0411/20170411113324169.jpg",
		            "object_id": 3145606,
		            "sequence": 5,
		            "title": "婚姻危机 看黄脸婆怎样疯狂逆袭",
		            "update_time": "2017-04-21 16:43:58",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0411/20170411113324169.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0411/20170411113324169.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0411/20170411113324169.jpg!large"
		            },
		            "sub_title": ""
		        },
		        {
		            "detail": {
		                "url": "https://sss.qingting.fm/ipay/#/activity/58f868fb4379c52c2b135915",
		                "title": "读书节钜惠：畅销小说半价起！",
		                "id": 1126,
		                "network": "",
		                "type": "activity",
		                "thumb": "http://pic.qingting.fm/2017/0421/20170421141530447.jpg",
		                "description": "4.23国际读书节，蜻蜓邀您共品书香。错过今天，再等一年！"
		            },
		            "parent_info": null,
		            "id": 1116006,
		            "thumb": "http://pic.qingting.fm/2017/0421/20170421141530447.jpg",
		            "object_id": 1126,
		            "sequence": 6,
		            "title": "读书节钜惠：畅销小说半价起！",
		            "update_time": "2017-04-21 14:15:59",
		            "thumbs": {
		                "medium_thumb": "http://pic.qingting.fm/2017/0421/20170421141530447.jpg!medium",
		                "small_thumb": "http://pic.qingting.fm/2017/0421/20170421141530447.jpg!small",
		                "large_thumb": "http://pic.qingting.fm/2017/0421/20170421141530447.jpg!large"
		            },
		            "sub_title": ""
		        }
		    ],
		    "sequence": 0,
		    "brief_name": "",
		    "section_id": 1116,
		    "name": "banner",
		    "redirect": null
		}
    ]
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
