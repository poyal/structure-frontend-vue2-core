import {IsNumericOptions}                                                  from 'validator';
import {IsNumberString as ClassValidatorIsNumberString, ValidationOptions} from 'class-validator';

import Container              from '@/core/container';
import {ValidateEnum}         from '@/core/config/validate.config';
import {I18nValidatorService} from '@/core/service/i18n-validator.service';

const service: I18nValidatorService = Container.resolve(I18nValidatorService);

export function IsNumberString(options?: IsNumericOptions, validationOptions?: ValidationOptions) {
  return (target: any, propertyKey: string) => {
    validationOptions = Object.assign({
      message: () => service.getLanguageOfConfig(ValidateEnum.isNumberString)
    }, validationOptions ?? {});

    ClassValidatorIsNumberString(options, validationOptions)(target, propertyKey);
  };
}
