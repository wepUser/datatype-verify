var _toString = Object.prototype.toString;
/**
 * 数据类型判断
 * @param value
 * @returns {void|*|string|XML}
 */
function getDataType(value) {
    var colorExp = /^#[\da-f]{3}([\da-f]{3})?$/i;//#fffff
    var colorExpRgb = /^rgb/i;//rgba(94,254,204,1)
    var type = _toString.call(value).replace(/[\[\]\s]|object/g, '');
    if (type === "Number") {
        if (parseInt(value) !== value) {
            type = "Float";
        } else {
            type = "Int"
        }
    } else if (colorExpRgb.test(value) || colorExp.test(value)) {
        type = "Color"
    }
    return type.toLocaleLowerCase();
}

/**
 * 遍历对象对比结果
 * @param obj1 对象1
 * @param obj2 对象2
 * @returns {boolean} 对比结果
 */
function compareObj(obj1, obj2) {
    for (var v in obj1) {
        //若obj2无相应的key，则返回false
        if (getDataType(obj1[v]) !== getDataType(obj2[v]) || typeof obj2[v]==='undefined') {
            return false
        }
    }
    return true
}

/**
 * 对象是否有子对象或数组
 * @param obj
 * @returns {boolean}
 */
function hasChildObj(obj) {
    for (var v in obj) {
        if ((typeof obj[v]) === 'object') {
            return true
        }
    }
    return false
}

/**
 * 输入数据和标准数据类型对比
 * @param inputV 输入数据
 * @param templeV 标准数据
 * @returns {*}true/false
 */
function ifTypeFit(inputV, templeV) {
    var result=undefined;
    //最外层判断
    if (getDataType(inputV) !== getDataType(templeV)) {
        return false
    }
    //如果输入值是对象类型，则内容长度大于0
    if (getDataType(inputV) === 'object' && Object.keys(inputV).length > 0) {
        var flag = compareObj(inputV, templeV);//判断key是否存在，及value类型是否一致。
        if(!flag){
            return false
        }
        if (hasChildObj(inputV)) {
            for (var v in inputV) {
                if(inputV.hasOwnProperty(v)){
                    if (getDataType(inputV[v]) === 'object' || getDataType(inputV[v]) === 'array') {
                        result= ifTypeFit(inputV[v], templeV[v]);
                    }
                }
            }
        } else{
            result= true
        }

    }//如果输入对象是array类型，则内容长度大于0
    else if (getDataType(inputV) === 'array' && inputV.length > 0) {
        for (var v in inputV) {
            if (getDataType(inputV[v]) !== getDataType(templeV[0])) {
                return false
            } else {
                result= ifTypeFit(inputV[v], templeV[0]);
                if(!result){
                    return false
                }
            }
        }
    }//如果输入对象是另一种类型且不是复杂类型
    else if ((getDataType(inputV) === getDataType(templeV)) && (typeof inputV) !== 'object') {
        result= true
    } else {
        return false
    }
    return result
}

module.exports=ifTypeFit;
