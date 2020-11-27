#### 发布包到npm
注意： 首先注册npm账号 账号注册成功后邮箱会收到npm的校验邮件 校验通过后才可以进行上传 否则上传不上去
#### 修改tsconfig.json配置项
```
"declaration": true
"outDir": "./dist/"
"exclude": [
  "./dist",
  "./example"
]
```
#### 添加.npmignore文件忽略不用上传的文件夹及文件
```
/example/
```
#### 写逻辑代码
#### tsc进行编译
#### example中进行测试
#### npm login进行登录
#### npm publish进行发布

  