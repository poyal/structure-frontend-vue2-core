<template>
  <div id="SampleEventBus"></div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import {EVENT_BUS_EVENTS}           from '@/app/shared/enum/event-bus.enum';
import {eventBus, EventBusCallback} from '@/core/service/event-bus.handler';

@Component
export default class SampleEventBus extends Vue {
  private eventBus: EventBusCallback | null = null;

  created() {
    this.eventBus = eventBus.subscribe(EVENT_BUS_EVENTS.SAMPLE_EVENT_BUS, this.getEvent);
  }

  beforeDestroy() {
    if (!!this.eventBus) {
      this.eventBus = this.eventBus.unsubscribe();
    }
  }

  getEvent(args: any) {
    console.log(args);
    const element: HTMLElement | null = document.querySelector('#SampleEventBus');
    if (!!element) {
      if (typeof args === 'string') {
        const div: HTMLDivElement = document.createElement('div');
        div.innerText = args;
        element.appendChild(div);
      } else {
        args.forEach((arg: any) => {
          const div: HTMLDivElement = document.createElement('div');
          div.innerText = arg;
          element.appendChild(div);
        });
      }
    }
  }
}
</script>
