# YAE-frontend
standard of frontend development

## HTML规范：
1、标签名必须使用小写字母；

2、属性名必须使用小写字母，属性值必须用双引号包围；

3、HTML 标签的使用应该遵循标签的语义

4、禁止为了 hook 脚本，创建无样式信息的 class，使用 id、属性选择作为 hook 是更好的方式；

[更多HTML规范](http://segmentfault.com/a/1190000002465212)

## js规范：
1、慷慨地写注释，留下供需要理解你做了什么的人阅读你的代码；

2、普通变量名和函数名采用"小驼峰式命名法"， 如：firstName、lastName，
作为构造函数的函数采用"大驼峰式命名法"，如：Person；

3、每条语句必须使用分号结尾（特别是需要压缩的js，省略分号常常会导致压缩失败）；

5、始终使用===和!==，==和!=会做强制类型转换；

6、通用的js文件可放于/3rd-lib/js目录下作为公用组件

## css规范：
1、慷慨地写注释，包括文件顶部注释和区块注释

2、规则命名中，一律采用小写加中划线的方式，不允许使用大写字母或 _

3、命名避免使用中文拼音，应该采用更简明有语义的英文单词进行组合

4、尽可能提高代码模块的复用，样式尽量用组合的方式

5、单个CSS文件避免过大（建议少于300行）

6、通用的css文件可放于/3rd-lib/css目录下作为公用组件

[更多css规范](http://segmentfault.com/a/1190000002460968)

## mocha测试规范：
1、对于各自编写的模块，应尽量编写测试代码。代码测试不仅能测试代码正确性，还能模拟边界条件，保证代码健壮性；

2、测试可基于BDD（行为驱动开发）或TDD（测试驱动开发），关于BDD&TDD可见 [BDD&TDD](http://www.cnblogs.com/wangshenhe/archive/2013/02/16/2913431.html)

3、测试代码必须放于/test目录，路径形式和文件名尽量与被测试文件相同

4、更多 [mocha api](http://mochajs.org/)

## gulp规范:

##### gulp使用帮助：
1、尽量使用gulp完成自动化操作；

2、在完成各自开发任务的过程中，请配置自己的gulp任务，文件导入避免使用通配符，以避免影响其他人的开发文件

##### gulp任务帮助：
1、less编译、压缩和合并，参见 task 'less'

2、代码语法检查，参见 task 'jshint'

目录中的.jshintrc 文件配置了检查参数，jshint默认读取该文件，可以修改参数以修改检查条件

更多参数可见-->[jshint参数](http://jshint.com/docs/options/)

3、代码测试，参见 task 'mocha'

测试脚本统一目录为/test，文件名尽量与被测试文件同名

4、js压缩，参见 task 'jsMinify'

压缩后的文件名统一为/*.min.js或/*.min.js，生成路径统一为/build

5、css压缩，参见 task 'cssMinify'