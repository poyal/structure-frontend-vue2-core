<template>
  <div>
    <form @submit.prevent="onModify">
      <div>
        <h1>기본 정보</h1>
      </div>

      <div>
        <label>name</label>
        <input v-model="modify.name" type="text">
      </div>

      <div>
        <label>username</label>
        <input v-model="modify.username" type="text">
      </div>

      <div>
        <label>email</label>
        <input v-model="modify.email" type="text">
      </div>

      <div>
        <label>phone</label>
        <input v-model="modify.phone" type="text">
      </div>

      <div>
        <label>website</label>
        <input v-model="modify.website" type="text">
      </div>

      <div>
        <h1>Address</h1>
      </div>

      <div>
        <label>city</label>
        <input v-model="modify.address.city" type="text">
      </div>

      <div>
        <label>street</label>
        <input v-model="modify.address.street" type="text">
      </div>

      <div>
        <label>suite</label>
        <input v-model="modify.address.suite" type="text">
      </div>

      <div>
        <label>zipcode</label>
        <input v-model="modify.address.zipcode" type="text">
      </div>

      <div>
        <label>lat</label>
        <input v-model="modify.address.geo.lat" type="number">
      </div>

      <div>
        <label>lng</label>
        <input v-model="modify.address.geo.lng" type="number">
      </div>

      <div>
        <h1>Company</h1>
      </div>

      <div>
        <label>name</label>
        <input v-model="modify.company.name" type="text">
      </div>

      <div>
        <label>catchPhrase</label>
        <input v-model="modify.company.catchPhrase" type="text">
      </div>

      <div>
        <label>bs</label>
        <input v-model="modify.company.bs" type="text">
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

import {Shared}    from '@/app/shared/model/shared.model';
import {UserModel} from '@/app/sample/user/model/user.model';
import {UserStore} from '@/app/sample/user/vuex/user.store';

@Component
export default class UserModify extends Vue {
  modify: UserModel.Request.Modify = new UserModel.Request.Modify();
  store = UserStore.getInstance();

  created() {
    this.store.actions.getOne(this.$route.params.id);
  }

  onModify() {
    this.store.actions.update(this.modify);
  }

  onCancel() {
    this.$router.back();
  }

  @Watch('store.state.result')
  getResult() {
    const result: Shared.Response.ActionResult = this.store.getters.getResult();
    if (result.action === this.$enum.CORE.ACTION.RESULT.UPDATE) {
      this.$router.back();
    }
  }

  @Watch('store.state.one')
  getOne() {
    this.modify = this.store.getters.getModify();
  }
}
</script>
