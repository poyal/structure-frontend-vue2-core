import {singleton} from 'tsyringe';
import constructor from 'tsyringe/dist/typings/types/constructor';

export function Injectable<T>() {

  return (target: constructor<T>): void => {
    singleton()(target);
  };
}
