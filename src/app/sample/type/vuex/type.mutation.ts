import {Mutations} from 'vuex-smart-module';

import Container   from '@/core/container';
import {TypeModel} from '@/app/sample/type/model/type.model';
import {TypeState} from '@/app/sample/type/vuex/type.state';
import Mapper      from '@/core/service/mapper.service';

export class TypeMutation extends Mutations<TypeState> {
  private mapper: Mapper = Container.resolve(Mapper);

  setOne(one: TypeModel.Response.FindOne) {
    this.state.one = this.mapper.toObject(TypeModel.Response.FindOne, one);
  }
}
