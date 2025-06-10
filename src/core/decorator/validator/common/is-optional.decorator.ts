import {IsOptional as ClassValidatorIsOptional, ValidationOptions} from 'class-validator';

export function IsOptional(validationOptions?: ValidationOptions) {
  return (target: any, propertyKey: string) => {
    ClassValidatorIsOptional(validationOptions)(target, propertyKey);
  };
}
