import {PageableModel} from '@/app/shared/model/pageable.model';
import {TestModel}     from '@/app/sample/test/model/test.model';

export class TestState {
  page: PageableModel.Response.Page<TestModel.Response.FindAll> = new PageableModel.Response.Page<TestModel.Response.FindAll>();
}
