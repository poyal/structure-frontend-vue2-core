import Cookies, {CookieAttributes} from 'js-cookie';

import {Injectable} from '@/core/decorator';
import {Enum}       from '@/app/shared/enum/enum';

@Injectable()
export default class StorageService {
  resetLocalStorage() {
    localStorage.removeItem(Enum.CORE.STORAGE.KEY.SAMPLE_STORAGE);
  }

  removeLocalStorage(key: Enum.CORE.STORAGE.KEY) {
    localStorage.removeItem(key);
  }

  setLocalStorage(key: Enum.CORE.STORAGE.KEY, value: string) {
    localStorage.setItem(key, value);
  }

  getLocalStorage(key: Enum.CORE.STORAGE.KEY): string | null {
    return localStorage.getItem(key);
  }

  resetCookie() {
    Cookies.remove(Enum.CORE.STORAGE.KEY.SAMPLE_STORAGE);
  }

  removeCookie(name: Enum.CORE.STORAGE.KEY) {
    Cookies.remove(name);
  }

  setCookie(name: Enum.CORE.STORAGE.KEY, value: string, options: CookieAttributes = {}) {
    Cookies.set(name, value, options);
  }

  getCookie(name: Enum.CORE.STORAGE.KEY): string | undefined {
    return Cookies.get(name);
  }
}
