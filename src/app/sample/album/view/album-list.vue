<template>
  <div>
    <div>
      <form @submit.prevent="onSearch">
        <div>
          <label>title</label>
          <input v-model="search.title" type="search">
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
          <th>title</th>
          <th>userId</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="item in list" @click="onRow(item.id)">
          <td>{{ item.title }}</td>
          <td>{{ item.userId }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {AlbumModel} from '@/app/sample/album/model/album.model';
import {AlbumStore} from '@/app/sample/album/vuex/album.store';

@Component
export default class AlbumList extends Vue {
  list: AlbumModel.Response.FindAll[] = [];
  search: AlbumModel.Request.Search = new AlbumModel.Request.Search();
  searchOrg: AlbumModel.Request.Search = new AlbumModel.Request.Search();
  store = AlbumStore.getInstance();

  created() {
    this.setSearchOrg();
    this.searchPage(this.searchOrg);
  }

  onSearch() {
    this.setSearchOrg();
    this.searchPage(this.searchOrg);
  }

  searchPage(search: AlbumModel.Request.Search) {
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
