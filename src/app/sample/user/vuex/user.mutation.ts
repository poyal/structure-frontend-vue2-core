import {Mutations} from 'vuex-smart-module';

import Container   from '@/core/container';
import {Shared}    from '@/app/shared/model/shared.model';
import {UserModel} from '@/app/sample/user/model/user.model';
import {UserState} from '@/app/sample/user/vuex/user.state';
import Mapper      from '@/core/service/mapper.service';

export class UserMutation extends Mutations<UserState> {
  private mapper: Mapper = Container.resolve(Mapper);

  setList(list: UserModel.Response.FindAll[]) {
    this.state.list = this.mapper.toArray(UserModel.Response.FindAll, list);
  }

  setOne(one: UserModel.Response.FindOne) {
    this.state.one = this.mapper.toObject(UserModel.Response.FindOne, one);
  }

  setResult(result: Shared.Response.ActionResult) {
    this.state.result = this.mapper.toObject(Shared.Response.ActionResult, result);
  }
}
