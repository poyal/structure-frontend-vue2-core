import {createStore, Module} from 'vuex-smart-module';

import {TestState}    from '@/app/sample/test/vuex/test.state';
import {TestGetter}   from '@/app/sample/test/vuex/test.getter';
import {TestMutation} from '@/app/sample/test/vuex/test.mutation';
import {TestAction}   from '@/app/sample/test/vuex/test.action';

const context = new Module({
  state    : TestState,
  getters  : TestGetter,
  mutations: TestMutation,
  actions  : TestAction
});

const store = createStore(context);

export class TestStore {
  static getInstance() {
    return context.context(store);
  }
}
