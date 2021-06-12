---
title:  "一个基于Next.JS制作的静态博客生成器，并配合Github Flow自动发布"
date: "2020/01/14"
---
## 简介
`Next.JS`是一个基于React的开源静态网站生成框架。相比于传统的React 单页应用(SPA)来说，静态网站具有更好的响应速度，更安全（没有或相对较少的js状态管理），以及更好的SEO支持。

网站：https://nextjs.org/

`Github Page`是Github免费提供的静态网页部署空间，每一个Github repo都可以指定一个Branch（默认是`gh-page`）用于部署Github Page。

网站：https://pages.github.com/


`Github Flow`是一个Github提供用于自动化构造，测试，部署，反馈的工具。它运用Declaritive style来编写yml配置文件。只要repo的branch指定路径包含正确的配置文件，Github就会根据配置文件的内容生成相应的CI/CD Pipeline。它同时支持使用其他开源的`Github Action`来扩展构造过程中的一些行为，譬如发送邮件通知，Deploy去特定的Branch等。

网址: https://guides.github.com/introduction/flow/


### 使用说明
首先Github 地址奉上: https://github.com/NosearY/NosearY.github.io/tree/master

工作流程：
1. 首先git clone 整个master branch，然后删除 .git文件夹。
2. 修改config.yaml里面的内容（主要是一些说明文字）。
3. 更改header.js和footer.js。
4. 如果想写文章的话，直接在`_post`文件夹里创建.md文件。文章如果想引用静态文件，如图片的话，可以把该图片放入`public`，也可以直接引用外链。
5. 在命令行调用 ```$ yarn run start```来开启本地调试，可以在浏览器访问`localhost:3000`来进行预览。
6. 在您自己的github里创建一个repo。建议吧repo的名字改成{您的Github用户名}.github.io。这样做的话以后访问https://{您的Github用户名}.github.io就可以直达博客页面了。
7. 在项目根目录，初始化git，并添加您刚创建的repo的remote。
8. 如果本地调试没有问题， 在命令行调用 ```$ git add . && git commit -m "your commit message here" && git push origin master```来把master的commit push到git里头。
9. github会自动调用github action，在github上面把dist里的内容发布到gh-pages这个branch。

### 进阶说明
1. 如果想修改样式的话，可以参考各个.css文件。
2. 

我们Master branch用来存放`Next.JS`的源码，注意项目里
https://github.com/NosearY/NosearY.github.io/tree/master

gh-pages 我们用来存放`Next.JS`的

