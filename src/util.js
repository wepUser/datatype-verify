/**
 * Created by admin on 2019-3-13.
 */

const _toString = Object.prototype.toString;
/**
 * 数据类型判断
 * @param value
 * @returns {void|*|string|XML}
 */
export function getDataType(value) {
    const colorExp = /^#[\da-f]{3}([\da-f]{3})?$/i;//#fffff
    const colorExpRgb = /^rgb/i;//rgba(94,254,204,1)
    let type = _toString.call(value).replace(/[\[\]\s]|object/g, '');
    if (type === "Number") {
        if (parseInt(value) !== value) {
            type = "Float";
        }else{
            type="Int"
        }
    }else if(colorExpRgb.test(value) || colorExp.test(value)){
        type="Color"
    }
    return type.toLocaleLowerCase();
}

/**
 * 遍历对象对比结果
 * @param obj1 对象1
 * @param obj2 对象2
 * @returns {boolean} 对比结果
 */
export function compareObj(obj1, obj2) {
    for (let v in obj1) {
        if (getDataType(obj1[v]) !== getDataType(obj2[v]) || !obj2[v]) {
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
export function hasChildObj(obj) {
    for (let v in obj) {
        if ((typeof obj[v]) === 'object') {
            return true
        }
    }
    return false
}

/**
 * 数据类型收集函数
 * @param data
 * @returns {Array}
 * 注：假设数组类型，内容格式一致
 */
//存储类型数据
export function getDataFormat(data) {
    if (getDataType(data) === 'object' && Object.keys(data).length > 0) {
        Object.keys(data).forEach(function (item) {
            if (getDataType(data[item]) === 'object' || getDataType(data[item]) === 'array') {
                getDataType(data[item])
            } else {
                data[item] = data[item];
            }
        })
    } else if (getDataType(data) === 'array' && data.length > 0) {
        data.splice(1, data.length - 1);
        data.forEach(function (item) {
            if (getDataType(item) === 'object' || getDataType(item) === 'array') {
                getDataType(item)
            } else {
                data[0] = item
            }
        });
    }
    else {
        return getDataType(data)
    }
    return data
}






