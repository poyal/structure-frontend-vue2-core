import {createStore, Module} from 'vuex-smart-module';

import {UserState}    from '@/app/sample/user/vuex/user.state';
import {UserGetter}   from '@/app/sample/user/vuex/user.getter';
import {UserMutation} from '@/app/sample/user/vuex/user.mutation';
import {UserAction}   from '@/app/sample/user/vuex/user.action';

const context = new Module({
  state    : UserState,
  getters  : UserGetter,
  mutations: UserMutation,
  actions  : UserAction
});

const store = createStore(context);

export class UserStore {
  static getInstance() {
    return context.context(store);
  }
}
