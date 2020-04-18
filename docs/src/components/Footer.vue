<template>
  <footer>
    <hr>
    <span>©2018-{{ year }} <a href="https://imfaber.me" target="_blank">Imfaber</a></span>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
