import {Attribute, XssRequest, XssResponse}               from '@/core/decorator';
import {IsInt, IsNotEmpty, IsNumber, IsString, MaxLength} from '@/core/decorator/validator';

export namespace AlbumModel {
  export namespace Request {
    export class Search {
      @Attribute({ko: '타이틀', en: 'title'})
      title?: string;

      constructor({title}: AlbumModel.Request.Search = {}) {
        if (!!title) {
          this.title = title;
        }
      }
    }

    export class Add {
      @Attribute({ko: '타이틀', en: 'title'})
      @XssRequest()
      @IsString() @IsNotEmpty() @MaxLength(200)
      title!: string;

      @Attribute({ko: '유저 아이디', en: 'user id'})
      @IsNumber() @IsNotEmpty()
      userId!: number;
    }

    export class Modify {
      @Attribute({ko: '아이디', en: 'id'})
      @IsInt() @IsNotEmpty()
      id!: number;

      @Attribute({ko: '타이틀', en: 'title'})
      @XssRequest()
      @IsString() @IsNotEmpty() @MaxLength(200)
      title!: string;

      @Attribute({ko: '유저 아이디', en: 'user id'})
      @IsNumber() @IsNotEmpty()
      userId!: number;
    }
  }

  export namespace Response {
    export class FindAll {
      @Attribute({ko: '아이디', en: 'id'})
      id!: number;

      @Attribute({ko: '타이틀', en: 'title'})
      @XssResponse()
      title!: string;

      @Attribute({ko: '유저 아이디', en: 'user id'})
      userId!: number;
    }

    export class FindOne {
      @Attribute({ko: '아이디', en: 'id'})
      id!: number;

      @Attribute({ko: '타이틀', en: 'title'})
      @XssResponse()
      title!: string;

      @Attribute({ko: '유저 아이디', en: 'user id'})
      userId!: number;
    }
  }
}
