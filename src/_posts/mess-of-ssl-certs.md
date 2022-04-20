---
title:  "File formats and terms used in the context of SSL"
date: "2021/11/22"
---

## Preface
You may have heard many buzzwords when reading SSL cert related articles, like `.pem`, `cer`, `der`, `jks`, `pkcs12`, etc.  One could easily get confused by these terms as there are dozen of them.
This article aims to sort out some of the frequently heard file format and terms and try to explain why and how they are used.

## SSL Objects
When talking SSL, we are talking about a context where the information in it can be exchanged with trust.  And such safety and trust is established upon SSL certs and certificate authorities who recognize them.  <br>However we are here today not to discuss how SSL actually works because that would bring up another discussion that can span a whole day long. <br>You just need to know that in order to generate certificates used in SSL contexts, a series of SSL objects are needed.  And we need different `container format` to store these SSL objects.

## The container formats and their extension
A container in the following context refers to the file that is used to store data in a way that machine can understand it.  See below table for the most widely used container formats.

|  Extension  | Format  | Definition | Convertible |
|  ----  | :----  | :---- | --- |
| .der  | Binary | A way to encode [ASN.1](https://en.wikipedia.org/wiki/ASN.1) syntax in binary | to .pem |
| .pem  | Plaintext | Plain text representation of `.der`.  The content of which is like below <br>-----BEGIN CERTIFICATE-----<br>...Base64 encoded contents...<br>-----END CERTIFICATE----- | to .der |
| .pkcs12 .p12   | Binary | Password procted and fully encrypted container format that is used to store multiple entry of pub/private cert pairs in [PCKS12](https://en.wikipedia.org/wiki/PKCS_12) format | The entire file can be converte to .pem or each cert/key in it can be stripped out to convert into .pem |
| .pfx  | Binary | Predecessor of .pkcs12 .p12 and mainly used in Windows environment like IIS | same as as above |
| .keystore .jks |  Binary | Known as java key store, stores multiple SSL keys and certs by alias-value entry and it is password protected | same as as above |
| .p7b | Binary | A format used by Windows for certificate/key exchange.  Its content is the same as .keystore / .jks  | same as as above | 

## The SSL objects and their extension

The SSL objects can be encoded into different container format like `.der` or `.pem`.  See below table.

|  Extension  | Definition  | Container format | Use case |
|  ----  | :----  | :---- | --- |
| .csr .p10  | Cert signing request.  Its data format is pkcs10 | .der / .pem | Contains details of the requesting cert (subject name, issuer, country etc.) as well as public key.<br>It used to get signed by a CA and in return for a public ceritifcates. |
| .key  | Private key of a specific certificate | Usually .pem | It is not a standardized format, people just conventionally renamed it as .key. |
| .cer .crt .cert  | Refering to a certificate | .pem or .der  | - |


## Additional tip for Java developer: what is a trust store then?
We have revealed a `keystore` is a container that is used to store multiple entries of private key / public key / cerificates in password encoded format.  <br>
Actually, a `truststore` is the same in the file format with a `truststore`, the difference lies in that they are used with *different purpose*.<br>
When establishing SSL connection, Java will look for the CA certificate resides in `-Djavax.net.ssl.trustStore=path/to/trustStore.jks` that you are willing to trust when the remote party presents their certificate, or by default `JAVAHOME/jre/secure/cacerts` if the property is missing<br>
Whereas `keystore` is usually storing your own private key or certificates that needs to be presented to a remote SSL party.
It is a best practise to seperate different SSL objects by `truststore` and `keystore` by their purpose but actually there is no rules to forbid the mix of use of them. 

## Conclusion
Today we have covered some widely used container format and how do they associate with different SSL objects.  

## todo
- private cert
- public cert
- X.509
- cert chain
- root cert
- root ca