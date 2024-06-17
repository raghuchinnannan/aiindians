import { c as useAsyncData, q as queryContent } from './server.mjs';
import { withAsyncContext, computed, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "leaderboard",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: people } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("people", () => queryContent("people").find())), __temp = await __temp, __restore(), __temp);
    people.value.forEach((person) => {
      if (person.profileMetricsLog && person.profileMetricsLog.length > 1) {
        const logs = person.profileMetricsLog;
        const firstLog = logs[0];
        const lastLog = logs[logs.length - 1];
        const daysDifference = (new Date(lastLog.date) - new Date(firstLog.date)) / (1e3 * 3600 * 24);
        if (daysDifference > 0) {
          const followersGrowth = lastLog.followersCount - firstLog.followersCount;
          person.dailyFollowersGrowth = followersGrowth / daysDifference;
          person.dailyFollowersGrowthPercentage = followersGrowth / firstLog.followersCount * 100 / daysDifference;
          person.dailyFollowersGrowthPercentage = person.dailyFollowersGrowthPercentage.toFixed();
        }
      }
    });
    const sortedPeople = computed(() => {
      return [...people.value].sort((a, b) => b.dailyFollowersGrowth - a.dailyFollowersGrowth);
    });
    function getRankClass(index) {
      if (index === 0)
        return "gold";
      if (index === 1)
        return "silver";
      if (index === 2)
        return "bronze";
      return "";
    }
    function getRankEmoji(index) {
      if (index === 0)
        return "\u{1F947}";
      if (index === 1)
        return "\u{1F948}";
      if (index === 2)
        return "\u{1F949}";
      return "\u{1F3C5}";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "leaderboard-container" }, _attrs))}><table class="leaderboard-table"><thead><tr><th class="text-left">Profile</th><th class="text-right">Followers</th><th class="text-right">Avg Daily Growth</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(sortedPeople.value.slice(0, 25), (person, index) => {
        _push(`<tr class="${ssrRenderClass(getRankClass(index))}"><td class="flex flex-nowrap content-center"><div class="mr-4 text-xl md:text-4xl content-center">${ssrInterpolate(getRankEmoji(index))}</div><div class="content-center md:w-16 w-8 mr-4"><img${ssrRenderAttr("src", person.profileImageUrl)} class="md:w-16 md:h-16 w-8 h-8 rounded-full inline-block"></div><a${ssrRenderAttr("href", "https://x.com/" + person.username)} class="text-md font-semibold hover:underline align-middle" target="_blank">${ssrInterpolate(person.name)} <span class="md:inline hidden">(${ssrInterpolate(person.username)})</span></a></td><td class="text-right">${ssrInterpolate(person.profileMetrics.followersCount)}</td><td class="text-right"> +${ssrInterpolate(person.dailyFollowersGrowth.toFixed(0))}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/leaderboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=leaderboard-DQ71Jgda.mjs.map
