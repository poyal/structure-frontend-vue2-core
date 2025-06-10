import {AxiosResponse} from 'axios';
import {Actions}       from 'vuex-smart-module';

import {ToPlain, Validate} from '@/core/decorator';

import Container       from '@/core/container';
import {Enum}          from '@/app/shared/enum/enum';
import {AlbumModel}    from '@/app/sample/album/model/album.model';
import {AlbumState}    from '@/app/sample/album/vuex/album.state';
import {AlbumGetter}   from '@/app/sample/album/vuex/album.getter';
import {AlbumMutation} from '@/app/sample/album/vuex/album.mutation';
import SampleAxios     from '@/core/axios/sample.axios';

export class AlbumAction extends Actions<AlbumState, AlbumGetter, AlbumMutation, AlbumAction> {
  private http: SampleAxios = Container.resolve(SampleAxios);

  @ToPlain()
  getList(params: AlbumModel.Request.Search) {
    this.http.get(
      `/albums`,
      {params}
    ).then(
      (response: AxiosResponse<AlbumModel.Response.FindAll[]>) =>
        this.mutations.setList(response.data)
    );
  }

  getOne(id: string | number) {
    this.http.get(
      `/albums/${id}`
    ).then(
      (response: AxiosResponse<AlbumModel.Response.FindOne>) =>
        this.mutations.setOne(response.data)
    );
  }

  @Validate()
  @ToPlain()
  add(params: AlbumModel.Request.Add) {
    this.http.post(
      `/albums`,
      params
    ).then(
      (response: AxiosResponse<AlbumModel.Response.FindOne>) =>
        this.mutations.setResult({action: Enum.CORE.ACTION.RESULT.ADD, data: response.data})
    );
  }

  @Validate()
  @ToPlain()
  update(params: AlbumModel.Request.Modify) {
    this.http.put(
      `/albums/${params.id}`,
      params
    ).then(
      (response: AxiosResponse<AlbumModel.Response.FindOne>) =>
        this.mutations.setResult({action: Enum.CORE.ACTION.RESULT.UPDATE, data: response.data})
    );
  }

  delete(id: string) {
    this.http.delete(
      `/albums/${id}`
    ).then(
      (response: AxiosResponse<number>) =>
        this.mutations.setResult({action: Enum.CORE.ACTION.RESULT.DELETE, data: response.data})
    );
  }
}
