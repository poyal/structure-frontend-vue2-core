import {Getters} from 'vuex-smart-module';

import Container from '@/core/container';
import Mapper    from '@/core/service/mapper.service';

import {PageableModel} from '@/app/shared/model/pageable.model';
import {TestModel}     from '@/app/sample/test/model/test.model';
import {TestState}     from '@/app/sample/test/vuex/test.state';

export class TestGetter extends Getters<TestState> {
  private mapper: Mapper = Container.resolve(Mapper);

  getPage(): PageableModel.Response.Page<TestModel.Response.FindAll> {
    return this.mapper.toPage(TestModel.Response.FindAll, this.state.page);
  }
}
