import {MinLength as ClassValidatorMinLength, ValidationOptions} from 'class-validator';

import Container              from '@/core/container';
import {ValidateEnum}         from '@/core/config/validate.config';
import {I18nValidatorService} from '@/core/service/i18n-validator.service';

const service: I18nValidatorService = Container.resolve(I18nValidatorService);

export function MinLength(minValue: number, validationOptions?: ValidationOptions) {
  return (target: any, propertyKey: string) => {
    validationOptions = Object.assign({
      message: () => service.getLanguageOfConfig(ValidateEnum.minLength)
    }, validationOptions ?? {});

    ClassValidatorMinLength(minValue, validationOptions)(target, propertyKey);
  };
}
