import {LocalTime}         from '@js-joda/core';
import {ValidationOptions} from 'class-validator';

import {IsInstanceOfDecorator} from '@/core/decorator/validator';
import Container               from '@/core/container';
import {ValidateEnum}          from '@/core/config/validate.config';
import {I18nValidatorService}  from '@/core/service/i18n-validator.service';

const service: I18nValidatorService = Container.resolve(I18nValidatorService);

export function IsLocalTime(validationOptions?: ValidationOptions) {
  validationOptions = Object.assign({
    message: () => service.getLanguageOfConfig(ValidateEnum.isLocalTime)
  }, validationOptions ?? {});

  return IsInstanceOfDecorator(LocalTime, {
    decoratorName: 'isLocalTime',
    ...validationOptions,
  });
}
