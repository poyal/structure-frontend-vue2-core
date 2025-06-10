import {ValidateIf as ClassValidatorValidateIf, ValidationOptions} from 'class-validator';

export function ValidateIf(condition: (object: any, value: any) => boolean, validationOptions?: ValidationOptions) {
  return (target: any, propertyKey: string) => {
    ClassValidatorValidateIf(condition, validationOptions)(target, propertyKey);
  };
}
