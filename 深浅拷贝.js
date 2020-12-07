// 浅拷贝
function shadowClone(target) {
    let cloneTarget = {}
    for(const key in target) {
        cloneTarget[key] = target[key]
    }
    return cloneTarget
}

// 基础深拷贝
function deepClone(target) {
    if(typeof target === 'object') {
        // 兼容数组
        let cloneTarget = Array.isArray(target) ? [] : {}
        for(const key in target) {
            // 递归
            cloneTarget[key] = deepClone(target[key])
        }
        return cloneTarget
    }else{
        return target
    }
}