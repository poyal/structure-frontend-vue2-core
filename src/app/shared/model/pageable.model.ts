import {Attribute, Reference} from '@/core/decorator';

import {DEFAULT_PAGE_SORT, PAGE_DEFAULT_SIZE} from '@/app/shared/config/n-page-info.config';

export namespace PageableModel {
  export namespace Request {
    export class Search {
      @Attribute({ko: 'page', en: 'page'})
      page?: number = 0;

      @Attribute({ko: 'size', en: 'size'})
      size?: number;

      @Attribute({ko: 'sort', en: 'sort'})
      sort?: string;

      constructor(options?: PageableModel.Request.Options) {
        this.size = PAGE_DEFAULT_SIZE();
        this.sort = DEFAULT_PAGE_SORT;

        if (!!options) {
          if (options.size !== null && options.size !== undefined) {
            this.size = options.size;
          }

          if (options.sort !== null && options.sort !== undefined) {
            this.sort = options.sort;
          }
        }
      }
    }

    export class Options {
      @Attribute({ko: 'size', en: 'size'})
      size?: number;

      @Attribute({ko: 'sort', en: 'sort'})
      sort?: string;
    }
  }

  export namespace Response {
    export class Page<T> {
      @Attribute({ko: 'first', en: 'first'})
      first!: boolean;

      @Attribute({ko: 'last', en: 'last'})
      last!: boolean;

      @Attribute({ko: 'number', en: 'number'})
      number!: number;

      @Attribute({ko: 'numberOfElements', en: 'numberOfElements'})
      numberOfElements!: number;

      @Attribute({ko: 'size', en: 'size'})
      size!: number;

      @Attribute({ko: 'totalElements', en: 'totalElements'})
      totalElements!: number;

      @Attribute({ko: 'totalPages', en: 'totalPages'})
      totalPages!: number;

      @Attribute({ko: 'pageable', en: 'pageable'})
      @Reference(() => PageableModel.Response.PageableInfo)
      pageable!: PageableModel.Response.PageableInfo;

      @Attribute({ko: 'sort', en: 'sort'})
      @Reference(() => PageableModel.Response.Sort)
      sort!: PageableModel.Response.Sort;

      @Attribute({ko: '목록', en: '목록'})
      content!: T[];
    }

    export class PageableInfo {
      @Attribute({ko: 'offset', en: 'offset'})
      offset!: number;

      @Attribute({ko: 'pageNumber', en: 'pageNumber'})
      pageNumber!: number;

      @Attribute({ko: 'pageSize', en: 'pageSize'})
      pageSize!: number;

      @Attribute({ko: 'paged', en: 'paged'})
      paged!: boolean;

      @Attribute({ko: 'unpaged', en: 'unpaged'})
      unpaged!: boolean;

      @Attribute({ko: 'sort', en: 'sort'})
      @Reference(() => PageableModel.Response.Sort)
      sort!: PageableModel.Response.Sort;
    }

    export class Sort {
      @Attribute({ko: 'sorted', en: 'sorted'})
      sorted!: boolean;

      @Attribute({ko: 'unsorted', en: 'unsorted'})
      unsorted!: boolean;
    }
  }
}
