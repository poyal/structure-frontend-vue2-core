import {Injectable}    from '@/core/decorator';
import {AxiosAbstract} from '@/core/axios/axios.abstract';

@Injectable()
export default class SampleAxios extends AxiosAbstract {
  constructor() {
    super(`${process.env.VUE_APP_SAMPLE_URL}`);
  }
}
