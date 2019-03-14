# Changelog

##V1.0.8
###Fixed 
1. 修复复杂数据格式，如输入数据格式类型如下：
```
{
  "data":[
    {
      "name": "name",
      "value": 2
    },
    {
      "name": "name",
      "value": "4"
    }
  ]
}
```
标准输入格式如下：
```
{
  "data":[
    {
      "name":"男",
      "value":1
    }
  ]
}
```
不能正确输出结果的问题。
##V1.0.10
###Fixed
1 修复compareObj内部方法，判断对象key是否存在的问题。