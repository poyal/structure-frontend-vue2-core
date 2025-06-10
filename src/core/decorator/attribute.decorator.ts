import 'reflect-metadata';
import {Expose}        from 'class-transformer';
import {ExposeOptions} from 'class-transformer/types/interfaces';

interface AttributeParams extends AttributeLang {
  exposeOptions?: ExposeOptions;
}

export interface AttributeLang {
  ko?: string;
  en?: string;
}

export function Attribute({ko, en, exposeOptions}: AttributeParams = {}) {
  return (target: any, propertyKey: string) => {
    Expose(exposeOptions)(target, propertyKey);
    if (!!ko && !!en) {
      Reflect.metadata('$description', {ko, en})(target, propertyKey);
    }
  };
}
