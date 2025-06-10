import {container} from 'tsyringe';
import constructor from 'tsyringe/dist/typings/types/constructor';

export default class Container {
  static resolve<T>(params: constructor<T>): T {
    return container.resolve(params);
  }
}
