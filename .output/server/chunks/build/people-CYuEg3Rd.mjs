import { _ as _export_sfc, c as useAsyncData, q as queryContent, b as __nuxt_component_0$1 } from './server.mjs';
import { withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
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
  __name: "people",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: peopleData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("people", () => queryContent("people").find())), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white" }, _attrs))} data-v-bc506081><!--[-->`);
      ssrRenderList(unref(peopleData), (person) => {
        _push(`<div class="bg-gray-800 box border-b border-gray-700" data-v-bc506081><img${ssrRenderAttr("src", person.profileImageUrl)} class="w-15 h-15 rounded-full" data-v-bc506081>`);
        if (person.profileIsVerified) {
          _push(`<div data-v-bc506081><span class="text-green-500" data-v-bc506081>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-badge-check-20-solid",
            class: "inline-block w-5 h-5 mr-1"
          }, null, _parent));
          _push(` Verified </span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-bc506081><a${ssrRenderAttr("href", `https://x.com/${person.username}`)} target="_blank" rel="nofollow" class="hover:text-blue-500" data-v-bc506081>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-fa6-brands-x-twitter",
          class: "inline-block w-5 h-5 mr-1"
        }, null, _parent));
        _push(` ${ssrInterpolate(person.name)}</a></div>`);
        if (person.profileUrl) {
          _push(`<div data-v-bc506081><a${ssrRenderAttr("href", person.profileUrl)} target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500" data-v-bc506081>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-user-circle-20-solid",
            class: "inline-block w-5 h-5 mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(person.profileUrl)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (person.profileLocation) {
          _push(`<div data-v-bc506081><span data-v-bc506081>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-map-pin-20-solid",
            class: "inline-block w-5 h-5 mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(person.profileLocation)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        if (person.profileDescription) {
          _push(`<div class="text-sm my-2" data-v-bc506081>${ssrInterpolate(person.profileDescription)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (person.productUrl) {
          _push(`<a${ssrRenderAttr("href", person.productUrl.startsWith("@") ? `https://x.com/${person.productUrl.substring(1)}` : person.productUrl)} target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500" data-v-bc506081>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-link-20-solid",
            class: "inline-block w-5 h-5 mr-1"
          }, null, _parent));
          _push(` Visit Product </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const people = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bc506081"]]);

export { people as default };
//# sourceMappingURL=people-CYuEg3Rd.mjs.map
