import {AxiosResponse} from 'axios';
import {Actions}       from 'vuex-smart-module';

import {ToPlain, Validate} from '@/core/decorator';

import Container      from '@/core/container';
import {Enum}         from '@/app/shared/enum/enum';
import {UserModel}    from '@/app/sample/user/model/user.model';
import {UserState}    from '@/app/sample/user/vuex/user.state';
import {UserGetter}   from '@/app/sample/user/vuex/user.getter';
import {UserMutation} from '@/app/sample/user/vuex/user.mutation';
import SampleAxios    from '@/core/axios/sample.axios';

export class UserAction extends Actions<UserState, UserGetter, UserMutation, UserAction> {
  private http: SampleAxios = Container.resolve(SampleAxios);

  @ToPlain()
  getList(params: UserModel.Request.Search) {
    this.http.get(
      `/users`,
      {params}
    ).then(
      (response: AxiosResponse<UserModel.Response.FindAll[]>) =>
        this.mutations.setList(response.data)
    );
  }

  getOne(id: string | number) {
    this.http.get(
      `/users/${id}`
    ).then(
      (response: AxiosResponse<UserModel.Response.FindOne>) =>
        this.mutations.setOne(response.data)
    );
  }

  @Validate()
  @ToPlain()
  add(params: UserModel.Request.Add) {
    this.http.post(
      `/users`,
      params
    ).then(
      (response: AxiosResponse<UserModel.Response.FindOne>) =>
        this.mutations.setResult({action: Enum.CORE.ACTION.RESULT.ADD, data: response.data})
    );
  }

  @Validate()
  @ToPlain()
  update(params: UserModel.Request.Modify) {
    this.http.put(
      `/users/${params.id}`,
      params
    ).then(
      (response: AxiosResponse<UserModel.Response.FindOne>) =>
        this.mutations.setResult({action: Enum.CORE.ACTION.RESULT.UPDATE, data: response.data})
    );
  }

  delete(id: string) {
    this.http.delete(
      `/users/${id}`
    ).then(
      (response: AxiosResponse<number>) =>
        this.mutations.setResult({action: Enum.CORE.ACTION.RESULT.DELETE, data: response.data})
    );
  }
}
