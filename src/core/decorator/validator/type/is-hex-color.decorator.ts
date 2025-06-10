import {IsHexColor as ClassValidatorIsHexColor, ValidationOptions} from 'class-validator';

import Container              from '@/core/container';
import {ValidateEnum}         from '@/core/config/validate.config';
import {I18nValidatorService} from '@/core/service/i18n-validator.service';

const service: I18nValidatorService = Container.resolve(I18nValidatorService);

export function IsHexColor(validationOptions?: ValidationOptions) {
  return (target: any, propertyKey: string) => {
    validationOptions = Object.assign({
      message: () => service.getLanguageOfConfig(ValidateEnum.isHexColor)
    }, validationOptions ?? {});

    ClassValidatorIsHexColor(validationOptions)(target, propertyKey);
  };
}
