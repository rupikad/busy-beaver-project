const PageNotFound = {
  template: `<h1>404: Page Not Found</h1>`
};

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About...