import {Injectable} from '@/core/decorator';

import Container      from '@/core/container';
import {ValidateEnum} from '@/core/config/validate.config';
import KoLang         from '@/core/lang/validator/ko.lang';
import EnLang         from '@/core/lang/validator/en.lang';

import {Enum}         from '@/app/shared/enum/enum';
import StorageService from '@/app/shared/service/storage.service';

@Injectable()
export class I18nValidatorService {
  private storageService: StorageService = Container.resolve(StorageService);

  getLanguageOfConfig(types: ValidateEnum): string {
    let returnValue: string;

    const lang: string | null = this.storageService.getLocalStorage(Enum.CORE.STORAGE.KEY.LANG);

    switch (lang) {
      case 'en':
        returnValue = EnLang[types] ?? '';
        break;

      case 'ko':
      default:
        returnValue = KoLang[types] ?? '';
        break;
    }

    return returnValue;
  }
}


