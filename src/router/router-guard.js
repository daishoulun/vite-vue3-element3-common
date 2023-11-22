import router from './index'

router.beforeEach(async (to, fro, next) => {
  const { fullPath } = to
  const token = localStorage.getItem('token')
  if (fullPath === '/login') {
    next()
  }
  if (!token) {
    next('/login')
  }
  next()
})
