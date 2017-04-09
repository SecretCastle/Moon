# template
webpack+es6+babel+eslint基础环境搭建框架

## 使用方法
```JavaScript
git clone https://github.com/FerrariCar/template.git

git remote set-url [new url]

npm install

npm install package you want
```

### modify package.json
```Json
{
  "name": "vue",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-core": "^6.23.1",
    "babel-eslint": "^7.1.1",
    "babel-loader": "^6.3.2",
    "babel-preset-es2015": "^6.22.0",
    "babel-preset-react": "^6.23.0",
    "babel-preset-stage-3": "^6.22.0",
    "css-loader": "^0.26.2",
    "eslint": "^3.17.0",
    "eslint-loader": "^1.6.3",
    "install": "^0.8.7",
    "style-loader": "^0.13.2",
    "webpack": "^2.2.1",
    "webpack-dev-server": "^2.4.1"
  }
}
```
modify `scripts` 
```JavaScript
"scripts":{
  "watch": "xxxx",
  "build": "xxxx",
  "start": "xxxxx",
  "test": "xxxx",
  "prebuild":"xxxxx",  // run before 'build' script
  "postbuild":"xxxx"   // run after 'build' script
}
```


