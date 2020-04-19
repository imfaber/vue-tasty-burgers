<template>
  <main>
    <app-sidebar />
    <section class="content">
      <article class="markdown-section">
        <router-view></router-view>
        <app-footer />
      </article>
    </section>
    <app-github-link />
  </main>
</template>

<script>
import SideBar from './components/SideBar.vue'
import Footer from './components/Footer.vue'
import GithubLink from './components/GithubLink.vue'

export default {
  components: {
    'app-sidebar': SideBar,
    'app-footer': Footer,
    'app-github-link': GithubLink
  }
}
</script>

<style lang="scss">
  body{
    overflow-y: auto !important;
  }

  .content {
    padding-top: 20px;
  }

  .markdown-section table {
    display: table;
  }

  h4 {
    margin: 1rem 0;
  }

  .hamburger{
    padding: 15px!important;
  }

  .demo {
    border: 0;
    display: flex;
    flex-direction: column;
  }

  .demo div {
    text-align: center;
    padding: 20px;
    margin: 0;
  }

  @media only screen and (min-width: 600px) {
    .demo {
      flex-direction: row;
      flex-wrap: wrap;
    }

    .demo div {
      flex: 0 0 50%;
    }
  }

  @media only screen and (min-width: 900px) {
    .demo div {
      flex: 0 0 33.3%;
    }
  }

  @media only screen and (min-width: 1160px) {
    .demo div {
      flex: 0 0 25%;
    }
  }
</style>
