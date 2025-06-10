import {Shared}     from '@/app/shared/model/shared.model';
import {AlbumModel} from '@/app/sample/album/model/album.model';

export class AlbumState {
  list: AlbumModel.Response.FindAll[] = [];
  one: AlbumModel.Response.FindOne = new AlbumModel.Response.FindOne();
  result: Shared.Response.ActionResult = new Shared.Response.ActionResult();
}
