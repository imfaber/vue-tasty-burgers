import QuickStart from './pages/QuickStart.md'
import TastyBurgerButton from './pages/TastyBurgerButton.md'

export default [
  { path: '/quick-start', component: QuickStart },
  { path: '/tasty-burger-button', component: TastyBurgerButton },
  { path: '*', redirect: '/quick-start' }
]
