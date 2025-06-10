import {registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface} from 'class-validator';

import Container              from '@/core/container';
import {ValidateEnum}         from '@/core/config/validate.config';
import {I18nValidatorService} from '@/core/service/i18n-validator.service';

const service: I18nValidatorService = Container.resolve(I18nValidatorService);

export function IsEnum(enumInstance: any, validationOptions?: ValidationOptions) {
  return (target: object, propertyName: string) => {
    registerDecorator({
      target     : target.constructor,
      propertyName,
      options    : validationOptions,
      constraints: [enumInstance],
      validator  : IsEnumValidate,
    });
  };
}

@ValidatorConstraint({name: 'isEnum'})
export class IsEnumValidate implements ValidatorConstraintInterface {
  validate(target: any, args: ValidationArguments): boolean {
    let returnValue: boolean = false;

    if (!!args.value) {
      // if (args.value.constructor.name === args.constraints[0].name) {
      if (args.value.constructor === args.constraints[0]) {
        returnValue = true;
      }
    }

    return returnValue;
  }

  defaultMessage(args: ValidationArguments) {
    return service.getLanguageOfConfig(ValidateEnum.isEnum);
  }
}
