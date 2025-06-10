<template>
  <div>
    <div>
      <h1>기본 정보</h1>
    </div>

    <div>
      <label>title</label>
      {{ detail.title }}
    </div>

    <div>
      <label>userId</label>
      {{ detail.userId }}
    </div>

    <div>
      <button @click="onModify">수정</button>
      <button @click="onDelete">삭제</button>
      <button @click="onCancel">취소</button>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {Shared}     from '@/app/shared/model/shared.model';
import {AlbumModel} from '@/app/sample/album/model/album.model';
import {AlbumStore} from '@/app/sample/album/vuex/album.store';

@Component
export default class AlbumDetail extends Vue {
  detail: AlbumModel.Response.FindOne = new AlbumModel.Response.FindOne();
  store = AlbumStore.getInstance();

  created() {
    this.store.actions.getOne(this.$route.params.id);
  }

  onDelete() {
    this.store.actions.delete(this.$route.params.id);
  }

  onModify() {
    this.$router.push(`../modify/${this.$route.params.id}`);
  }

  onCancel() {
    this.$router.back();
  }

  @Watch('store.state.one')
  getOne() {
    this.detail = this.store.getters.getOne();
  }

  @Watch('store.state.result')
  getResult() {
    const result: Shared.Response.ActionResult = this.store.getters.getResult();
    if (result.action === this.$enum.CORE.ACTION.RESULT.DELETE) {
      this.$router.back();
    }
  }
}
</script>
