const DashboardRouter = [
  {
    path     : '/dashboard',
    component: () => import (/* webpackChunkName: "dashboard" */ '@/app/system/view/default-layout.vue'),
    children : [
      {
        path     : '',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/app/dashboard/view/dashboard-container.vue')
      }
    ],
    redirect : '/dashboard'
  }
];

export default DashboardRouter;
