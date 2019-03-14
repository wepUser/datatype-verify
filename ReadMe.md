####dataTypeVerify
数据类型简单验证。

####安装
npm install datatype-verify

####引用
```
import * as dataTypeVerify from 'datatype-verify' 
or
var dataTypeVerify=require('datatype-verify')
or
<script type="text/javascript" src="datatype-verify.js"/> 
<script>
    dataTypeVerify.ifTypeFit(data1,data2).......
</script>
```

####用法
1.调用dataTypeVerify.ifTypeFit(param1,param2)

2.参数是用户实际输入的数据和期望的数据

3.返回值true或false，作为判断输入数据格式是否合法的依据

4.true是合法，反则false

