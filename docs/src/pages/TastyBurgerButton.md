# How to use the component

### Example

```html
<template>
    <tasty-burger-button 
        :type="buttonType" 
        :active="isActive" 
        :size="size" 
        :color="color" 
        :active-color="activeColor" />
</template>
<script>
export default {
  data () {
    return {
      buttonType: 'elastic',
      isActive: false,
      size: 'xl',
      color: 'green',
      activeColor: 'orange'
    }
  }
}
</script>
<!-- component-demo.vue -->
````

### Props

Name                 | Type       | Default      | Required | Description
:---------------------|:------------|:--------------|:----------|:-------------------------------------------------
`type`               | String     | boring       | false    | The type of burger button
`active`             | Boolean    | false        | false    | Determines if the button is in the active state
`size`             | String    | m        | false    | The size of the button (xs, s, m, l, xl)
`color`             | String     | #00000       | false    | The color of the button in its default state
`activeColor`        | String     | #00000       | false    | The color of the button in its active state


### Events

Name                 | Params      | Description
:---------------------|:-------------|:------------------------------------------------
`toggle`             | active      | Fired after the button is clicked and its active state changed















