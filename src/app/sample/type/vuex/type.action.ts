import {Actions} from 'vuex-smart-module';

import {ToPlain, Validate} from '@/core/decorator';

import {TypeModel}    from '@/app/sample/type/model/type.model';
import {TypeState}    from '@/app/sample/type/vuex/type.state';
import {TypeGetter}   from '@/app/sample/type/vuex/type.getter';
import {TypeMutation} from '@/app/sample/type/vuex/type.mutation';
import SampleConfig   from '@/app/sample/type/config/sample.config';

export class TypeAction extends Actions<TypeState, TypeGetter, TypeMutation, TypeAction> {
  getOne() {
    // @ts-ignore
    this.mutations.setOne(SampleConfig);
  }

  @Validate()
  @ToPlain()
  edit(params: TypeModel.Request.Edit) {
    console.log(params);
  }
}
