import {Attribute, Reference, XssRequest, XssResponse}                    from '@/core/decorator';
import {IsInt, IsNotEmpty, IsNumber, IsString, MaxLength, ValidateNested} from '@/core/decorator/validator';

export namespace UserModel {
  export namespace Request {
    export class Search {
      @Attribute({ko: '이름', en: 'name'})
      name?: string;

      @Attribute({ko: '사용자 이름', en: 'user name'})
      username?: string;

      @Attribute({ko: '이메일', en: 'email'})
      email?: string;

      @Attribute({ko: '휴대폰', en: 'phone'})
      phone?: string;

      constructor({name, username, email, phone}: UserModel.Request.Search = {}) {
        if (!!name) {
          this.name = name;
        }

        if (!!username) {
          this.username = username;
        }

        if (!!email) {
          this.email = email;
        }

        if (!!phone) {
          this.phone = phone;
        }
      }
    }

    export class Add {
      @Attribute({ko: '이름', en: 'name'})
      @XssRequest()
      @IsString() @IsNotEmpty() @MaxLength(200)
      name!: string;

      @Attribute({ko: '사용자 이름', en: 'user name'})
      @XssRequest()
      @IsString() @IsNotEmpty() @MaxLength(200)
      username!: string;

      @Attribute({ko: '이메일', en: 'email'})
      @IsString() @IsNotEmpty() @MaxLength(200)
      email!: string;

      @Attribute({ko: '휴대폰', en: 'phone'})
      @IsString() @IsNotEmpty() @MaxLength(200)
      phone!: string;

      @Attribute({ko: '사이트', en: 'website'})
      @IsString() @IsNotEmpty() @MaxLength(200)
      website!: string;

      @Attribute({ko: '주소', en: 'address'})
      @Reference(() => UserModel.Request.Address)
      @IsNotEmpty() @ValidateNested()
      address: UserModel.Request.Address = new UserModel.Request.Address();

      @Attribute({ko: '회사', en: 'company'})
      @Reference(() => UserModel.Request.Company)
      @IsNotEmpty() @ValidateNested()
      company: UserModel.Request.Company = new UserModel.Request.Company();
    }

    export class Modify {
      @Attribute({ko: '아이디', en: 'id'})
      @IsInt() @IsNotEmpty()
      id!: number;

      @Attribute({ko: '이름', en: 'name'})
      @XssRequest()
      @IsString() @IsNotEmpty() @MaxLength(200)
      name!: string;

      @Attribute({ko: '사용자 이름', en: 'user name'})
      @XssRequest()
      @IsString() @IsNotEmpty() @MaxLength(200)
      username!: string;

      @Attribute({ko: '이메일', en: 'email'})
      @IsString() @IsNotEmpty() @MaxLength(200)
      email!: string;

      @Attribute({ko: '휴대폰', en: 'phone'})
      @IsString() @IsNotEmpty() @MaxLength(200)
      phone!: string;

      @Attribute({ko: '사이트', en: 'website'})
      @IsString() @IsNotEmpty() @MaxLength(200)
      website!: string;

      @Attribute({ko: '주소', en: 'address'})
      @Reference(() => UserModel.Request.Address)
      @IsNotEmpty() @ValidateNested()
      address: UserModel.Request.Address = new UserModel.Request.Address();

      @Attribute({ko: '회사', en: 'company'})
      @Reference(() => UserModel.Request.Company)
      @IsNotEmpty() @ValidateNested()
      company: UserModel.Request.Company = new UserModel.Request.Company();
    }

    export class Address {
      @Attribute({ko: '도로명', en: 'street'})
      @IsString() @IsNotEmpty()
      street!: string;

      @Attribute({ko: 'suite', en: 'suite'})
      @IsString() @IsNotEmpty()
      suite!: string;

      @Attribute({ko: '도시', en: 'city'})
      @IsString() @IsNotEmpty()
      city!: string;

      @Attribute({ko: '우편번호', en: 'zipcode'})
      @IsString() @IsNotEmpty()
      zipcode!: string;

      @Attribute({ko: '지역', en: 'geo'})
      @Reference(() => UserModel.Request.Geo)
      geo: UserModel.Request.Geo = new UserModel.Request.Geo();
    }

    export class Geo {
      @Attribute({ko: '위도', en: 'lat'})
      @IsNumber() @IsNotEmpty()
      lat!: number;

      @Attribute({ko: '경도', en: 'lng'})
      @IsNumber() @IsNotEmpty()
      lng!: number;
    }

    export class Company {
      @Attribute({ko: '이름', en: 'name'})
      @IsString() @IsNotEmpty()
      name!: string;

      @Attribute({ko: '캐치프라이스', en: 'catchPhrase'})
      @IsString() @IsNotEmpty()
      catchPhrase!: string;

      @Attribute({ko: 'bs', en: 'bs'})
      @IsString() @IsNotEmpty()
      bs!: string;
    }
  }

  export namespace Response {
    export class FindAll {
      @Attribute({ko: '아이디', en: 'id'})
      id!: number;

      @Attribute({ko: '이름', en: 'name'})
      @XssResponse()
      name!: string;

      @Attribute({ko: '사용자 이름', en: 'user name'})
      @XssResponse()
      username!: string;

      @Attribute({ko: '이메일', en: 'email'})
      email!: string;

      @Attribute({ko: '휴대폰', en: 'phone'})
      phone!: string;

      @Attribute({ko: '사이트', en: 'website'})
      website!: string;

      @Attribute({ko: '주소', en: 'address'})
      @Reference(() => UserModel.Response.Address)
      address!: UserModel.Response.Address;

      @Attribute({ko: '회사', en: 'company'})
      @Reference(() => UserModel.Response.Company)
      company!: UserModel.Response.Company;
    }

    export class FindOne {
      @Attribute({ko: '아이디', en: 'id'})
      id!: number;

      @Attribute({ko: '이름', en: 'name'})
      @XssResponse()
      name!: string;

      @Attribute({ko: '사용자 이름', en: 'user name'})
      @XssResponse()
      username!: string;

      @Attribute({ko: '이메일', en: 'email'})
      email!: string;

      @Attribute({ko: '휴대폰', en: 'phone'})
      phone!: string;

      @Attribute({ko: '사이트', en: 'website'})
      website!: string;

      @Attribute({ko: '주소', en: 'address'})
      @Reference(() => UserModel.Response.Address)
      address!: UserModel.Response.Address;

      @Attribute({ko: '회사', en: 'company'})
      @Reference(() => UserModel.Response.Company)
      company!: UserModel.Response.Company;
    }

    export class Address {
      @Attribute({ko: '도로명', en: 'street'})
      street!: string;

      @Attribute({ko: 'suite', en: 'suite'})
      suite!: string;

      @Attribute({ko: '도시', en: 'city'})
      city!: string;

      @Attribute({ko: '우편번호', en: 'zipcode'})
      zipcode!: string;

      @Attribute({ko: '지역', en: 'geo'})
      @Reference(() => UserModel.Response.Geo)
      geo!: UserModel.Response.Geo;
    }

    export class Geo {
      @Attribute({ko: '위도', en: 'lat'})
      lat!: number;

      @Attribute({ko: '경도', en: 'lng'})
      lng!: number;
    }

    export class Company {
      @Attribute({ko: '이름', en: 'name'})
      name!: string;

      @Attribute({ko: '캐치프라이스', en: 'catchPhrase'})
      catchPhrase!: string;

      @Attribute({ko: 'bs', en: 'bs'})
      bs!: string;
    }
  }
}
