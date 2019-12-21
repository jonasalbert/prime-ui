import store from '../store/index';

import users_json from '../statics/data/users.json';
import roles_json from '../statics/data/roles.json'
import resources_json from '../statics/data/resources.json'
import operations_json from '../statics/data/operations.json'


const init = function() {
  let user = store.state.users.list.data;
  if (user.length==0) {
    store.commit('users/setList', users_json)
  }

  let roles = store.state.roles.list.data;
  if (roles.length==0) {
    store.commit('roles/setList', roles_json)
  }
}


const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    beforeEnter: (to, from, next) => {
      init();
      next();
    },
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
    beforeEnter: (to, from, next) => {
      init();
      next();
    },
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
