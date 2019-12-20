import Vue from 'vue'
import Vuex from 'vuex'

// import example from './module-example'

Vue.use(Vuex)

// ----------------------------------------------------------------------------------------------------------------
// Smart registration of modules...
// ----------------------------------------------------------------------------------------------------------------
import camelCase from 'lodash/camelCase'
// const files = require.context(".", true, /\.js$/)  // uncomment if your modules is in one single .js file.
const files = require.context(".", true, /\/$/)       // uncomment if your modules is inside the folder. Similar to quasar's foldder structure.
const modules = {}

files.keys().forEach(fileName => {
  if (fileName ==='./' || fileName ==='./index.js') return
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g,''))
  modules[moduleName] = files(fileName).default
});
// ----------------------------------------------------------------------------------------------------------------


/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// export default function (/* { ssrContext } */) {
//   const Store = new Vuex.Store({
//     modules:modules,

//     // enable strict mode (adds overhead!)
//     // for dev mode only
//     strict: process.env.DEV
//   })

//   return Store
// }


const Store = new Vuex.Store({
  modules:modules,

  // enable strict mode (adds overhead!)
  // for dev mode only
  strict: process.env.DEV
})

export default Store;
