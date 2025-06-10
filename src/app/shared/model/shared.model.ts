import {Attribute} from '@/core/decorator';

import {Enum} from '@/app/shared/enum/enum';

export namespace Shared {
  export namespace Response {
    export class ActionResult {
      @Attribute()
      action!: Enum.CORE.ACTION.RESULT | null;

      @Attribute()
      data!: any | null;
    }
  }
}
