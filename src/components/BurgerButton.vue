<template>
  <div class="component-b">
    Im a tasty burger
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'Vue'
    }
  },
  methods: {
    onClick () {
      this.$emit('click', this.value)
    }
  }
}
</script>
