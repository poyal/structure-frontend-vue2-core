import {EnumAbstract, Enumerable} from '@/core/enum';
import {SampleType}               from '@/app/sample/type/enum/sample.type';

@Enumerable
export class CustomType extends EnumAbstract {
  static readonly CUSTOM_A: CustomType = new CustomType('커스텀 A', 30);
  static readonly CUSTOM_B: CustomType = new CustomType('커스텀 B', 10);
  static readonly CUSTOM_C: CustomType = new CustomType('커스텀 C', 50);
  static readonly CUSTOM_D: CustomType = new CustomType('커스텀 D', 40);

  static readonly CUSTOM_GROUP: CustomType[] = [CustomType.CUSTOM_A, CustomType.CUSTOM_B];

  static CUSTOM_GROUPS(sampleType: SampleType): CustomType[] {
    let returnValue: CustomType[] = [];

    switch (sampleType) {
      case SampleType.TYPE_A:
        returnValue = [CustomType.CUSTOM_A, CustomType.CUSTOM_B];
        break;

      case SampleType.TYPE_B:
        returnValue = [CustomType.CUSTOM_C, CustomType.CUSTOM_D];
        break;
    }

    return returnValue;
  }

  private constructor(description: string, readonly span: number) {
    super(description);
  }
}
