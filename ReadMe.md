描述：json格式数据类型简单验证。

使用

npm install datatype-verify

import dataTypeVerify from 'datatype-verify' 
or
var dataTypeVerify=require('datatype-verify')
or 
<script type="text/javascript" src="datatype-verify.js"></script> 
 
方法：
1.dataTypeVerify.getDataType 
/**
 * 数据类型收集函数
 * @param data
 * @returns {Array}
 * 注：假设数组类型，内容格式一致
 */
 
 2.dataTypeVerify.ifTypeFit
 /**
  * 输入数据和标准数据类型对比
  * @param templeV 标准数据
  * @param inputV 输入数据
  */

