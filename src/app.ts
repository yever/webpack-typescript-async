import * as ModuleA from "./async-modules/a";
import * as ModuleB from "./async-modules/b";

console.log('loading modules...');
Promise.all([
    new Promise<typeof ModuleA>((resolve, reject) => {
        try {
            require.ensure([], () => {
                const moduleA = require('./async-modules/a') as typeof ModuleA;
                console.log('module a loaded.');
                resolve(moduleA);
            }, "module-a");
        }
        catch (err) {
            reject(err);
        }
    }),
    new Promise<typeof ModuleA>((resolve, reject) => {
        try {
            require.ensure([], () => {
                const moduleB = require('./async-modules/b') as typeof ModuleB;
                console.log('module b loaded.');
                resolve(moduleB);
            }, "module-b");
        }
        catch (err) {
            reject(err);
        }
    }),
]).then(([moduleA, moduleB]) => {
    console.log('modules loaded.');
    moduleA.run();
    moduleB.run();
});

