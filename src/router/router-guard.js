import router from './index'

router.beforeEach(async (to, fro, next) => {
  const token = localStorage.getItem('token')
  if (!token) {
    next('/login')
  }
  return true
})
