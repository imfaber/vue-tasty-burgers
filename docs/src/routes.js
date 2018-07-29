import QuickStart from './pages/QuickStart.md'
import InstallForDev from './pages/InstallForDev.md'
import TastyBurgerButton from './pages/TastyBurgerButton.md'
import AvailableButtons from './pages/AvailableButtons.md'
import Index from './pages/Index.md'

export default [
  { path: '/index', component: Index },
  { path: '/quick-start', component: QuickStart },
  { path: '/install-for-dev', component: InstallForDev },
  { path: '/tasty-burger-button', component: TastyBurgerButton },
  { path: '/available-burgers', component: AvailableButtons },
  { path: '*', redirect: '/index' }
]
