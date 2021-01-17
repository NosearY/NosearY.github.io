---
title:  "使用Next.JS制作个人博客，并配合Github Flow自动发布"
date: "2020/01/14"
---
## 简介
`Next.JS`是一个基于React的开源静态网站生成框架。相比于传统的React 单页应用(SPA)来说，静态网站具有更好的响应速度，更安全（没有或相对较少的js状态管理），以及更好的SEO支持。

网站：https://nextjs.org/

`Github Page`是Github免费提供的静态网页部署空间，每一个Github repo都可以指定一个Branch（默认是`gh-page`）用于部署Github Page。

网站：https://pages.github.com/


`Github Flow`是一个Github提供用于自动化构造，测试，部署，反馈的工具。它运用Declaritive style来编写yml配置文件。只要repo的branch指定路径包含正确的配置文件，Github就会根据配置文件的内容生成相应的CI/CD Pipeline。它同时支持使用其他开源的`Github Action`来扩展构造过程中的一些行为，譬如发送邮件通知，Deploy佢特定Branch等。

网址: https://guides.github.com/introduction/flow/

![Image of Momo](/images/profile.jpg)