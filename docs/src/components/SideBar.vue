<template>
  <aside class="sidebar">
    <h1>
      <a class="app-name-link" data-nosearch="" href="/">Guide</a>
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
          title: 'Getting started',
          pages: [
            { to: 'quick-start', title: 'Quick start' },
            { to: 'install-for-dev', title: 'Install for development' }
          ]
        },
        {
          title: 'Components',
          pages: [
            { to: '/tasty-burger-button', title: 'Tasty burger button' }
          ]
        }
      ]
    }
  },
}
</script>
