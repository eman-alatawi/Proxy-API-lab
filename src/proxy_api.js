//Proxy without any trap
let target = {};
let proxy = new Proxy(target, {});
proxy.empID = 10;
console.log((target.empID));
console.log((proxy.empID));
for (let key in proxy) console.log((key));

//Proxy with target and handler
var target = {}
var handler = {}
var proxy = new Proxy(target, handler)
proxy.name = 'John'
console.log(target.name)
console.log(proxy.address === undefined)

//Handler with get trap
var handler = {
    get(target, key) {
        console.info(`Get on property "${key}"`);
        return target[key];
    }
}
var target = {};
var proxy = new Proxy(target, handler);
proxy.emailID = 'john@alexandra.net';
console.log(proxy.emailID);
console.log(proxy.salary);