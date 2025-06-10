import {ValidateNested as ClassValidatorValidateNested, ValidationOptions} from 'class-validator';

export function ValidateNested(validationOptions?: ValidationOptions) {
  return (target: any, propertyKey: string) => {
    ClassValidatorValidateNested(validationOptions)(target, propertyKey);
  };
}
