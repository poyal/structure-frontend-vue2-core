import Vue from 'vue';

declare module 'vue/types/vue' {
  interface Vue {
    $enum: any;
  }

  interface VueConstructor {
    $enum: any;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    $enum?: any;
  }
}
