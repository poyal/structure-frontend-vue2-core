import Router, {RouteConfig} from 'vue-router';

import {checkSw} from '@/register-service-worker';

const requireContext: __WebpackModuleApi.RequireContext = require.context('@/', true, /\w+.router.ts$/);
const routeConfigs: RouteConfig[] = [];
requireContext.keys().forEach(fileName => [...requireContext(fileName).default].forEach(route => routeConfigs.push(route)));

const routerMethods = ['push', 'replace'];

routerMethods.forEach((method: string) => {
  const originalCall = (Router.prototype as any)[method];
  (Router.prototype as any)[method] = function(location: any, onResolve: any, onReject: any): Promise<any> {
    if (onResolve || onReject) {
      return originalCall.call(this, location, onResolve, onReject);
    }
    return (originalCall.call(this, location) as any).catch((err: any) => err);
  };
});

const router = new Router({
  mode  : 'history',
  routes: routeConfigs
});


router.beforeEach((to, from, next) => {
  if (to.fullPath !== from.fullPath) {
    checkSw();
  }

  next();
});

export default router;
