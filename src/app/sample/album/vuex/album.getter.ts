import {Getters} from 'vuex-smart-module';

import Container    from '@/core/container';
import {Shared}     from '@/app/shared/model/shared.model';
import {AlbumState} from '@/app/sample/album/vuex/album.state';
import {AlbumModel} from '@/app/sample/album/model/album.model';
import Mapper       from '@/core/service/mapper.service';

export class AlbumGetter extends Getters<AlbumState> {
  private mapper: Mapper = Container.resolve(Mapper);

  getList(): AlbumModel.Response.FindAll[] {
    return this.mapper.toArray(AlbumModel.Response.FindAll, this.state.list);
  }

  getOne(): AlbumModel.Response.FindOne {
    return this.mapper.toObject(AlbumModel.Response.FindOne, this.state.one);
  }

  getModify(): AlbumModel.Request.Modify {
    return this.mapper.toObject(AlbumModel.Request.Modify, this.state.one);
  }

  getResult(): Shared.Response.ActionResult {
    return this.mapper.toObject(Shared.Response.ActionResult, this.state.result);
  }
}
