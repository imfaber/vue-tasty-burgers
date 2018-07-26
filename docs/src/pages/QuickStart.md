# Quick Start

## Install (without npm)

Clone the Git repository of this library and link it.

```bash
git clone [your Git repostiory]
cd vue-tasty-burgers
npm install
npm run build
npm link
```

In your client project root folder:
```bash
npm link vue-tasty-burgers
```

## Use the library

```javascript
// main.js
import Vue from 'vue'
import * as TastyBurgerButton from 'vue-tasty-burgers';
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css';

Vue.use(TastyBurgerButton);
```

### No Conflict

The component will be installed with no prefix by default, you can add any prefix 
to them to avoid conflicts with other libs if needed.

For example:

```javascript
Vue.use(TastyBurgerButton, { prefix: 'abc' });
```

Results in:

* Components such as `<tasty-burger-button>` becomes `<abc-tasty-burger-button>`