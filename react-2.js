let fn1 = () => new Promise(resolve => {
    setTimeout(() => {
        console.log('fn1');
        resolve(1)
    }, 2000)
});

let fn2 = () => new Promise(resolve => {
    setTimeout(() => {
        console.log('fn2');
        resolve(2)
    }, 1000)
});

let promiseReduce = async (asyncFunctions, reduce, initialValue) => {
    let start = initialValue;
    for (let item of asyncFunctions) {
        let res = await item();
        start = reduce(start, res);
    }
    return start
};

let res = promiseReduce([fn1, fn2], (mem, val) => {
    return mem * val
}, 1).then(data => {
    console.log("result = ", data)
});
 


