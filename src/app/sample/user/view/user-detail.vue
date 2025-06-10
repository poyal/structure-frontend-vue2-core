<template>
  <div>
    <div>
      <h1>기본 정보</h1>
    </div>

    <div>
      <label>name</label>
      {{ detail.name }}
    </div>

    <div>
      <label>username</label>
      {{ detail.username }}
    </div>

    <div>
      <label>email</label>
      {{ detail.email }}
    </div>

    <div>
      <label>phone</label>
      {{ detail.phone }}
    </div>

    <div>
      <label>website</label>
      {{ detail.website }}
    </div>

    <div>
      <h1>Address</h1>
    </div>

    <div>
      <label>street</label>
      {{ detail.address?.street }}
    </div>

    <div>
      <label>city</label>
      {{ detail.address?.city }}
    </div>

    <div>
      <label>suite</label>
      {{ detail.address?.suite }}
    </div>

    <div>
      <label>zipcode</label>
      {{ detail.address?.zipcode }}
    </div>

    <div>
      <label>lat</label>
      {{ detail.address?.geo?.lat }}
    </div>

    <div>
      <label>lng</label>
      {{ detail.address?.geo?.lng }}
    </div>

    <div>
      <h1>Company</h1>
    </div>

    <div>
      <label>name</label>
      {{ detail.company?.name }}
    </div>

    <div>
      <label>catchPhrase</label>
      {{ detail.company?.catchPhrase }}
    </div>

    <div>
      <label>bs</label>
      {{ detail.company?.bs }}
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

import {Shared}    from '@/app/shared/model/shared.model';
import {UserModel} from '@/app/sample/user/model/user.model';
import {UserStore} from '@/app/sample/user/vuex/user.store';

@Component
export default class UserDetail extends Vue {
  detail: UserModel.Response.FindOne = new UserModel.Response.FindOne();
  store = UserStore.getInstance();

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
