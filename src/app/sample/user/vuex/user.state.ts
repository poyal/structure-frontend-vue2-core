import {Shared}    from '@/app/shared/model/shared.model';
import {UserModel} from '@/app/sample/user/model/user.model';

export class UserState {
  list: UserModel.Response.FindAll[] = [];
  one: UserModel.Response.FindOne = new UserModel.Response.FindOne();
  result: Shared.Response.ActionResult = new Shared.Response.ActionResult();
}
