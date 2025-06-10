import {Injectable}    from '@/core/decorator';
import {AxiosAbstract} from '@/core/axios/axios.abstract';

@Injectable()
export default class MockAxios extends AxiosAbstract {
  constructor() {
    super(`${process.env.VUE_APP_MOCK_URL}`);
  }
}
