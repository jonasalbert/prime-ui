import store from '../store/index';

import users_json from '../statics/data/users.json';
import roles_json from '../statics/data/roles.json';
import resources_json from '../statics/data/resources.json';
import operations_json from '../statics/data/operations.json';
import permission_users_json from '../statics/data/permission_users.json';


const init = function() {
  let user = store.state.users.list.data;
  if (user.length==0) {
    store.commit('users/setList', users_json);
  }

  let roles = store.state.roles.list.data;
  if (roles.length==0) {
    store.commit('roles/setList', roles_json);
  }

  let resources = store.state.resources.list.data;
  if (resources.length==0) {
    store.commit('resources/setList', resources_json);
  }

  let operations = store.state.operations.list.data;
  if (operations.length==0) {
    store.commit('operations/setList', operations_json);
  }

  let permission_users = store.state.permissions.users.data;
  if (permission_users.length==0) {
    store.commit('permissions/setListUsers', permission_users_json);
  }

const result = join(permission_users_json, resources_json,'resources_id');


console.log("RESULT...", result);


}

// code reference:
  // https://stackoverflow.com/questions/54228609/how-to-merge-the-key-value-pairs-of-two-json-arrays-javascript?fbclid=IwAR2OX3JDkJLUEhsMBUsVzM0R74ts0AgdYNwIFR3mIHmZXX_-uvvohrZnt9c
const join = (many, one, key) => {
  return Object.values(
    [].concat(many, one)
    .reduce((dict, item) => {
      var value = dict[item[key]] || {}
      value = Object.assign({} , value, item)
      dict[item[key]] = value
      return dict
    }, {}));
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
