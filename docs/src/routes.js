import QuickStart from './pages/QuickStart.md'
import ComponentA from './pages/ComponentA.md'
import VueTastyBUrger from './pages/VueTastyBurger.md'

export default [
  { path: '/quick-start', component: QuickStart },
  { path: '/component-a', component: ComponentA },
  { path: '/vue-tasty-burger', component: VueTastyBUrger },
  { path: '*', redirect: '/quick-start' }
]
