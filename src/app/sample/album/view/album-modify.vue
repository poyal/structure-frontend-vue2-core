<template>
  <div>
    <form @submit.prevent="onModify">
      <div>
        <h1>기본 정보</h1>
      </div>

      <div>
        <label>title</label>
        <input v-model="modify.title" type="text">
      </div>

      <div>
        <label>userId</label>
        <input v-model="modify.userId" type="number">
      </div>

      <div>
        <button type="submit">수정</button>
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
export default class AlbumModify extends Vue {
  modify: AlbumModel.Request.Modify = new AlbumModel.Request.Modify();
  store = AlbumStore.getInstance();

  created() {
    this.store.actions.getOne(this.$route.params.id);
  }

  onModify() {
    this.store.actions.update(this.modify);
  }

  onCancel() {
    this.$router.back();
  }

  @Watch('store.state.one')
  getOne() {
    this.modify = this.store.getters.getModify();
  }

  @Watch('store.state.result')
  getResult() {
    const result: Shared.Response.ActionResult = this.store.getters.getResult();
    if (result.action === this.$enum.CORE.ACTION.RESULT.UPDATE) {
      this.$router.back();
    }
  }
}
</script>
