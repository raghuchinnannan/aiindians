import { _ as _export_sfc, c as useAsyncData, q as queryContent, b as __nuxt_component_0$1 } from './server.mjs';
import { withAsyncContext, computed, mergeProps, useSSRContext } from 'vue';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: projectsData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("projects", () => queryContent("projects").find())), __temp = await __temp, __restore(), __temp);
    const { data: peopleData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("people", () => queryContent("people").find())), __temp = await __temp, __restore(), __temp);
    const shuffleArray = (array) => {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    };
    const projects = computed(() => {
      const shuffledProjects = shuffleArray(projectsData.value);
      return shuffledProjects.map((project) => {
        const authorDetails = peopleData.value.find((person) => person.username === project.author.username);
        return {
          ...project,
          author: {
            ...authorDetails,
            profileImageUrl: authorDetails.profileImageUrl,
            profileCreatedAt: authorDetails.profileCreatedAt,
            profileDescription: authorDetails.profileDescription,
            profileUrl: authorDetails.profileUrl,
            profileIsVerified: authorDetails.profileIsVerified,
            profileLocation: authorDetails.profileLocation
          }
        };
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Icon = __nuxt_component_0$1;
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "text-white" }, _attrs))} data-v-8a504c99><!--[-->`);
      ssrRenderList(projects.value, (project) => {
        _push(`<div class="bg-gray-800 box border-b border-gray-700" data-v-8a504c99><div class="flex items-center space-x-4 flex-col flex-col-reverse md:flex-row" data-v-8a504c99><div class="basis-1/3 text-center md:text-left" data-v-8a504c99><img${ssrRenderAttr("src", project.author.profileImageUrl)} alt="Profile image" class="w-15 h-15 rounded-full" data-v-8a504c99>`);
        if (project.author.profileIsVerified) {
          _push(`<div data-v-8a504c99><span class="text-green-500" data-v-8a504c99>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-badge-check-20-solid",
            class: "inline-block w-5 h-5 mr-1"
          }, null, _parent));
          _push(` Verified </span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div data-v-8a504c99><a${ssrRenderAttr("href", `https://x.com/${project.author.username}`)} target="_blank" rel="nofollow" class="hover:text-blue-500" data-v-8a504c99>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-fa6-brands-x-twitter",
          class: "inline-block w-5 h-5 mr-1"
        }, null, _parent));
        _push(` ${ssrInterpolate(project.author.name)}</a></div>`);
        if (project.author.profileUrl) {
          _push(`<div data-v-8a504c99><a${ssrRenderAttr("href", project.author.profileUrl)} target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500" data-v-8a504c99>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-user-circle-20-solid",
            class: "inline-block w-5 h-5 mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(project.author.profileUrl)}</a></div>`);
        } else {
          _push(`<!---->`);
        }
        if (project.author.profileLocation) {
          _push(`<div data-v-8a504c99><span data-v-8a504c99>`);
          _push(ssrRenderComponent(_component_Icon, {
            name: "i-heroicons-map-pin-20-solid",
            class: "inline-block w-5 h-5 mr-1"
          }, null, _parent));
          _push(` ${ssrInterpolate(project.author.profileLocation)}</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="basis-2/3 text-center md:text-left mb-8 md:mb-0" data-v-8a504c99><h3 class="text-lg font-semibold" data-v-8a504c99>${ssrInterpolate(project.description)}</h3><a${ssrRenderAttr("href", project.url)} target="_blank" rel="nofollow" class="text-blue-300 hover:text-blue-500" data-v-8a504c99>`);
        _push(ssrRenderComponent(_component_Icon, {
          name: "i-heroicons-link-20-solid",
          class: "inline-block w-5 h-5 mr-1"
        }, null, _parent));
        _push(` Visit Project </a></div></div></div>`);
      });
      _push(`<!--]--></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-8a504c99"]]);

export { index as default };
//# sourceMappingURL=index-C1wDppFM.mjs.map
