// 用最简单的方式实现，不需要用支持promise的链式调用

function Promise2(fn) {
    let callback;
    let rejectCallback;
    //一个实例的方法，用来注册异步事件
    this.then = function (done, errCallback) {
        callback = done;
        rejectCallback = errCallback;
    }
    function resolve() {
        callback();
    }
    try {
        fn(resolve);
    } catch (e) {
        rejectCallback(e);
    }
}

function timeout(ms) {
        return new Promise2((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }

timeout(3000).then(() => {
    console.log('我3秒后被输出');
});
