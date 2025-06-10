import {LocalDate, LocalDateTime, LocalTime} from '@js-joda/core';

import {Attribute, DateFormat, DateToString, Reference, StringToDate}                          from '@/core/decorator';
import {ArrayNotEmpty, IsArray, IsEnum, IsLocalDate, IsLocalDateTime, IsLocalTime, IsNotEmpty} from '@/core/decorator/validator';

import {CustomType} from '@/app/sample/type/enum/custom.type';
import {SampleType} from '@/app/sample/type/enum/sample.type';

export namespace TypeModel {
  export namespace Request {
    export class Edit {
      @Attribute({ko: 'customType', en: 'customType'})
      @Reference(() => CustomType)
      @IsNotEmpty() @IsEnum(CustomType)
      customType!: CustomType;

      @Attribute({ko: 'sampleType', en: 'sampleType'})
      @Reference(() => SampleType)
      @IsNotEmpty() @IsEnum(SampleType)
      sampleType!: SampleType;

      @Attribute({ko: 'sampleTypes', en: 'sampleTypes'})
      @Reference(() => SampleType)
      @IsNotEmpty() @IsArray() @ArrayNotEmpty()
      sampleTypes!: SampleType[];

      @Attribute({ko: 'date', en: 'date'})
      @Reference(() => LocalDate)
      @DateFormat('yyyyMMdd')
      @IsNotEmpty() @IsLocalDate()
      date!: LocalDate;

      @Attribute({ko: 'dateTime', en: 'dateTime'})
      @Reference(() => LocalDateTime)
      @DateFormat('yyyy/MM/dd HH:mm:ss')
      @IsNotEmpty() @IsLocalDateTime()
      dateTime!: LocalDateTime;

      @Attribute({ko: 'time', en: 'time'})
      @Reference(() => LocalTime)
      @DateFormat('HH~mm~ss')
      @IsNotEmpty() @IsLocalTime()
      time!: LocalTime;

      @Attribute({ko: 'customDate', en: 'customDate'})
      @Reference(() => LocalDate)
      @StringToDate('yyyyMMdd')
      @DateToString('yyyy/MM/dd')
      @IsNotEmpty() @IsLocalDate()
      customDate!: LocalDate;

      @Attribute({ko: 'defaultDate', en: 'defaultDate'})
      @Reference(() => LocalDate)
      defaultDate!: LocalDate;

      @Attribute({ko: 'defaultDateTime', en: 'defaultDateTime'})
      @Reference(() => LocalDateTime)
      defaultDateTime!: LocalDateTime;

      @Attribute({ko: 'defaultTime', en: 'defaultTime'})
      @Reference(() => LocalTime)
      defaultTime!: LocalTime;
    }
  }

  export namespace Response {
    export class FindOne {
      @Attribute({ko: 'customType', en: 'customType'})
      @Reference(() => CustomType)
      customType!: CustomType;

      @Attribute({ko: 'sampleType', en: 'sampleType'})
      @Reference(() => SampleType)
      sampleType!: SampleType;

      @Attribute({ko: 'sampleTypes', en: 'sampleTypes'})
      @Reference(() => SampleType)
      sampleTypes!: SampleType[];

      @Attribute({ko: 'date', en: 'date'})
      @Reference(() => LocalDate)
      @DateFormat('yyyyMMdd')
      date!: LocalDate;

      @Attribute({ko: 'dateTime', en: 'dateTime'})
      @Reference(() => LocalDateTime)
      @DateFormat('yyyy/MM/dd HH:mm:ss')
      dateTime!: LocalDateTime;

      @Attribute({ko: 'time', en: 'time'})
      @Reference(() => LocalTime)
      @DateFormat('HH~mm~ss')
      time!: LocalTime;

      @Attribute({ko: 'customDate', en: 'customDate'})
      @Reference(() => LocalDate)
      @StringToDate('yyyyMMdd')
      @DateToString('yyyy/MM/dd')
      customDate!: LocalDate;

      @Attribute({ko: 'defaultDate', en: 'defaultDate'})
      @Reference(() => LocalDate)
      defaultDate!: LocalDate;

      @Attribute({ko: 'defaultDateTime', en: 'defaultDateTime'})
      @Reference(() => LocalDateTime)
      defaultDateTime!: LocalDateTime;

      @Attribute({ko: 'defaultTime', en: 'defaultTime'})
      @Reference(() => LocalTime)
      defaultTime!: LocalTime;
    }
  }
}
