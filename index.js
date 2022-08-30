function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function fn() {
        console.log('a named function')
    }
}
fn();

function returnsAnAnonymousFunction () {
    return () => console.log("this is an anonymous function");
}