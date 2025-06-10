interface Subscriber {
  event: string;
  callback: (...args: any[]) => void;
}

export interface EventBusCallback {
  unsubscribe: () => null;
}

class EventBusHandler {
  static instance: EventBusHandler;

  static getInstance(): EventBusHandler {
    if (!this.instance) {
      this.instance = new EventBusHandler();
    }

    return this.instance;
  }

  private subscribers: Map<string, Subscriber> = new Map<string, Subscriber>();

  private constructor() {

  }

  dispatch(event: string, ...args: any[]) {
    if (!this.isExist(event)) {
      console.warn(`EventBusHandler dispatch event(${event}) not found!`);
      return;
    }

    this.subscribers.forEach((subscriber: Subscriber) => {
      if (subscriber.event === event) {
        subscriber.callback(...args);
      }
    });
  }

  subscribe(event: string, callback: (...args: any[]) => void): EventBusCallback | null {
    const id: string = this.getRandomKey();
    const eventBusSubscriber: Subscriber = {
      event,
      callback
    };

    this.subscribers.set(id, eventBusSubscriber);

    return {
      unsubscribe: (): null => {
        this.subscribers.delete(id);
        return null;
      }
    };
  }

  private isExist(event: string): boolean {
    let returnValue: boolean = false;

    this.subscribers.forEach((value: Subscriber) => {
      if (value.event === event) {
        returnValue = true;
      }
    });

    return returnValue;
  }

  private getRandomKey(): string {
    let result: string = '';
    const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i: number = 0; i < 32; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
  }
}

export const eventBus: EventBusHandler = EventBusHandler.getInstance();
