# 引言



# 快速了解 



# 快速体验

### 在线演示

* 地址：<http:///>
* 账号：
* 密码：

### 本地运行



### 开发环境



# 常见问题

* IntelliJ IDEA中提示`NoClassDefFoundError: javax/servlet/ServletOutputStream `错误，你只需要修改web项目下的pom.xml,注释掉`spring-boot-starter-tomcat`的`<scope>provided</scope>`部分改为`<scope>compile</scope>`即可。

* 出现NoSuchMethodError错误，一般是依赖包版本需要更新，请尝试如下操作：在web项目上右键，选择菜单 -> Maven -> Update Project...（或按Alt+F5） -> 点击 Select All 按钮 -> 选择 Force Update of Snapshots/Releases 复选框 -> 点击OK按钮即可。

* MySql执行`init-data.bat`初始化数据失败，你可尝试设置下 my.ini 给 [mysqld] 增加如下配置：`sql_mode=ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION`


# 如何升级？

尽量不修改web项目以外的源码项目，如果修改了，请尽量 Pull Requests 上来，否则代码编码将与官方不同步，将对你的日后升级带来困难。

小版本（4.0.x）升级是非常便捷的，你只需要进行Maven快照强制更新，即可将最新版的依赖jar更新到本地，下面介绍一下在Eclipse里如何操作：

在web项目上右键，选择菜单 -> Maven -> Update Project...（或按Alt+F5） -> 点击 Select All 按钮 -> 选择 Force Update of Snapshots/Releases 复选框 -> 点击OK按钮即可。

如果进行相对大的版本（4.x.x）升级这里我们会附加一个声明，帮助你进行迁移操作。

# 开源协议声明

1. 当前开源代码的授权协议采用 AGPL v3 + Apache Licence v2 进行发行。
2. 您可以免费使用、修改和衍生代码，但不允许修改后和衍生的代码做为闭源软件发布和销售。
3. 修改后和衍生的代码必须也按照AGPL协议进行流通，对修改后和衍生的代码必须向社会公开。
4. 如果您修改了代码，需要在被修改的文件中进行说明，并遵守代码格式规范，帮助他人更好的理解您的用意。
5. 在延伸的代码中（修改和有源代码衍生的代码中）需要带有原来代码中的协议、版权声明和其他原作者规定需要包含的说明（请尊重原作者的著作权，不要删除或修改文件中的`@author`信息）。
6. 开源版您可以应用于商业软件，但必须遵循以上条款原则（请协助改进本作品）。
7. 请知悉开源版，用户数不可超过100个，最大允许10个用户同时在线（不含匿名）。

### 其他服务：<http://>



# Git 全局设置技巧

```
1、提交检出均不转换换行符

git config --global core.autocrlf false

2、拒绝提交包含混合换行符的文件

git config --global core.safecrlf true
```

# 开发笔记