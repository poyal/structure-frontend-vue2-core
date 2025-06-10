import {Mutations} from 'vuex-smart-module';

import Container    from '@/core/container';
import {Shared}     from '@/app/shared/model/shared.model';
import {AlbumModel} from '@/app/sample/album/model/album.model';
import {AlbumState} from '@/app/sample/album/vuex/album.state';
import Mapper       from '@/core/service/mapper.service';

export class AlbumMutation extends Mutations<AlbumState> {
  private mapper: Mapper = Container.resolve(Mapper);

  setList(list: AlbumModel.Response.FindAll[]) {
    this.state.list = this.mapper.toArray(AlbumModel.Response.FindAll, list);
  }

  setOne(one: AlbumModel.Response.FindOne) {
    this.state.one = this.mapper.toObject(AlbumModel.Response.FindOne, one);
  }

  setResult(result: Shared.Response.ActionResult) {
    this.state.result = this.mapper.toObject(Shared.Response.ActionResult, result);
  }
}
