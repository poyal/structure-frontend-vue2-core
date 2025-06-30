<template>
  <div>
    <form @submit.prevent="onAdd">
      <div>
        <h1>기본 정보</h1>
      </div>

      <div>
        <label>title</label>
        <input v-model="add.title" type="text">
      </div>

      <div>
        <label>userId</label>
        <input v-model.number="add.userId" type="number">
      </div>

      <div>
        <button type="submit">등록</button>
        <button type="button" @click="onCancel">취소</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {Shared}     from '@/app/shared/model/shared.model';
import {AlbumModel} from '@/app/sample/album/model/album.model';
import {AlbumStore} from '@/app/sample/album/vuex/album.store';

@Component
export default class AlbumAdd extends Vue {
  add: AlbumModel.Request.Add = new AlbumModel.Request.Add();
  store = AlbumStore.getInstance();

  onAdd() {
    this.store.actions.add(this.add);
  }

  onCancel() {
    this.$router.back();
  }

  @Watch('store.state.result')
  getResult() {
    const result: Shared.Response.ActionResult = this.store.getters.getResult();
    if (result.action === this.$enum.CORE.ACTION.RESULT.ADD) {
      this.$router.back();
    }
  }
}
</script>
