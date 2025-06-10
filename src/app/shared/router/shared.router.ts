import NotFound from '@/app/system/view/not-found.vue';

const SharedRouter = [
  {
    path    : '/',
    redirect: '/dashboard',
  },
  {
    path     : '/not-found',
    meta     : {routerGuard: false},
    component: NotFound,
  },
  {
    path    : '*',
    redirect: '/not-found',
  }
];

export default SharedRouter;
