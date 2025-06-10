<template>
  <div>
    <header-bar/>

    <div class="content">
      <router-view :key="$route.fullPath"/>
    </div>

    <sample-event-bus/>
  </div>
</template>


<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import HeaderBar      from '@/app/system/component/header-bar.vue';
import SampleEventBus from '@/app/shared/components/sample-event-bus.vue';

@Component({
  components: {SampleEventBus, HeaderBar}
})
export default class DefaultLayout extends Vue {
}
</script>
