import {Mutations} from 'vuex-smart-module';

import Container from '@/core/container';

import {PageableModel} from '@/app/shared/model/pageable.model';
import {TestModel}     from '@/app/sample/test/model/test.model';
import {TestState}     from '@/app/sample/test/vuex/test.state';
import Mapper          from '@/core/service/mapper.service';

export class TestMutation extends Mutations<TestState> {
  private mapper: Mapper = Container.resolve(Mapper);

  setPage(page: PageableModel.Response.Page<TestModel.Response.FindAll>) {
    this.state.page = this.mapper.toPage(TestModel.Response.FindAll, page);
  }
}
