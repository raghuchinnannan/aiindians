import { _ as _export_sfc, b as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'unified';
import 'mdast-util-to-string';
import 'micromark';
import 'unist-util-stringify-position';
import 'micromark-util-character';
import 'micromark-util-chunked';
import 'micromark-util-resolve-all';
import 'micromark-util-sanitize-uri';
import 'slugify';
import 'remark-parse';
import 'remark-rehype';
import 'remark-mdc';
import 'hast-util-to-string';
import 'github-slugger';
import 'detab';
import 'remark-emoji';
import 'remark-gfm';
import 'rehype-external-links';
import 'rehype-sort-attribute-values';
import 'rehype-sort-attributes';
import 'rehype-raw';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vueuse/core';
import 'tailwind-merge';
import '@iconify/vue/dist/offline';
import '@iconify/vue';

const _sfc_main = {
  data() {
    return {
      communities: [
        { name: "AI4Bharat by IIT Madras", url: "https://discord.com/invite/3xSVWX9bER", type: "discord", icon: "https://cdn.discordapp.com/icons/1226862337101791352/be2e3989e1ac52318a35243de9ee67fe.webp?size=96" },
        { name: "Dev Hub", url: "https://discord.gg/SwTAY7QR", type: "discord", icon: "https://cdn.discordapp.com/icons/1114913976422256742/4a36b0c0b163796fcebcc1dd051913de.webp?size=96" }
      ]
    };
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "communities-container" }, _attrs))} data-v-3418dd24><p class="text-center" data-v-3418dd24>Friendly AI communities that can help you learn \u{1F680}</p><!--[-->`);
  ssrRenderList($data.communities, (community) => {
    _push(`<div class="box" data-v-3418dd24><div class="community-name" data-v-3418dd24><a${ssrRenderAttr("href", community.url)} rel="nofollow" target="_blank" class="flex flex-row justify-between" data-v-3418dd24><div data-v-3418dd24><img${ssrRenderAttr("src", community.icon)} class="w-10 h-10" data-v-3418dd24> ${ssrInterpolate(community.name)} `);
    _push(ssrRenderComponent(_component_Icon, { name: "i-fa6-brands-discord" }, null, _parent));
    _push(`</div><button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" data-v-3418dd24>Join</button></a></div></div>`);
  });
  _push(`<!--]--></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/communities.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const communities = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3418dd24"]]);

export { communities as default };
//# sourceMappingURL=communities-2Bu_e2Nm.mjs.map
