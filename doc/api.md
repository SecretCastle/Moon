# 准备

## 目录
- [deviceid和userid](#deviceid和userid)
- [API准备](#api准备)
	- [服务器](#服务器)
	- [api使用](#api使用)
		- [获取分类](#获取分类)
		- [点击某分类](#点击某分类)
		- [点击分类下具体细分类](#点击某具体分类)
		- [点击某一个产品](#点击某一个产品如id为174180下的列表)
		- [点击播放](#点击播放)
		- [获取首页推荐banner](#获取首页推荐banner)
		- [获取某个分类下banner](#获取某个分类下banner)
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

#### 点击某分类
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

#### 点击某具体分类
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


#### 点击某分类，获得分类（此为获得521下对前30个）
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
#### 点击某一个产品如id为174180下的列表
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
#### 点击播放
```
/vod/00/00/0000000000000000000024139635_64.m4a
```
#### 获取首页推荐banner
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

#### 获取某个分类下banner
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
