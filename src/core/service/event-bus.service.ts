import {EVENT_BUS_EVENTS} from '@/app/shared/enum/event-bus.enum';
import {eventBus}         from '@/core/service/event-bus.handler';

export class EventBusService {
  sample(...args: any[]) {
    this.dispatch(EVENT_BUS_EVENTS.SAMPLE_EVENT_BUS, ...args);
  }

  // CORE
  private dispatch(event: EVENT_BUS_EVENTS, ...args: any[]) {
    eventBus.dispatch(event, ...args);
  }
}
