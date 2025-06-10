import {AxiosResponse} from 'axios';
import {Actions}       from 'vuex-smart-module';

import {ToPlain}   from '@/core/decorator';
import Container   from '@/core/container';
import NicedayAxios    from '@/core/axios/niceday.axios';

import {PageableModel} from '@/app/shared/model/pageable.model';
import {TestModel}     from '@/app/sample/test/model/test.model';
import {TestState}     from '@/app/sample/test/vuex/test.state';
import {TestGetter}    from '@/app/sample/test/vuex/test.getter';
import {TestMutation}  from '@/app/sample/test/vuex/test.mutation';

export class TestAction extends Actions<TestState, TestGetter, TestMutation, TestAction> {
  private http: NicedayAxios = Container.resolve(NicedayAxios);

  @ToPlain()
  getPage(params: TestModel.Request.Search) {
    this.http.get(
      `/artists/page`,
      {params}
    ).then(
      (response: AxiosResponse<PageableModel.Response.Page<TestModel.Response.FindAll>>) =>
        this.mutations.setPage(response.data)
    );
  }
}
