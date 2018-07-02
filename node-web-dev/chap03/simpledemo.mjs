/* How to use ES2015 module. */

import * as simple2 from './simple2';

console.log(simple2.hello());
console.log(`${simple2.next()} ${simple2.squared()}`);
console.log(`${simple2.next()} ${simple2.squared()}`);
console.log(`${simple2.default()} ${simple2.squared()}`);
console.log(`${simple2.next()} ${simple2.squared()}`);
console.log(`${simple2.next()} ${simple2.squared()}`);
console.log(`${simple2.next()} ${simple2.squared()}`);
console.log(simple2.meaning);