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
        const promsie = new Promise((resolve, reject) => {
            imgEle.onload = function() {
                resolve(imgEle.src);
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
                resolve('success');
            }
            srcEle.onerror = function() {
                reject('error');
            }
        });
        return promsie;
    }


}

export default Public;