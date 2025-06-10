const TypeRouter = [
  {
    path     : '/sample/type',
    component: () => import (/* webpackChunkName: "sample.type" */ '@/app/system/view/default-layout.vue'),
    children : [
      {
        path     : 'edit',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.type" */ '@/app/sample/type/view/type-edit.vue')
      },
    ],
    redirect : '/sample/type/edit'
  }
];

export default TypeRouter;
