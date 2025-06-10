import {Getters} from 'vuex-smart-module';

import Container   from '@/core/container';
import {Shared}    from '@/app/shared/model/shared.model';
import {UserModel} from '@/app/sample/user/model/user.model';
import {UserState} from '@/app/sample/user/vuex/user.state';
import Mapper      from '@/core/service/mapper.service';

export class UserGetter extends Getters<UserState> {
  private mapper: Mapper = Container.resolve(Mapper);

  getList(): UserModel.Response.FindAll[] {
    return this.mapper.toArray(UserModel.Response.FindAll, this.state.list);
  }

  getOne(): UserModel.Response.FindOne {
    return this.mapper.toObject(UserModel.Response.FindOne, this.state.one);
  }

  getModify(): UserModel.Request.Modify {
    return this.mapper.toObject(UserModel.Request.Modify, this.state.one);
  }

  getResult(): Shared.Response.ActionResult {
    return this.mapper.toObject(Shared.Response.ActionResult, this.state.result);
  }
}
