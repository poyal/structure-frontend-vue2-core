import {createStore, Module} from 'vuex-smart-module';

import {TypeState}    from '@/app/sample/type/vuex/type.state';
import {TypeGetter}   from '@/app/sample/type/vuex/type.getter';
import {TypeMutation} from '@/app/sample/type/vuex/type.mutation';
import {TypeAction}   from '@/app/sample/type/vuex/type.action';

const context = new Module({
  state    : TypeState,
  getters  : TypeGetter,
  mutations: TypeMutation,
  actions  : TypeAction
});

const store = createStore(context);

export class TypeStore {
  static getInstance() {
    return context.context(store);
  }
}
