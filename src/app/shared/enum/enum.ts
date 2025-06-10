import {StorageEnum} from '@/app/shared/enum/storage.enum';
import {ActionEnum}  from '@/app/shared/enum/action.enum';

export namespace Enum {
  export namespace CORE {
    export import STORAGE = StorageEnum;
    export import ACTION = ActionEnum;

    export enum ENV {
      LOCAL = 'local',
      DEV = 'development',
      STG = 'staging',
      PROD = 'production'
    }
  }
}
