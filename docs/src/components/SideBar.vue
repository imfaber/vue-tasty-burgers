<template>
  <aside class="sidebar">
    <h1>
      <a href=""></a>
      <router-link to="index">
        <a class="app-name-link" data-nosearch="">Vue Tasty Burgers</a>
      </router-link>
    </h1>
    <div class="sidebar-nav">
      <ul>
        <li v-for="section in sections" :key="section.title">
          <p>{{section.title}}</p>
          <ul>
            <router-link v-for="page in section.pages"
              tag="li" active-class="active" :key="page.title" :to="page.to">
              <a>{{page.title}}</a>
            </router-link>
          </ul>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      sections: [
        {
          // title: 'Getting started',
          pages: [
            { to: 'quick-start', title: 'Quick start' },
            { to: 'install-for-dev', title: 'Install for development' },
            { to: 'tasty-burger-button', title: 'How to use it' },
            { to: 'available-burgers', title: 'Available burger buttons' }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  .sidebar>h1 {
    text-align: left;
    font-weight: bold;
    color: #42b983;
    margin: 15px 0 20px 30px;
  }
</style>
