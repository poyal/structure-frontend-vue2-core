import {instanceToPlain}       from 'class-transformer';
import {ClassTransformOptions} from 'class-transformer/types/interfaces';

export function ToPlain(classTransformOptions?: ClassTransformOptions) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const original = descriptor.value;
    descriptor.value = function(...args: any[]) {
      const returnValue: any[] = [];

      args.forEach((arg: any) => {
        returnValue.push(instanceToPlain(arg, classTransformOptions));
      });

      return original.apply(this, returnValue);
    };
  };
}
