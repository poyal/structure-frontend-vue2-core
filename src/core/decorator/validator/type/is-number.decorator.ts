import {IsNumber as ClassValidatorIsNumber, ValidationOptions} from 'class-validator';
import {IsNumberOptions}                                       from 'class-validator/types/decorator/typechecker/IsNumber';

import Container              from '@/core/container';
import {ValidateEnum}         from '@/core/config/validate.config';
import {I18nValidatorService} from '@/core/service/i18n-validator.service';

const service: I18nValidatorService = Container.resolve(I18nValidatorService);

export function IsNumber(options?: IsNumberOptions, validationOptions?: ValidationOptions) {
  return (target: any, propertyKey: string) => {
    validationOptions = Object.assign({
      message: () => service.getLanguageOfConfig(ValidateEnum.isNumber)
    }, validationOptions ?? {});

    ClassValidatorIsNumber(options, validationOptions)(target, propertyKey);
  };
}
