import {EnumAbstract, Enumerable} from '@/core/enum';

@Enumerable
export class SampleType extends EnumAbstract {
  static readonly TYPE_A: SampleType = new SampleType('타입 A');
  static readonly TYPE_B: SampleType = new SampleType('타입 B');
  static readonly TYPE_C: SampleType = new SampleType('타입 C');
  static readonly TYPE_D: SampleType = new SampleType('타입 D');

  private constructor(description: string) {
    super(description);
  }
}
