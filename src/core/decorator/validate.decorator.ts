import {ValidationError, Validator, ValidatorOptions} from 'class-validator';

import Container         from '@/core/container';
import {ValidateService} from '@/core/service/validate.service';
import {EventBusService} from '@/core/service/event-bus.service';

const service: ValidateService = Container.resolve(ValidateService);
const eventBus: EventBusService = Container.resolve(EventBusService);

export function Validate(validatorOptions?: ValidatorOptions) {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    const validator: Validator = new Validator();
    const original = descriptor.value;

    descriptor.value = function(...args: any[]) {
      const errors: ValidationError[] = [];
      args.forEach((arg: any) => {
        errors.push(...validator.validateSync(arg, validatorOptions));
      });

      if (errors?.length > 0) {
        // 오류 메시지 영역
        eventBus.sample(service.setErrorMessages(errors));
        return false;
      }

      return original.apply(this, args);
    };
  };
}
