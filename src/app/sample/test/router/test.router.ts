const TestRouter = [
  {
    path     : '/sample/test',
    component: () => import (/* webpackChunkName: "sample.test" */ '@/app/system/view/default-layout.vue'),
    children : [
      {
        path     : 'page',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.test" */ '@/app/sample/test/view/test-page.vue')
      },
    ],
    redirect : '/sample/test/page'
  }
];

export default TestRouter;
