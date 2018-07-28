# Vue Tasty Burger Button

A simple, customizable and accessible hamburger button component.

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

#### Available burgers

Type            | Usage example                              | Demo       
:----------------|:--------------------------------------------|:--------------------------------------------------:
`3dx`           | `<tasty-burger-button type="3dx" />`       | <tasty-burger-button type="3dx" />
`3dy`           | `<tasty-burger-button type="3dy" />`       | <tasty-burger-button type="3dy" />
`3dxy`          | `<tasty-burger-button type="3dxy" />`      | <tasty-burger-button type="3dxy" />
`arrowalt`      | `<tasty-burger-button type="arrowalt" />`    | <tasty-burger-button type="arrowalt" />
`arrowturn`     | `<tasty-burger-button type="arrowturn" />`    | <tasty-burger-button type="arrowturn" />
`boring`        | `<tasty-burger-button type="boring" />`    | <tasty-burger-button type="boring" />
`collapse`      | `<tasty-burger-button type="collapse" />`    | <tasty-burger-button type="collapse" />
`elastic`       | `<tasty-burger-button type="elastic" />`    | <tasty-burger-button type="elastic" />
`emphatic`      | `<tasty-burger-button type="emphatic" />`    | <tasty-burger-button type="emphatic" />
`minus`           | `<tasty-burger-button type="minus" />`    | <tasty-burger-button type="minus" />
`slider`           | `<tasty-burger-button type="slider" />`    | <tasty-burger-button type="slider" />
`spin`           | `<tasty-burger-button type="spin" />`    | <tasty-burger-button type="spin" />
`spring`           | `<tasty-burger-button type="spring" />`    | <tasty-burger-button type="spring" />
`stand`           | `<tasty-burger-button type="stand" />`    | <tasty-burger-button type="stand" />
`squeeze`           | `<tasty-burger-button type="squeeze" />`    | <tasty-burger-button type="squeeze" />
`vortex`           | `<tasty-burger-button type="vortex" />`    | <tasty-burger-button type="vortex" />


##### Note
Note: You can reverse the animation by adding `-r` as type suffix.

Type            | Usage example                            | Demo       
:----------------|:------------------------------------------|:-----------------------------------------:
`spin`          | `<tasty-burger-button type="spin" />`    | <tasty-burger-button type="spin" />
`spin-r`        | `<tasty-burger-button type="spin-r" />`  | <tasty-burger-button type="spin-r" />


### Events

Name                 | Params      | Description
:---------------------|:-------------|:------------------------------------------------
`toggle`             | active      | Fired after the button is clicked and its active state changed















