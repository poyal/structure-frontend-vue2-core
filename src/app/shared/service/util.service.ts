import {Injectable} from '@/core/decorator';

@Injectable()
export default class UtilService {
  getRandomKey(prefix: string = '', length: number = 32): string {
    let result: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength: number = characters.length;

    if (!!prefix) {
      prefix = `${prefix}-`;
    }

    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return `${prefix}${result}`;
  }
}
