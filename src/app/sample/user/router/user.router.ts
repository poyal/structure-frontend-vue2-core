const UserRouter = [
  {
    path     : '/sample/user',
    component: () => import (/* webpackChunkName: "sample.user" */ '@/app/system/view/default-layout.vue'),
    children : [
      {
        path     : 'list',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.user" */ '@/app/sample/user/view/user-list.vue')
      },
      {
        path     : 'detail/:id',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.user" */ '@/app/sample/user/view/user-detail.vue')
      },
      {
        path     : 'add',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.user" */ '@/app/sample/user/view/user-add.vue')
      },
      {
        path     : 'modify/:id',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.user" */ '@/app/sample/user/view/user-modify.vue')
      }
    ],
    redirect : '/sample/user/list'
  }
];

export default UserRouter;
