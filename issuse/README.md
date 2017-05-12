# 问题组合

### 2017.5.9

- [+] 点击某一个item，会与加载audio src两次，出现两次加载完成。

### 2017.5.11

- [+] 需要优化请求的处理，目前请求的地方太多，影响性能 (delay)
- [+] 要处理下图片等预加载逻辑处理  
- [+] 下拉刷新的处理（现在处理的是上拉刷新）
- [+] 点击播放


### 2017.5.12
#### 需要优化请求的处理，目前请求的地方太多，影响性能 ___(delay)___

#### 要处理下图片等预加载逻辑处理  

***这里的处理逻辑***

- [+] DOM img 的src属性中添加静态文件夹下的图片，如``` ../assets/default.jpg ```
- [+] 在```mounted```方法中，加载预加载图片的promise对象，等待返回结果。
- [+] 当promise对象返回resolve时，加载```this.$el.childNodes[#{img.index}]```获得img的对象，并设置当前img对象的src路径为resolve返回时的img对象路径

```JavaScript
	data(){
		return {
			url:{
				src:''
			}
		}
	}
	/**
	res 返回的是一个img对象
	*/
	Public.preImgLoad(this.homeItem.thumb).then((res)=>{
        if(typeof res === 'object'){
            this.url =  res;
        }
    }).catch((err)=>{

    });
    
   /*
   在update方法中加载
   添加判断childNodes是否为空，或许是因为dom的整体渲染没有完成，可能会导致childNodes获得的是空数组，所以这里加上判断
   */
   updated(){
         if(this.$el.childNodes.length > 0){
            this.$el.childNodes[0].src=this.url.src;
         }
    }, 
   
```

#### 下拉刷新


