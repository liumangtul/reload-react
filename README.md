# reload-react
# react-reloading
重新复习一遍react相关技术栈，webpack，ES2015，redux，react-router等。
作为学习笔记。

github-fackbook react api: https://facebook.github.io/react/
react-gitbook : https://hulufei.gitbooks.io/react-tutorial/content/component-compose.html
社区 http://react-china.org/
https://discountry.github.io/react/1.5K ( https://doc.react-china.org44 )
阮一峰的 "React 入门实例教程" http://www.ruanyifeng.com/blog/2015/03/react.html28.4K
极客学院整理的文档 http://wiki.jikexueyuan.com/project/react/23.5K
## webpack:
    webpack-china.org

## react-router API：
        https://reacttraining.com/react-router/web/guides/philosophy
        http://reacttraining.cn/web/guides/quick-start

## 2.8左右的版本的使用可以参照阮一峰的：
        http://www.ruanyifeng.com/blog/2016/05/react_router.html?utm_source=tool.lu

        http://blog.csdn.net/github_38095237/article/details/70157021?winzoom=1



## react 小书
http://huziketang.com/books/react/
https://segmentfault.com/a/1190000009004928

http://bluesh.me/blog/2017/07/16/react-handbook/

## 阮一峰-redux
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_one_basic_usages.html
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_two_async_operations.html
http://www.ruanyifeng.com/blog/2016/09/redux_tutorial_part_three_react-redux.html

http://space.bilibili.com/1914909#!/

## fetch API
https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API

## 使用路由-BrowserRouter时，刷新页面挂掉的问题，服务器端未处理
### 找到解决方案了，具体原因和解决方案如下：
#### 1：使用的是react-router的browserHistory，同时也在使用者webpack-dev-server，所以就要在启动webpack-dev-server时，要加--history-api-fallback参数
#### 2：或者也可以使用react-router的hashHistory，不需要加--history-api-fallback参数就可以，然而这样有个问题就是url可视性太不友好了，全是hash了的；
#### 3：如果使用了nginx，可以使用rewrite，有人推荐，但是自己还没有实验呢。。。