---
title:  "SSL Certs 真的很烦"
date: "2021/11/22"
---
## 前言
今天被分配了一个任务，需要在一个Java容器里用X.509证书调用另外一个服务器的RESTful API。期间经历了无数次证书无法验证的挫折，鼓捣了好久才终于成功。觉得还是有必要梳理一下自己的理解。

## 什么是SSL Certs

由CA(Certificate Authority)签发的数据凭证。用于验证服务器的身份。服务器的拥有者需要妥善保存证书，并且在客户端请求的时候提供相关证书。一旦浏览器发现证书有误，如域名错误，时间不正确，过期等，会有相关的提示警告请求者。

证书如果泄露，黑客可以利用被泄露的证书做很多坏事情。

有时候，SSL Certs也可以由CA签发给客户端，以让服务器验证客户端的身份。

由此可见，CA必须是一个大家都信任的实体，通常又一些大公司提供（如GoDaddy, AWS，阿里等）。
CA也可以自己建立，由自建CA签发的证书叫做Self-Signed-Certs。一般来说遇见Self-Signed-Certs浏览器都会有警告，必须将其加入系统信任列表里方可正常使用。

## SSL Certs 的格式
SSL Certs的格式有很多种，什么PEM, CER, DER，JKS, PCKS12，有的时候光听到这几个似曾相识的名字就让人头都大了。

小朋友如果你有很多问题，不妨看看以下表格

|  格式  | 内容  | 干嘛的 | 可保存证书？ | 可保存密钥？ | 常用于 |
|  ----  | :----  | :---- | ---- | ---- | ---- |
| .DER  | 二进制 | 一种转码的方法 | - | - |  |
| .CER  | 二进制 | 指代证书 | 是 | 否 |  |
| .CRT  | 明文或二进制皆可 | 指代证书 | 是 | 否 | |
| .PEM  | 明文 | 一种转码方法 | 是 | 是 | Apache/Nginx |
| .KEY  | 明文 | 其实就是PEM，只是改成.KEY易于区分密钥和证书 | - | - | |
| .CSR  | 二进制 | 证书签名请求(Cert Signing Request) | - | - | 递交给CA以获取公钥证书(x.509) |
| .pfx  | 二进制 | Predecessor of PKCS#12  | 必须 | 必须 | Windows IIS |
| .p12/.pkcs12  | 二进制 | PKCS#12，一般具有密码保护 | 必须 | 必须 | Non-Windows |
| JKS  | 二进制 | Java KeyStore，一般具有密码保护 | 可以，使用Alias存取，可以用Keypass保护 | 可以，使用Alias存取，可以用Keypass保护 | Java 程序 如 Tomcat|


### 更多关于PEM格式
PEM是一种可以把二进制转码成明文的方法，一般来说他的样子如下
```
-----BEGIN CERTIFICATE-----
<Base64 encoded contents>
-----END CERTIFICATE-----
```
除了证书，他也可以转码密钥（公钥和私钥），或者是完成的证书链:同时含有证书，密钥和根证书。

### 什么是X.509
X.509是一种公钥证书的规范。制造的过程一般如下：
1. 生成私钥
2. 用私钥生成`.CSR`文件
3. 把公钥和`.CSR`交给提供数字签名的CA。如没有CA，也可以自己建立，这样生成的Cert一般叫做Self-Signed Cert
4. CA返还的证书+公钥一般用.p12保存，因为其支持密码。

## Java相关

### 什么是KeyStore

KeyStore (也就是.JKS后缀的一个文件)是用来存储私钥和X.509证书的。
我们可以通过`javax.net.ssl.keyStore=path/to/trustStore.jks`来指定JVM寻找TrustStore的位置。

<b>可以说，KeyStore一般用来存储自身的身份</b>

### 什么是Trust Store
Trust Store就是用来存贮由CA颁发的用来验证服务器有效性的证书的

TrustStore是用来
我们可以通过`-Djavax.net.ssl.trustStore=path/to/trustStore.jks`来指定JVM寻找TrustStore的位置

当Java程序没有用上述指令指定TrustStore的时候，会默认寻找`JAVAHOME/jre/secure/cacerts`这个位置的文件。

<b>可以说，KeyStore一般用来存储服务器的身份</b>

KeyStore和TrustStore只是概念上的问题，实际上他们可以是同一个文件，但是<b>强烈</b>不建议这么做，原因是KeyStore一般用来存放私密性高的信息如个人的x509证书和私钥，而TrustStore则用来存放公共的信息如不同网站的SSL证书。

未完待续。。。