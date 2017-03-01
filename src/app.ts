import * as ModuleA from "./async-modules/a";
import * as ModuleB from "./async-modules/b";

type Module =
    typeof ModuleA |
    typeof ModuleB;

console.log('loading modules...');
Promise.all<Module>([
    System.import('./async-modules/a'),
    System.import('./async-modules/b')
])
    .then(modules => {
        console.log('modules loaded.');
        modules.forEach(m => m.run());
    })
    .catch(err => console.error(err));

