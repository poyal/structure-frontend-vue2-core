<template>
  <div>
    <form @submit.prevent="onAdd">
      <div>
        <h1>기본 정보</h1>
      </div>

      <div>
        <label>name</label>
        <input v-model="add.name" type="text">
      </div>

      <div>
        <label>username</label>
        <input v-model="add.username" type="text">
      </div>

      <div>
        <label>email</label>
        <input v-model="add.email" type="text">
      </div>

      <div>
        <label>phone</label>
        <input v-model="add.phone" type="text">
      </div>

      <div>
        <label>website</label>
        <input v-model="add.website" type="text">
      </div>

      <div>
        <h1>Address</h1>
      </div>

      <div>
        <label>city</label>
        <input v-model="add.address.city" type="text">
      </div>

      <div>
        <label>street</label>
        <input v-model="add.address.street" type="text">
      </div>

      <div>
        <label>suite</label>
        <input v-model="add.address.suite" type="text">
      </div>

      <div>
        <label>zipcode</label>
        <input v-model="add.address.zipcode" type="text">
      </div>

      <div>
        <label>lat</label>
        <input v-model="add.address.geo.lat" type="number">
      </div>

      <div>
        <label>lng</label>
        <input v-model="add.address.geo.lng" type="number">
      </div>

      <div>
        <h1>Company</h1>
      </div>

      <div>
        <label>name</label>
        <input v-model="add.company.name" type="text">
      </div>

      <div>
        <label>catchPhrase</label>
        <input v-model="add.company.catchPhrase" type="text">
      </div>

      <div>
        <label>bs</label>
        <input v-model="add.company.bs" type="text">
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

import {Shared}    from '@/app/shared/model/shared.model';
import {UserModel} from '@/app/sample/user/model/user.model';
import {UserStore} from '@/app/sample/user/vuex/user.store';

@Component
export default class UserAdd extends Vue {
  add: UserModel.Request.Add = new UserModel.Request.Add();
  store = UserStore.getInstance();

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
