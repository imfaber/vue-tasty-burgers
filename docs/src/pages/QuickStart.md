# Quick Start

## Install

Install with npm:

```bash
npm install vue-tasty-burgers
```

## Use the library (Global Registration)

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

## Use the library (Local Registration)
  
```html
// your-component.js
<template>
    <tasty-burger-button />
</template>

<script>
import {TastyBurgerButton} from 'vue-tasty-burgers'
import 'vue-tasty-burgers/dist/vue-tasty-burgers.css'

export default {
  components: {
    'tasty-burger-button': TastyBurgerButton
  }
}
</script>
```