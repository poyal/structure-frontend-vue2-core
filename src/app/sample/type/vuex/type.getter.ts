import {Getters} from 'vuex-smart-module';

import Container   from '@/core/container';
import {TypeModel} from '@/app/sample/type/model/type.model';
import {TypeState} from '@/app/sample/type/vuex/type.state';
import Mapper      from '@/core/service/mapper.service';

export class TypeGetter extends Getters<TypeState> {
  private mapper: Mapper = Container.resolve(Mapper);

  getEdit(): TypeModel.Request.Edit {
    return this.mapper.toObject(TypeModel.Request.Edit, this.state.one);
  }
}
