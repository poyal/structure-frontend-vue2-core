import {Attribute, XssResponse} from '@/core/decorator';
import {PageableModel}          from '@/app/shared/model/pageable.model';

export namespace TestModel {
  export namespace Request {
    export class Search extends PageableModel.Request.Search {
      @Attribute({ko: '타이틀', en: 'title'})
      title?: string;

      constructor({title, size, sort}: TestModel.Request.Search = {}) {
        super({size, sort});
        if (!!title) {
          this.title = title;
        }
      }
    }
  }

  export namespace Response {
    export class FindAll {
      @Attribute({ko: '아이디', en: 'id'})
      id!: number;

      @Attribute({ko: '타이틀', en: 'title'})
      @XssResponse()
      name!: string;

      @Attribute({ko: 'sally', en: 'sally'})
      sally!: string;
    }
  }
}
