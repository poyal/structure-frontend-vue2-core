<template>
  <div>
    <div>
      <form @submit.prevent="onSearch">
        <div>
          <label>name</label>
          <input v-model="search.name" type="search">
        </div>

        <div>
          <button type="submit">검색</button>
        </div>
      </form>
    </div>

    <div>
      <button @click="onAdd">등록</button>
    </div>

    <div>
      <table>
        <colgroup>
          <col/>
          <col/>
        </colgroup>
        <thead>
        <tr>
          <th>name</th>
          <th>username</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in list" @click="onRow(item.id)">
          <td>{{ item.name }}</td>
          <td>{{ item.username }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {UserModel} from '@/app/sample/user/model/user.model';
import {UserStore} from '@/app/sample/user/vuex/user.store';

@Component
export default class UserList extends Vue {
  list: UserModel.Response.FindAll[] = [];
  search: UserModel.Request.Search = new UserModel.Request.Search();
  searchOrg: UserModel.Request.Search = new UserModel.Request.Search();
  store = UserStore.getInstance();

  created() {
    this.setSearchOrg();
    this.searchPage(this.searchOrg);
  }

  onSearch() {
    this.setSearchOrg();
    this.searchPage(this.searchOrg);
  }

  searchPage(search: UserModel.Request.Search) {
    this.store.actions.getList(search);
  }

  onAdd() {
    this.$router.push(`./add`);
  }

  onRow(id: number) {
    this.$router.push(`./detail/${id}`);
  }

  @Watch('store.state.list')
  getPage() {
    this.list = this.store.getters.getList();
  }

  private setSearchOrg() {
    this.searchOrg = Object.assign({}, this.search);
  }
}
</script>
