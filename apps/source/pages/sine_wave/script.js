
// class 装饰器
function log(descriptor) {
    let oldValue = descriptor.descriptor.value;
    descriptor.descriptor.value = function() {
        console.log(`Call ${name} with arguments ${[...arguments].join()}`);
        return oldValue.apply(this, arguments);
    };
    return descriptor;
}

class Math {
    @log
    add(a, b) {
        return a + b;
    }
}

const math = new Math();
math.add(1, 2);
