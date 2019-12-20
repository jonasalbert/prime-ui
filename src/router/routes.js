
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PageUserManagement.vue')
      }
    ]
  },

  {
    path: '/page',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      {
        path: 'usermanagement',
        name: 'usermanagement',
        component: () => import('pages/PageUserManagement.vue')
      },
      {
        path: 'synchronization',
        name: 'synchronization',
        component: () => import('pages/PageSynchronization.vue')
      },
      {
        path: 'files201',
        name: 'files201',
        component: () => import('pages/Page201Files.vue')
      },
      {
        path: 'timeandattendance',
        name: 'timeandattendance',
        component: () => import('pages/PageTimeAndAttendance.vue')
      },
      {
        path: 'payslip',
        name: 'payslip',
        component: () => import('pages/PagePayslip.vue')
      },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
