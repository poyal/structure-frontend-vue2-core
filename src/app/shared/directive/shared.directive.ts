import Vue, {DirectiveFunction}    from 'vue';
import {DirectiveBinding}          from 'vue/types/options';
import {Config as DOMPurifyConfig} from 'dompurify';

import Container    from '@/core/container';
import {XssService} from '@/core/service/xss.service';
import {XSS_CONFIG} from '@/core/config/xss.config';

const safeHtml: DirectiveFunction = (element: HTMLElement, binding: DirectiveBinding) => {
  const xss: XssService = Container.resolve(XssService);
  let config: DOMPurifyConfig = XSS_CONFIG.DEFAULT;

  if (binding.modifiers?.full === true) {
    config = XSS_CONFIG.HTML;
  }

  element.innerHTML = xss.toSanitize(binding.value ?? '', config);
};

Vue.directive('safe-html', {
  inserted: safeHtml,
  update  : safeHtml,
  unbind  : (element: HTMLElement) => {
    element.innerHTML = '';
  }
});
