# YAE-frontend
standard of YAE frontend development

js规范：
1、严格使用驼峰变量名，如paramName而非param_name
2、

gulp使用帮助：
1、less编译、压缩和合并
2、代码语法检查
.jshintrc 文件配置了检查参数，jshint默认读取该文件，可以修改参数获得指定的测试结果
更多参数-->[jshint参数](http://jshint.com/docs/options/)
3、代码测试
测试脚本统一目录为/test，文件名尽量与被测试文件同名
4、js压缩
压缩后的文件名统一为/*.min.js或/*.min.js，生成路径统一为/build