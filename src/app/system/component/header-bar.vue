<template>
  <div>
    <ul>
      <li>
        <a href="/sample/album">Album</a>
      </li>
      <li>
        <a href="/sample/user">User</a>
      </li>
      <li>
        <a href="/sample/type">Type</a>
      </li>
      <li>
        <button @click="changeLang('en')">EN</button>
        <button @click="changeLang('ko')">KO</button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

import Container from '@/core/container';

import {Enum}         from '@/app/shared/enum/enum';
import StorageService from '@/app/shared/service/storage.service';

@Component
export default class HeaderBar extends Vue {
  private storageService: StorageService = Container.resolve(StorageService);

  changeLang(lang: string) {
    this.storageService.setLocalStorage(Enum.CORE.STORAGE.KEY.LANG, lang);
  }
}
</script>
