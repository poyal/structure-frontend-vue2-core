<template>
  <div>
    <form @submit.prevent="onEdit">
      <div>
        <h1>기본 정보</h1>
      </div>

      <div>
        <label>customType</label>
        {{ edit.customType }}
      </div>

      <div>
        <label>sampleType</label>
        {{ edit.sampleType }}
      </div>

      <div>
        <label>sampleTypes</label>
        <template v-for="sampleType in edit.sampleTypes">
          {{ sampleType }}
        </template>
      </div>

      <div>
        <label>date</label>
        {{ edit.date }}
      </div>

      <div>
        <label>dateTime</label>
        {{ edit.dateTime }}
      </div>

      <div>
        <label>customDate</label>
        {{ edit.customDate }}
      </div>

      <div>
        <label>defaultDate</label>
        {{ edit.defaultDate }}
      </div>

      <div>
        <label>defaultDateTime</label>
        {{ edit.defaultDateTime }}
      </div>

      <div>
        <label>defaultTime</label>
        {{ edit.defaultTime }}
      </div>

      <div>
        <button type="submit">편집</button>
        <button type="button" @click="onError">편집-에러</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import {LocalDateTime}         from '@js-joda/core';

import Container from '@/core/container';
import Mapper    from '@/core/service/mapper.service';

import {CustomType} from '@/app/sample/type/enum/custom.type';

import {TypeModel} from '@/app/sample/type/model/type.model';
import {TypeStore} from '@/app/sample/type/vuex/type.store';

@Component
export default class TypeDetail extends Vue {
  mapper: Mapper = Container.resolve(Mapper);
  edit: TypeModel.Request.Edit = new TypeModel.Request.Edit();
  store = TypeStore.getInstance();

  created() {
    this.store.actions.getOne();
  }

  onEdit() {
    this.store.actions.edit(this.edit);
  }

  onError() {
    const edit: TypeModel.Request.Edit = this.mapper.toObject(TypeModel.Request.Edit, this.edit);

    // @ts-ignore
    edit.sampleType = CustomType.CUSTOM_A;

    // @ts-ignore
    edit.customType = 'CUSTOM_A';

    // @ts-ignore
    edit.date = LocalDateTime.now();

    // @ts-ignore
    edit.defaultDate = '';

    // @ts-ignore
    edit.defaultDateTime = '';

    // @ts-ignore
    edit.defaultTime = '';

    this.store.actions.edit(edit);
  }

  @Watch('store.state.one')
  getOne() {
    this.edit = this.store.getters.getEdit();
    console.log(this.edit);
  }
}
</script>
