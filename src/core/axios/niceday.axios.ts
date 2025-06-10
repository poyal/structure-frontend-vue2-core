import {Injectable}    from '@/core/decorator';
import {AxiosAbstract} from '@/core/axios/axios.abstract';

@Injectable()
export default class NicedayAxios extends AxiosAbstract {
  constructor() {
    super(`${process.env.VUE_APP_NICEDAY_URL}/api`);
  }
}
