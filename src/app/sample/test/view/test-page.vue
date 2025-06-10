<template>
  <div>
    {{ page }}
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {PageableModel} from '@/app/shared/model/pageable.model';
import {TestModel}     from '@/app/sample/test/model/test.model';
import {TestStore}     from '@/app/sample/test/vuex/test.store';

@Component
export default class TestPage extends Vue {
  page: PageableModel.Response.Page<TestModel.Response.FindAll> = new PageableModel.Response.Page<TestModel.Response.FindAll>();
  search: TestModel.Request.Search = new TestModel.Request.Search(); // 주소만
  searchOrg: TestModel.Request.Search = new TestModel.Request.Search(); // 주소만
  store = TestStore.getInstance();

  created() {
    this.setSearchOrg();
    this.searchPage(this.searchOrg);
  }

  onSearch() {
    this.search.page = 0;
    this.setSearchOrg();
    this.searchPage(this.searchOrg);
  }

  changePages(pages: number) {
    this.searchOrg.page = pages;
    this.searchPage(this.searchOrg);
  }

  searchPage(search: TestModel.Request.Search) {
    this.store.actions.getPage(search);
  }

  @Watch('store.state.page')
  getPage() {
    this.page = this.store.getters.getPage();
  }

  private setSearchOrg() {
    this.searchOrg = Object.assign({}, this.search);
  }
}
</script>
