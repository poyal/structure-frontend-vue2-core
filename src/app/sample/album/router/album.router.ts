const AlbumRouter = [
  {
    path     : '/sample/album',
    component: () => import (/* webpackChunkName: "sample.album" */ '@/app/system/view/default-layout.vue'),
    children : [
      {
        path     : 'list',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.album" */ '@/app/sample/album/view/album-list.vue')
      },
      {
        path     : 'detail/:id',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.album" */ '@/app/sample/album/view/album-detail.vue')
      },
      {
        path     : 'add',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.album" */ '@/app/sample/album/view/album-add.vue')
      },
      {
        path     : 'modify/:id',
        meta     : {routerGuard: true},
        component: () => import(/* webpackChunkName: "sample.album" */ '@/app/sample/album/view/album-modify.vue')
      }
    ],
    redirect : '/sample/album/list'
  }
];

export default AlbumRouter;
