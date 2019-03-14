import {getDataType, compareObj, hasChildObj} from './util';
/**
 * 数据格式-类型简单判断
 */
'use strict';
/**
 * 输入数据和标准数据类型对比
 * @param inputV 输入数据
 * @param templeV 标准数据
 * @returns {*}true/false
 */
export function ifTypeFit(inputV, templeV) {
    let result=undefined;
    //最外层判断
    if (getDataType(inputV) !== getDataType(templeV)) {
        return false
    }
    //如果输入值是对象类型，则内容长度大于0
    if (getDataType(inputV) === 'object' && Object.keys(inputV).length > 0) {
        let flag = compareObj(inputV, templeV);//判断key是否存在，及value类型是否一致。
        if(!flag){
            return false
        }
        if (hasChildObj(inputV)) {
            for (let v in inputV) {
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
        for (let v in inputV) {
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

console.log('result',ifTypeFit(45,'33'));