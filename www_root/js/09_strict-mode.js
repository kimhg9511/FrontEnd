// 'use strict';

function foo() {
    // 'use strict';
    x = 10;
    // 'use strict';
}
foo();
console.log(x); // x is not defined(strict)
