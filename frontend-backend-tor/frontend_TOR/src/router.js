import { createRouter, createWebHashHistory } from 'vue-router'
// there is also createWebHashHistory and createMemoryHistory

import App from './App.vue';


// 2. Define some routes
// Each route should map to a component.
const routes = [
  {
    path: '/',
    name: 'root',
    component: App,

  }
]

// 3. Create the router instance and pass the `routes` option
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes: routes,
})


export default router;




