import QuickStart from './pages/QuickStart.md'
import InstallForDev from './pages/InstallForDev.md'
import TastyBurgerButton from './pages/TastyBurgerButton.md'

export default [
  { path: '/quick-start', component: QuickStart },
  { path: '/install-for-dev', component: InstallForDev },
  { path: '/tasty-burger-button', component: TastyBurgerButton },
  { path: '*', redirect: '/quick-start' }
]
