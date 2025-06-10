import {createStore, Module} from 'vuex-smart-module';

import {AlbumState}    from '@/app/sample/album/vuex/album.state';
import {AlbumGetter}   from '@/app/sample/album/vuex/album.getter';
import {AlbumMutation} from '@/app/sample/album/vuex/album.mutation';
import {AlbumAction}   from '@/app/sample/album/vuex/album.action';

const context = new Module({
  state    : AlbumState,
  getters  : AlbumGetter,
  mutations: AlbumMutation,
  actions  : AlbumAction
});

const store = createStore(context);

export class AlbumStore {
  static getInstance() {
    return context.context(store);
  }
}
