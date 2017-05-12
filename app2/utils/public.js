import axios from 'axios';

const Public = {
    /**
     * 图片预加载方法,返回promise对象
     * 
     * @param {any} imgSrc 
     * @returns 
     */
    preImgLoad(imgSrc) {
        let imgEle = new Image();
        imgEle.src = imgSrc;
        //console.log("加载的图片的尺寸", imgEle.width, imgEle.height);
        const promsie = new Promise((resolve, reject) => {
            imgEle.onload = function() {
                resolve(imgEle);
            };
            imgEle.onerror = function() {
                reject('fail');
            }
        });
        return promsie;
    },

    /**
     *  音频预加载方法
     * 
     * @param {any} url 
     * @returns 
     */
    preLoadAudio(url) {
        const srcEle = new Audio();
        srcEle.src = url;
        const promsie = new Promise((resolve, reject) => {
            srcEle.oncanplay = function() {
                //这里的修改处理思路
                //resolve success，让调用与加载部分，处理播放状态
                resolve('success');
            }
            srcEle.onerror = function() {
                reject('error');
            }
        });
        return promsie;
    },

    /**
     * 
     *  多api请求处理
     *  参数类型 string
     */
    MultiRequest() {
        let args = [...arguments];
        let req = [];

        //this.CheckEachArgsOfArguments(args);
        args.forEach((ele, index) => {
            req.push(this.RequestUrl(ele));
        });

        return new Promise((resolve, reject) => {
            Promise.all(req).then((res) => {
                if (res) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    },

    /**
     * 
     * 请求api,返回promise对象
     * @param {any} reqUrl 
     * @returns 
     */
    RequestUrl(reqUrl) {
        return new Promise((resolve, reject) => {
            axios.get(reqUrl).then((res) => {
                if (res) {
                    resolve(res);
                }
            }).catch((err) => {
                reject(err);
            });
        });
    },
    CheckEachArgsOfArguments(arry) {
        console.log('get array', arry);
        arry.forEach((ele, index) => {
            if (typeof ele === 'object') {
                throw `${ele} this is an Object, we need string`;
            }
        });
    },

    /**
     * 计算program的时间
     * 
     * @param {any} duration  单位秒
     * @returns 
     */
    computeMinutes(duration) {
        duration = Math.round(duration);
        let min = Math.floor(duration / 60);
        let secs = duration % 60;

        if (secs < 10) {
            secs = '0' + secs;
        }
        return `${min}分${secs}秒`;
    }
}

export default Public;