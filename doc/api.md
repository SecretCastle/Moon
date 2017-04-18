#准备

##设备id

```
deviceid = 51c0c9fdd12577d2da2ea396720bab21
user_id=40e6c8b3a2f0074ca0fe7bc308db303d

```

##api准备

获取蜻蜓FM

```JavaScript 
http://api2.qingting.fm/v6/media/categories  //获取首页分类


http://api2.qingting.fm/v6/media/categories/521/channels/order/0/curpage/1/pagesize/30     //获得521 分类下
http://api2.qingting.fm/v6/media/categories/521/channels/order/0/curpage/2/pagesize/30     //获得521 分类下的下一个30个

http://api2.qingting.fm/v6/media/recommends/guides/section/0?device_id=51c0c9fdd12577d2da2ea396720bab21. //头部guides

http://api2.qingting.fm/v6/media/categories/521/channels/order/bydefault/0/attr/509/curpage/1/pagesize/30 获取521类型下509分类列表

```


###播放

```
http://upod.qingting.fm/vod/00/00/0000000000000000000024139635_64.m4a

```

##归纳

###服务器
```
http://api2.qingting.fm 信息服务器
http://upod.qingting.fm 播放服务器
```

###api使用

```
1、获取分类
/v6/media/categories 

2、点击某分类，此次点击521
/v6/media/categories/521

2、点击某分类，获得分类（此为获得521下对前30个）
/v6/media/categories/521/channels/order/0/curpage/1/pagesize/30 

3、点击某一个产品 如id为174180下的列表
/v6/media/channelondemands/174180/programs/order/0/curpage/1/pagesize/50?user_id=40e6c8b3a2f0074ca0fe7bc308db303d

4、点击播放
/vod/00/00/0000000000000000000024139635_64.m4a

```