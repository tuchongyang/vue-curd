"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
Object.defineProperty(exports, "__esModule", { value: true });
exports[Symbol.toStringTag] = "Module";
var vueRouter = require("vue-router");
var vue = require("vue");
var core = require("@vueuse/core");
var ElementPlus = require("element-plus");
var VueCurd = require("@vue-curd/vue-curd");
var nprogress$1 = require("nprogress");
var serverRenderer = require("vue/server-renderer");
var iconsVue = require("@element-plus/icons-vue");
function _interopDefaultLegacy(e) {
  return e && typeof e === "object" && "default" in e ? e : { "default": e };
}
function _interopNamespace(e) {
  if (e && e.__esModule)
    return e;
  var n = { __proto__: null, [Symbol.toStringTag]: "Module" };
  if (e) {
    Object.keys(e).forEach(function(k) {
      if (k !== "default") {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function() {
            return e[k];
          }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}
var ElementPlus__default = /* @__PURE__ */ _interopDefaultLegacy(ElementPlus);
var VueCurd__default = /* @__PURE__ */ _interopDefaultLegacy(VueCurd);
var nprogress__namespace = /* @__PURE__ */ _interopNamespace(nprogress$1);
const ClientOnly = vue.defineComponent({
  setup(_, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a) : null;
    };
  }
});
const pagesComponents = {
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$9;
  })),
  "v-14948c92": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$7;
  })),
  "v-fffb8e28": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$6;
  })),
  "v-d5d75b4c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$5;
  })),
  "v-1f14d7c4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return base_html$7;
  })),
  "v-f0935800": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return async_html$1;
  })),
  "v-1404dc25": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return base_html$6;
  })),
  "v-3d59248e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return cascadeAsync_html$1;
  })),
  "v-41e9b608": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return cascade_html$1;
  })),
  "v-15f8d3f7": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return base_html$5;
  })),
  "v-4f1dd6be": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return base_html$4;
  })),
  "v-8085571e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return validator_html$1;
  })),
  "v-3dcc7d37": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return image_html$1;
  })),
  "v-11f46678": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return header_html$1;
  })),
  "v-131b96b8": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return menuLeft_html$1;
  })),
  "v-5cddbe00": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return operationMenu_html$1;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$2;
  }))
};
const pagesData$1 = {
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$3;
  }).then(({ data: data2 }) => data2),
  "v-14948c92": () => Promise.resolve().then(function() {
    return index_html$2;
  }).then(({ data: data2 }) => data2),
  "v-fffb8e28": () => Promise.resolve().then(function() {
    return index_html$1;
  }).then(({ data: data2 }) => data2),
  "v-d5d75b4c": () => Promise.resolve().then(function() {
    return index_html;
  }).then(({ data: data2 }) => data2),
  "v-1f14d7c4": () => Promise.resolve().then(function() {
    return base_html$3;
  }).then(({ data: data2 }) => data2),
  "v-f0935800": () => Promise.resolve().then(function() {
    return async_html;
  }).then(({ data: data2 }) => data2),
  "v-1404dc25": () => Promise.resolve().then(function() {
    return base_html$2;
  }).then(({ data: data2 }) => data2),
  "v-3d59248e": () => Promise.resolve().then(function() {
    return cascadeAsync_html;
  }).then(({ data: data2 }) => data2),
  "v-41e9b608": () => Promise.resolve().then(function() {
    return cascade_html;
  }).then(({ data: data2 }) => data2),
  "v-15f8d3f7": () => Promise.resolve().then(function() {
    return base_html$1;
  }).then(({ data: data2 }) => data2),
  "v-4f1dd6be": () => Promise.resolve().then(function() {
    return base_html;
  }).then(({ data: data2 }) => data2),
  "v-8085571e": () => Promise.resolve().then(function() {
    return validator_html;
  }).then(({ data: data2 }) => data2),
  "v-3dcc7d37": () => Promise.resolve().then(function() {
    return image_html;
  }).then(({ data: data2 }) => data2),
  "v-11f46678": () => Promise.resolve().then(function() {
    return header_html;
  }).then(({ data: data2 }) => data2),
  "v-131b96b8": () => Promise.resolve().then(function() {
    return menuLeft_html;
  }).then(({ data: data2 }) => data2),
  "v-5cddbe00": () => Promise.resolve().then(function() {
    return operationMenu_html;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html;
  }).then(({ data: data2 }) => data2)
};
const pagesData = vue.ref(pagesData$1);
const pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
const pageData = vue.ref(pageDataEmpty);
const usePageData = () => pageData;
const resolvePageData = async (pageKey) => {
  const pageDataResolver = pagesData.value[pageKey];
  if (!pageDataResolver) {
    return pageDataEmpty;
  }
  const pageData2 = await pageDataResolver();
  return pageData2 !== null && pageData2 !== void 0 ? pageData2 : pageDataEmpty;
};
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
const pageFrontmatterSymbol = Symbol("");
const usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
const resolvePageFrontmatter = (pageData2) => pageData2.frontmatter;
const isArray = Array.isArray;
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const resolveHeadIdentifier = ([tag, attrs, content]) => {
  if (tag === "meta" && attrs.name) {
    return `${tag}.${attrs.name}`;
  }
  if (["title", "base"].includes(tag)) {
    return tag;
  }
  if (tag === "template" && attrs.id) {
    return `${tag}.${attrs.id}`;
  }
  return JSON.stringify([tag, attrs, content]);
};
const dedupeHead = (head) => {
  const identifierSet = new Set();
  const result = [];
  head.forEach((item) => {
    const identifier = resolveHeadIdentifier(item);
    if (!identifierSet.has(identifier)) {
      identifierSet.add(identifier);
      result.push(item);
    }
  });
  return result;
};
const isLinkHttp = (link) => /^(https?:)?\/\//.test(link);
const isLinkMailto = (link) => /^mailto:/.test(link);
const isLinkTel = (link) => /^tel:/.test(link);
const isPlainObject = (val) => Object.prototype.toString.call(val) === "[object Object]";
const removeEndingSlash = (str) => str.replace(/\/$/, "");
const removeLeadingSlash = (str) => str.replace(/^\//, "");
const resolveLocalePath = (locales, routePath) => {
  const localePaths = Object.keys(locales).sort((a, b) => {
    const levelDelta = b.split("/").length - a.split("/").length;
    if (levelDelta !== 0) {
      return levelDelta;
    }
    return b.length - a.length;
  });
  for (const localePath of localePaths) {
    if (routePath.startsWith(localePath)) {
      return localePath;
    }
  }
  return "/";
};
const pageHeadSymbol = Symbol("");
const usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
const resolvePageHead = (headTitle, frontmatter, siteLocale) => {
  const description = isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
  const head = [
    ...isArray(frontmatter.head) ? frontmatter.head : [],
    ...siteLocale.head,
    ["title", {}, headTitle],
    ["meta", { name: "description", content: description }]
  ];
  return dedupeHead(head);
};
const pageHeadTitleSymbol = Symbol("");
const resolvePageHeadTitle = (page, siteLocale) => `${page.title ? `${page.title} | ` : ``}${siteLocale.title}`;
const pageLangSymbol = Symbol("");
const usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
const resolvePageLang = (pageData2) => pageData2.lang || "en";
const routeLocaleSymbol = Symbol("");
const useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
const resolveRouteLocale = (locales, routePath) => resolveLocalePath(locales, routePath);
const siteData$1 = {
  "base": "/vue-curd/",
  "lang": "zh-CN",
  "title": "vue-curd\u6587\u6863\uFF01",
  "description": "",
  "head": [],
  "locales": {}
};
const siteData = vue.ref(siteData$1);
const useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
const siteLocaleDataSymbol = Symbol("");
const useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
const resolveSiteLocaleData = (site, routeLocale) => __spreadValues(__spreadValues({}, site), site.locales[routeLocale]);
const setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
const Content = (props) => {
  let key;
  if (props.pageKey) {
    key = props.pageKey;
  } else {
    const page = usePageData();
    key = page.value.key;
  }
  const component = pagesComponents[key];
  if (component) {
    return vue.h(component);
  }
  return vue.h("div", "404 Not Found");
};
Content.displayName = "Content";
Content.props = {
  pageKey: {
    type: String,
    required: false
  }
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout;
  }))
};
const Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page.value.path) {
        const frontmatterLayout = page.value.frontmatter.layout;
        if (isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
const defineClientAppEnhance = (clientAppEnhance) => clientAppEnhance;
const defineClientAppSetup = (clientAppSetup) => clientAppSetup;
const withBase = (url) => {
  if (isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${removeLeadingSlash(url)}`;
};
var vars$3 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = (_, { slots }) => {
  var _a;
  return vue.h("span", [svg, (_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)]);
};
ExternalLinkIcon.displayName = "ExternalLinkIcon";
var clientAppEnhance0 = defineClientAppEnhance(({ app }) => {
  app.component("ExternalLinkIcon", ExternalLinkIcon);
});
var vars$2 = "";
var mediumZoom = "";
var clientAppEnhance1 = defineClientAppEnhance(({ app, router }) => {
  return;
});
const themeData$1 = {
  "logo": "https://vuejs.org/images/logo.png",
  "navbar": [
    {
      "text": "\u9996\u9875",
      "link": "/"
    },
    {
      "text": "\u6307\u5357",
      "link": "/guide/"
    },
    {
      "text": "\u6587\u6863",
      "children": [
        {
          "text": "CurdForm",
          "link": "/form/"
        },
        {
          "text": "CurdTable",
          "link": "/table/"
        }
      ]
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "\u6307\u5357",
        "children": [
          {
            "text": "\u5FEB\u901F\u4E0A\u624B",
            "link": "/guide/README.md"
          }
        ]
      }
    ],
    "/form/": [
      {
        "text": "\u57FA\u7840",
        "link": "/form/"
      },
      {
        "text": "\u6570\u636E\u9A8C\u8BC1",
        "children": [
          {
            "text": "\u57FA\u7840\u9A8C\u8BC1",
            "link": "/form/rules/base.html"
          },
          {
            "text": "\u81EA\u5B9A\u4E49\u9A8C\u8BC1",
            "link": "/form/rules/validator.html"
          }
        ]
      },
      {
        "text": "\u6570\u636E\u5B57\u5178",
        "children": [
          {
            "text": "\u666E\u901A\u7528\u6CD5",
            "link": "/form/options/base.html"
          },
          {
            "text": "\u5F02\u6B65\u6570\u636E",
            "link": "/form/options/async.html"
          },
          {
            "text": "\u7EA7\u8054",
            "link": "/form/options/cascade.html"
          },
          {
            "text": "\u7EA7\u8054\u67E5\u8BE2",
            "link": "/form/options/cascade-async.html"
          }
        ]
      },
      {
        "text": "\u7EC4\u4EF6\u4E8B\u4EF6",
        "children": [
          {
            "text": "\u666E\u901A\u7528\u6CD5",
            "link": "/form/events/base.html"
          }
        ]
      },
      {
        "text": "\u914D\u7F6E",
        "link": "/form/props/base.html"
      }
    ],
    "/table/": [
      {
        "text": "\u57FA\u7840\u7528\u6CD5",
        "link": "/table/"
      },
      {
        "text": "\u63D2\u69FD\u81EA\u5B9A\u4E49",
        "children": [
          {
            "text": "\u81EA\u5B9A\u4E49\u5934\u90E8",
            "link": "/table/slots/header.html"
          },
          {
            "text": "\u81EA\u5B9A\u4E49\u64CD\u4F5C\u83DC\u5355",
            "link": "/table/slots/operation-menu.html"
          },
          {
            "text": "\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6309\u94AE",
            "link": "/table/slots/menu-left.html"
          }
        ]
      },
      {
        "text": "\u6587\u4EF6",
        "children": [
          {
            "text": "\u56FE\u7247\u663E\u793A\u4E0E\u4E0A\u4F20",
            "link": "/table/file/image.html"
          }
        ]
      }
    ]
  },
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "darkMode": true,
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdated": true,
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
};
const themeData = vue.ref(themeData$1);
const useThemeData = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return __spreadValues(__spreadValues({}, theme), (_a = theme.locales) === null || _a === void 0 ? void 0 : _a[routeLocale]);
};
var clientAppEnhance2 = defineClientAppEnhance(({ app }) => {
  const themeData2 = useThemeData();
  const routeLocale = app._context.provides[routeLocaleSymbol];
  const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
  app.provide(themeLocaleDataSymbol, themeLocaleData);
  Object.defineProperties(app.config.globalProperties, {
    $theme: {
      get() {
        return themeData2.value;
      }
    },
    $themeLocale: {
      get() {
        return themeLocaleData.value;
      }
    }
  });
});
const _sfc_main$E = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    type: {
      type: String,
      required: false,
      default: "tip"
    },
    text: {
      type: String,
      required: false,
      default: ""
    },
    vertical: {
      type: String,
      required: false,
      default: void 0
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["badge", __props.type],
        style: {
          verticalAlign: __props.vertical
        }
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${serverRenderer.ssrInterpolate(__props.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/Badge.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var CodeGroup = vue.defineComponent({
  name: "CodeGroup",
  setup(_, { slots }) {
    const activeIndex = vue.ref(-1);
    const tabRefs = vue.ref([]);
    const activateNext = (i = activeIndex.value) => {
      if (i < tabRefs.value.length - 1) {
        activeIndex.value = i + 1;
      } else {
        activeIndex.value = 0;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const activatePrev = (i = activeIndex.value) => {
      if (i > 0) {
        activeIndex.value = i - 1;
      } else {
        activeIndex.value = tabRefs.value.length - 1;
      }
      tabRefs.value[activeIndex.value].focus();
    };
    const keyboardHandler = (event, i) => {
      if (event.key === " " || event.key === "Enter") {
        event.preventDefault();
        activeIndex.value = i;
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        activateNext(i);
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        activatePrev(i);
      }
    };
    return () => {
      var _a;
      const items = (((_a = slots.default) === null || _a === void 0 ? void 0 : _a.call(slots)) || []).filter((vnode) => vnode.type.name === "CodeGroupItem").map((vnode) => {
        if (vnode.props === null) {
          vnode.props = {};
        }
        return vnode;
      });
      if (items.length === 0) {
        return null;
      }
      if (activeIndex.value < 0 || activeIndex.value > items.length - 1) {
        activeIndex.value = items.findIndex((vnode) => vnode.props.active === "" || vnode.props.active === true);
        if (activeIndex.value === -1) {
          activeIndex.value = 0;
        }
      } else {
        items.forEach((vnode, i) => {
          vnode.props.active = i === activeIndex.value;
        });
      }
      return vue.h("div", { class: "code-group" }, [
        vue.h("div", { class: "code-group__nav" }, vue.h("ul", { class: "code-group__ul" }, items.map((vnode, i) => {
          const isActive = i === activeIndex.value;
          return vue.h("li", { class: "code-group__li" }, vue.h("button", {
            ref: (element) => {
              if (element) {
                tabRefs.value[i] = element;
              }
            },
            class: {
              "code-group__nav-tab": true,
              "code-group__nav-tab-active": isActive
            },
            ariaPressed: isActive,
            ariaExpanded: isActive,
            onClick: () => activeIndex.value = i,
            onKeydown: (e) => keyboardHandler(e, i)
          }, vnode.props.title));
        }))),
        items
      ]);
    };
  }
});
const __default__$1 = vue.defineComponent({
  name: "CodeGroupItem"
});
const _sfc_main$D = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__$1), {
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      required: true
    },
    active: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["code-group-item", { "code-group-item__active": __props.active }],
        "aria-selected": __props.active
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
}));
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/CodeGroupItem.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const darkModeSymbol = Symbol("");
const useDarkMode = () => {
  const isDarkMode = vue.inject(darkModeSymbol);
  if (!isDarkMode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return isDarkMode;
};
const setupDarkMode = () => {
  const themeLocale = useThemeLocaleData();
  const isDarkPreferred = core.usePreferredDark();
  const darkStorage = core.useStorage("vuepress-color-scheme", "auto");
  const isDarkMode = vue.computed({
    get() {
      if (!themeLocale.value.darkMode) {
        return false;
      }
      if (darkStorage.value === "auto") {
        return isDarkPreferred.value;
      }
      return darkStorage.value === "dark";
    },
    set(val) {
      if (val === isDarkPreferred.value) {
        darkStorage.value = "auto";
      } else {
        darkStorage.value = val ? "dark" : "light";
      }
    }
  });
  vue.provide(darkModeSymbol, isDarkMode);
  updateHtmlDarkClass(isDarkMode);
};
const updateHtmlDarkClass = (isDarkMode) => {
  const update = (value = isDarkMode.value) => {
    const htmlEl = window === null || window === void 0 ? void 0 : window.document.querySelector("html");
    htmlEl === null || htmlEl === void 0 ? void 0 : htmlEl.classList.toggle("dark", value);
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, update, { immediate: true });
  });
  vue.onUnmounted(() => update());
};
const useResolveRouteWithRedirect = (...args) => {
  const router = vueRouter.useRouter();
  const route = router.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched === null || lastMatched === void 0 ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(__spreadValues({
    hash: route.hash,
    query: route.query,
    params: route.params
  }, resolvedRedirectObj));
};
const useNavLink = (item) => {
  const resolved = useResolveRouteWithRedirect(item);
  return {
    text: resolved.meta.title || item,
    link: resolved.name === "404" ? item : resolved.fullPath
  };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve === null || promiseResolve === void 0 ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
const sidebarItemsSymbol = Symbol("sidebarItems");
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
const setupSidebarItems = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  const sidebarItems = vue.computed(() => resolveSidebarItems(frontmatter.value, themeLocale.value));
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const resolveSidebarItems = (frontmatter, themeLocale) => {
  var _a, _b, _c, _d;
  const sidebarConfig = (_b = (_a = frontmatter.sidebar) !== null && _a !== void 0 ? _a : themeLocale.sidebar) !== null && _b !== void 0 ? _b : "auto";
  const sidebarDepth = (_d = (_c = frontmatter.sidebarDepth) !== null && _c !== void 0 ? _c : themeLocale.sidebarDepth) !== null && _d !== void 0 ? _d : 2;
  if (frontmatter.home || sidebarConfig === false) {
    return [];
  }
  if (sidebarConfig === "auto") {
    return resolveAutoSidebarItems(sidebarDepth);
  }
  if (isArray(sidebarConfig)) {
    return resolveArraySidebarItems(sidebarConfig, sidebarDepth);
  }
  if (isPlainObject(sidebarConfig)) {
    return resolveMultiSidebarItems(sidebarConfig, sidebarDepth);
  }
  return [];
};
const headerToSidebarItem = (header, sidebarDepth) => ({
  text: header.title,
  link: `#${header.slug}`,
  children: headersToSidebarItemChildren(header.children, sidebarDepth)
});
const headersToSidebarItemChildren = (headers, sidebarDepth) => sidebarDepth > 0 ? headers.map((header) => headerToSidebarItem(header, sidebarDepth - 1)) : [];
const resolveAutoSidebarItems = (sidebarDepth) => {
  const page = usePageData();
  return [
    {
      text: page.value.title,
      children: headersToSidebarItemChildren(page.value.headers, sidebarDepth)
    }
  ];
};
const resolveArraySidebarItems = (sidebarConfig, sidebarDepth) => {
  const route = vueRouter.useRoute();
  const page = usePageData();
  const handleChildItem = (item) => {
    var _a;
    let childItem;
    if (isString(item)) {
      childItem = useNavLink(item);
    } else {
      childItem = item;
    }
    if (childItem.children) {
      return __spreadProps(__spreadValues({}, childItem), {
        children: childItem.children.map((item2) => handleChildItem(item2))
      });
    }
    if (childItem.link === route.path) {
      const headers = ((_a = page.value.headers[0]) === null || _a === void 0 ? void 0 : _a.level) === 1 ? page.value.headers[0].children : page.value.headers;
      return __spreadProps(__spreadValues({}, childItem), {
        children: headersToSidebarItemChildren(headers, sidebarDepth)
      });
    }
    return childItem;
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, sidebarDepth) => {
  var _a;
  const route = vueRouter.useRoute();
  const sidebarPath = resolveLocalePath(sidebarConfig, route.path);
  const matchedSidebarConfig = (_a = sidebarConfig[sidebarPath]) !== null && _a !== void 0 ? _a : [];
  return resolveArraySidebarItems(matchedSidebarConfig, sidebarDepth);
};
const useThemeLocaleData = () => useThemeLocaleData$1();
const _sfc_main$C = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(serverRenderer.ssrRenderComponent(vue.unref(ExternalLinkIcon), _attrs, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="sr-only"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(themeLocale).openInNewWindow)}</span>`);
          } else {
            return [
              vue.createVNode("span", { class: "sr-only" }, vue.toDisplayString(vue.unref(themeLocale).openInNewWindow), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/global/ExternalLinkIcon.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var index$1 = "";
var clientAppEnhance3 = defineClientAppEnhance(({ app, router }) => {
  app.component("Badge", _sfc_main$E);
  app.component("CodeGroup", CodeGroup);
  app.component("CodeGroupItem", _sfc_main$D);
  delete app._context.components.ExternalLinkIcon;
  app.component("ExternalLinkIcon", _sfc_main$C);
  app.component("NavbarSearch", () => {
    const SearchComponent = app.component("Docsearch") || app.component("SearchBox");
    if (SearchComponent) {
      return vue.h(SearchComponent);
    }
    return null;
  });
  const scrollBehavior = router.options.scrollBehavior;
  router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait();
    return scrollBehavior(...args);
  };
});
var index = "";
var zhCn = {
  name: "zh-cn",
  el: {
    colorpicker: {
      confirm: "\u786E\u5B9A",
      clear: "\u6E05\u7A7A"
    },
    datepicker: {
      now: "\u6B64\u523B",
      today: "\u4ECA\u5929",
      cancel: "\u53D6\u6D88",
      clear: "\u6E05\u7A7A",
      confirm: "\u786E\u5B9A",
      selectDate: "\u9009\u62E9\u65E5\u671F",
      selectTime: "\u9009\u62E9\u65F6\u95F4",
      startDate: "\u5F00\u59CB\u65E5\u671F",
      startTime: "\u5F00\u59CB\u65F6\u95F4",
      endDate: "\u7ED3\u675F\u65E5\u671F",
      endTime: "\u7ED3\u675F\u65F6\u95F4",
      prevYear: "\u524D\u4E00\u5E74",
      nextYear: "\u540E\u4E00\u5E74",
      prevMonth: "\u4E0A\u4E2A\u6708",
      nextMonth: "\u4E0B\u4E2A\u6708",
      year: "\u5E74",
      month1: "1 \u6708",
      month2: "2 \u6708",
      month3: "3 \u6708",
      month4: "4 \u6708",
      month5: "5 \u6708",
      month6: "6 \u6708",
      month7: "7 \u6708",
      month8: "8 \u6708",
      month9: "9 \u6708",
      month10: "10 \u6708",
      month11: "11 \u6708",
      month12: "12 \u6708",
      weeks: {
        sun: "\u65E5",
        mon: "\u4E00",
        tue: "\u4E8C",
        wed: "\u4E09",
        thu: "\u56DB",
        fri: "\u4E94",
        sat: "\u516D"
      },
      months: {
        jan: "\u4E00\u6708",
        feb: "\u4E8C\u6708",
        mar: "\u4E09\u6708",
        apr: "\u56DB\u6708",
        may: "\u4E94\u6708",
        jun: "\u516D\u6708",
        jul: "\u4E03\u6708",
        aug: "\u516B\u6708",
        sep: "\u4E5D\u6708",
        oct: "\u5341\u6708",
        nov: "\u5341\u4E00\u6708",
        dec: "\u5341\u4E8C\u6708"
      }
    },
    select: {
      loading: "\u52A0\u8F7D\u4E2D",
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      placeholder: "\u8BF7\u9009\u62E9"
    },
    cascader: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      loading: "\u52A0\u8F7D\u4E2D",
      placeholder: "\u8BF7\u9009\u62E9",
      noData: "\u6682\u65E0\u6570\u636E"
    },
    pagination: {
      goto: "\u524D\u5F80",
      pagesize: "\u6761/\u9875",
      total: "\u5171 {total} \u6761",
      pageClassifier: "\u9875",
      deprecationWarning: "\u4F60\u4F7F\u7528\u4E86\u4E00\u4E9B\u5DF2\u88AB\u5E9F\u5F03\u7684\u7528\u6CD5\uFF0C\u8BF7\u53C2\u8003 el-pagination \u7684\u5B98\u65B9\u6587\u6863"
    },
    messagebox: {
      title: "\u63D0\u793A",
      confirm: "\u786E\u5B9A",
      cancel: "\u53D6\u6D88",
      error: "\u8F93\u5165\u7684\u6570\u636E\u4E0D\u5408\u6CD5!"
    },
    upload: {
      deleteTip: "\u6309 delete \u952E\u53EF\u5220\u9664",
      delete: "\u5220\u9664",
      preview: "\u67E5\u770B\u56FE\u7247",
      continue: "\u7EE7\u7EED\u4E0A\u4F20"
    },
    table: {
      emptyText: "\u6682\u65E0\u6570\u636E",
      confirmFilter: "\u7B5B\u9009",
      resetFilter: "\u91CD\u7F6E",
      clearFilter: "\u5168\u90E8",
      sumText: "\u5408\u8BA1"
    },
    tree: {
      emptyText: "\u6682\u65E0\u6570\u636E"
    },
    transfer: {
      noMatch: "\u65E0\u5339\u914D\u6570\u636E",
      noData: "\u65E0\u6570\u636E",
      titles: ["\u5217\u8868 1", "\u5217\u8868 2"],
      filterPlaceholder: "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9",
      noCheckedFormat: "\u5171 {total} \u9879",
      hasCheckedFormat: "\u5DF2\u9009 {checked}/{total} \u9879"
    },
    image: {
      error: "\u52A0\u8F7D\u5931\u8D25"
    },
    pageHeader: {
      title: "\u8FD4\u56DE"
    },
    popconfirm: {
      confirmButtonText: "\u786E\u5B9A",
      cancelButtonText: "\u53D6\u6D88"
    }
  }
};
var style = "";
var clientAppEnhance4 = defineClientAppEnhance(({ app, router, siteData: siteData2 }) => {
  app.use(ElementPlus__default["default"], { locale: zhCn, size: "mini" });
  app.use(VueCurd__default["default"]);
});
const clientAppEnhances = [
  clientAppEnhance0,
  clientAppEnhance1,
  clientAppEnhance2,
  clientAppEnhance3,
  clientAppEnhance4
];
function r(r2, e, n) {
  var i, t, o;
  e === void 0 && (e = 50), n === void 0 && (n = {});
  var a = (i = n.isImmediate) != null && i, u = (t = n.callback) != null && t, c = n.maxWait, v = Date.now(), l = [];
  function f() {
    if (c !== void 0) {
      var r3 = Date.now() - v;
      if (r3 + e >= c)
        return c - r3;
    }
    return e;
  }
  var d = function() {
    var e2 = [].slice.call(arguments), n2 = this;
    return new Promise(function(i2, t2) {
      var c2 = a && o === void 0;
      if (o !== void 0 && clearTimeout(o), o = setTimeout(function() {
        if (o = void 0, v = Date.now(), !a) {
          var i3 = r2.apply(n2, e2);
          u && u(i3), l.forEach(function(r3) {
            return (0, r3.resolve)(i3);
          }), l = [];
        }
      }, f()), c2) {
        var d2 = r2.apply(n2, e2);
        return u && u(d2), i2(d2);
      }
      l.push({ resolve: i2, reject: t2 });
    });
  };
  return d.cancel = function(r3) {
    o !== void 0 && clearTimeout(o), l.forEach(function(e2) {
      return (0, e2.reject)(r3);
    }), l = [];
  }, d;
}
const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
var vars$1 = "";
var backToTop = "";
const BackToTop = vue.defineComponent({
  name: "BackToTop",
  setup() {
    const scrollTop = vue.ref(0);
    const show = vue.computed(() => scrollTop.value > 300);
    const onScroll = r(() => {
      scrollTop.value = getScrollTop();
    }, 100);
    vue.onMounted(() => {
      scrollTop.value = getScrollTop();
      window.addEventListener("scroll", () => onScroll());
    });
    const backToTopEl = vue.h("div", { class: "back-to-top", onClick: scrollToTop });
    return () => vue.h(vue.Transition, {
      name: "back-to-top"
    }, {
      default: () => show.value ? backToTopEl : null
    });
  }
});
const clientAppRootComponents = [
  BackToTop
];
var clientAppSetup0 = defineClientAppSetup(() => {
  return;
});
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = new Set();
    loadedPages.add(router.currentRoute.value.path);
    nprogress__namespace.configure({ showSpinner: false });
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress__namespace.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress__namespace.done();
    });
  });
};
var clientAppSetup1 = defineClientAppSetup(() => {
  useNprogress();
});
var clientAppSetup2 = defineClientAppSetup(() => {
  setupDarkMode();
  setupSidebarItems();
});
const clientAppSetups = [
  clientAppSetup0,
  clientAppSetup1,
  clientAppSetup2
];
const routeItems = [
  ["v-8daa1a0e", "/", { "title": "" }, ["/index.html", "/README.md"]],
  ["v-14948c92", "/form/", { "title": "" }, ["/form/index.html", "/form/README.md"]],
  ["v-fffb8e28", "/guide/", { "title": "" }, ["/guide/index.html", "/guide/README.md"]],
  ["v-d5d75b4c", "/table/", { "title": "" }, ["/table/index.html", "/table/README.md"]],
  ["v-1f14d7c4", "/form/events/base.html", { "title": "" }, ["/form/events/base", "/form/events/base.md"]],
  ["v-f0935800", "/form/options/async.html", { "title": "" }, ["/form/options/async", "/form/options/async.md"]],
  ["v-1404dc25", "/form/options/base.html", { "title": "" }, ["/form/options/base", "/form/options/base.md"]],
  ["v-3d59248e", "/form/options/cascade-async.html", { "title": "" }, ["/form/options/cascade-async", "/form/options/cascade-async.md"]],
  ["v-41e9b608", "/form/options/cascade.html", { "title": "" }, ["/form/options/cascade", "/form/options/cascade.md"]],
  ["v-15f8d3f7", "/form/props/base.html", { "title": "" }, ["/form/props/base", "/form/props/base.md"]],
  ["v-4f1dd6be", "/form/rules/base.html", { "title": "" }, ["/form/rules/base", "/form/rules/base.md"]],
  ["v-8085571e", "/form/rules/validator.html", { "title": "" }, ["/form/rules/validator", "/form/rules/validator.md"]],
  ["v-3dcc7d37", "/table/file/image.html", { "title": "" }, ["/table/file/image", "/table/file/image.md"]],
  ["v-11f46678", "/table/slots/header.html", { "title": "" }, ["/table/slots/header", "/table/slots/header.md"]],
  ["v-131b96b8", "/table/slots/menu-left.html", { "title": "" }, ["/table/slots/menu-left", "/table/slots/menu-left.md"]],
  ["v-5cddbe00", "/table/slots/operation-menu.html", { "title": "" }, ["/table/slots/operation-menu", "/table/slots/operation-menu.md"]],
  ["v-3706649a", "/404.html", {}, ["/404"]]
];
const pagesRoutes = routeItems.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
const provideGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
};
const registerGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content);
};
const appCreator = vue.createSSRApp;
const historyCreator = vueRouter.createMemoryHistory;
const createVueApp = async () => {
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      setupUpdateHead();
      for (const clientAppSetup of clientAppSetups) {
        clientAppSetup();
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientAppRootComponents.map((comp) => vue.h(comp))
      ];
    }
  });
  const router = vueRouter.createRouter({
    history: historyCreator(removeEndingSlash(siteData.value.base)),
    routes: pagesRoutes,
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvePageData(to.name),
        (_a = pagesComponents[to.name]) === null || _a === void 0 ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  provideGlobalComputed(app, router);
  registerGlobalComponents(app);
  for (const clientAppEnhance of clientAppEnhances) {
    await clientAppEnhance({ app, router, siteData });
  }
  app.use(router);
  return {
    app,
    router
  };
};
var index_html_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$B = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_el_button = vue.resolveComponent("el-button");
  _push(`<!--[--><div class="head" data-v-dcfa0244><img src="https://vuejs.org/images/logo.png" data-v-dcfa0244><div class="title" data-v-dcfa0244>EVUE</div><div class="subtit" data-v-dcfa0244>\u524D\u7AEF\u642C\u7816\u795E\u5668\uFF0C\u8D34\u5408\u4F01\u4E1A\u5F00\u53D1</div></div><div class="control" data-v-dcfa0244>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/guide/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(serverRenderer.ssrRenderComponent(_component_el_button, {
          size: "large",
          type: "primary"
        }, {
          default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`\u5FEB\u901F\u5F00\u59CB`);
            } else {
              return [
                vue.createTextVNode("\u5FEB\u901F\u5F00\u59CB")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          vue.createVNode(_component_el_button, {
            size: "large",
            type: "primary"
          }, {
            default: vue.withCtx(() => [
              vue.createTextVNode("\u5FEB\u901F\u5F00\u59CB")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="intro-list" data-v-dcfa0244><div class="item" data-v-dcfa0244><div class="title" data-v-dcfa0244>\u6613\u7528\u7075\u6D3B</div><div class="desc" data-v-dcfa0244>\u5DF2\u7ECF\u4F1A\u4E86 Vue element-plus\uFF1F\u5373\u523B\u9605\u8BFB\u6587\u6863\u5F00\u59CB\u4F7F\u7528\u5427\u3002</div></div><div class="item" data-v-dcfa0244><div class="title" data-v-dcfa0244>\u4E30\u5BCC\u7EC4\u4EF6</div><div class="desc" data-v-dcfa0244>\u5305\u542B\u4E86\u5927\u91CF\u7684\u5E38\u7528\u7EC4\u4EF6\u5E93\u4EE5\u53CA\u63D2\u4EF6\u5E93\u3002</div></div><div class="item" data-v-dcfa0244><div class="title" data-v-dcfa0244>\u9AD8\u6548\u517C\u5BB9</div><div class="desc" data-v-dcfa0244>\u517C\u5BB9\u73B0\u5728\u4E3B\u6D41\u7684\u6D4F\u89C8\u5668\uFF0C\u5F00\u7BB1\u5373\u7528\u7684\u63D2\u4EF6\u5F15\u5165\u6A21\u5F0F\u3002</div></div></div><!--]-->`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/index.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var index_html$8 = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-dcfa0244"]]);
var index_html$9 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$8
});
const _sfc_main$A = {
  __ssrInlineRender: true,
  setup(__props) {
    const formSchema = {
      formItem: [
        { type: "input", label: "\u7528\u6237\u540D", prop: "username", span: 24 },
        { type: "input", label: "\u59D3\u540D", prop: "name", span: 24 },
        { type: "input-password", label: "\u5BC6\u7801", prop: "password", span: 24 },
        {
          type: "select",
          label: "\u89D2\u8272",
          prop: "role",
          options: [
            { label: "\u8D85\u7EA7\u7BA1\u7406\u5458", value: 1 },
            { label: "\u666E\u901A\u7BA1\u7406\u5458", value: 2 }
          ],
          span: 24
        },
        {
          type: "radio",
          label: "\u6027\u522B",
          prop: "sex",
          options: [
            { label: "\u7537", value: 1 },
            { label: "\u5973", value: 2 }
          ],
          span: 24,
          value: 1
        },
        {
          type: "input-number",
          label: "\u5E74\u9F84",
          prop: "age",
          value: 1,
          props: {
            controlsPosition: "right"
          },
          span: 12
        }
      ],
      rules: {
        username: [{ required: true, message: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A", trigger: "trigger" }]
      }
    };
    const fields = {};
    const dynamicForm = vue.ref();
    const instance = vue.getCurrentInstance();
    const submit = () => {
      dynamicForm.value.validate((valid) => {
        if (valid) {
          instance.appContext.config.globalProperties.$message({
            type: "success",
            message: "\u63D0\u4EA4\u6210\u529F"
          });
        }
      });
    };
    const clear = () => {
      dynamicForm.value.schemaFormRef.resetFields();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdForm = vue.resolveComponent("CurdForm");
      const _component_el_button = vue.resolveComponent("el-button");
      _push(`<!--[--><h2 id="\u57FA\u7840\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u8868\u5355" aria-hidden="true">#</a> \u57FA\u7840\u8868\u5355</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdForm, {
        class: "center-form",
        ref_key: "dynamicForm",
        ref: dynamicForm,
        fields,
        "form-schema": formSchema,
        "label-width": formSchema.labelWidth || "110px"
      }, {
        "operate-button": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, { type: "primary" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u63D0 \u4EA4`);
                } else {
                  return [
                    vue.createTextVNode("\u63D0 \u4EA4")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, { type: "default" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6E05 \u7A7A`);
                } else {
                  return [
                    vue.createTextVNode("\u6E05 \u7A7A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { style: { "text-align": "center" } }, [
                vue.createVNode(_component_el_button, {
                  type: "primary",
                  onClick: submit
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u63D0 \u4EA4")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_button, {
                  type: "default",
                  onClick: clear
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u6E05 \u7A7A")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>curd-form</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fields<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema.labelWidth || <span class="token punctuation">&#39;</span>110px<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>operate-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0 \u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6E05 \u7A7A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>curd-form</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">import</span> PageHeader <span class="token keyword">from</span> <span class="token string">&quot;@/components/Layout/PageHeader&quot;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input-password&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&quot;\u89D2\u8272&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;role&quot;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u7BA1\u7406\u5458&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u666E\u901A\u7BA1\u7406\u5458&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&quot;\u6027\u522B&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      type<span class="token operator">:</span> <span class="token string">&quot;input-number&quot;</span><span class="token punctuation">,</span>
      label<span class="token operator">:</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      props<span class="token operator">:</span> <span class="token punctuation">{</span>
        controlsPosition<span class="token operator">:</span> <span class="token string">&quot;right&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      span<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fields <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dynamicForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4\u6210\u529F&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">clear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>schemaFormRef<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/index.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var index_html$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$A
});
const _sfc_main$z = {
  __ssrInlineRender: true,
  setup(__props) {
    vue.getCurrentInstance();
    vue.ref({
      formItem: [
        { type: "input", label: "\u7528\u6237\u540D", prop: "username", span: 24 },
        { type: "input", label: "\u59D3\u540D", prop: "name", span: 24 }
      ],
      rules: {
        username: [{ required: true, message: "\u8BF7\u8F93\u5165\u7528\u6237\u540D", trigger: "blur" }]
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_el_button = vue.resolveComponent("el-button");
      _push(`<!--[--><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u5728\u73B0\u6709\u9879\u76EE\u4E2D\u4F7F\u7528 Evue \u65F6\uFF0C\u53EF\u4EE5\u901A\u8FC7 npm \u6216 yarn \u8FDB\u884C\u5B89\u88C5\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">npm</span> i @vue-curd/vue-curd -S

<span class="token comment"># \u5F15\u5165</span>
<span class="token function">import</span> VueCurd from <span class="token string">&quot;@vue-curd/vue-curd&quot;</span>
app.use<span class="token punctuation">(</span>VueCurd<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><h3 id="\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#\u8868\u683C" aria-hidden="true">#</a> \u8868\u683C</h3><p>\u8BE6\u7EC6\u6587\u6863\u8BF7`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/table/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u524D\u5F80\u67E5\u770B`);
          } else {
            return [
              vue.createTextVNode("\u524D\u5F80\u67E5\u770B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdTable</span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>columns<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>data<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdTable</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>prop<span class="token operator">:</span> <span class="token string">&quot;age&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5E74\u9F84&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&quot;\u5F20\u4E09&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>name<span class="token operator">:</span> <span class="token string">&quot;\u674E\u56DB&quot;</span><span class="token punctuation">,</span> age<span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u8868\u5355" aria-hidden="true">#</a> \u8868\u5355</h3><p>\u8BE6\u7EC6\u6587\u6863\u8BF7`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/form/" }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u524D\u5F80\u67E5\u770B`);
          } else {
            return [
              vue.createTextVNode("\u524D\u5F80\u67E5\u770B")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="\u5F39\u7A97\u8868\u5355" tabindex="-1"><a class="header-anchor" href="#\u5F39\u7A97\u8868\u5355" aria-hidden="true">#</a> \u5F39\u7A97\u8868\u5355</h3>`);
      _push(serverRenderer.ssrRenderComponent(_component_el_button, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`\u5F39 \u51FA`);
          } else {
            return [
              vue.createTextVNode("\u5F39 \u51FA")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>open<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u5F39 \u51FA<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span>getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span> <span class="token punctuation">{</span>
      username<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> message<span class="token operator">:</span><span class="token string">&quot;\u8BF7\u8F93\u5165\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">&quot;blur&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">open</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span>$formDialog<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        formSchema<span class="token operator">:</span> formSchema
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var index_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$z
});
const columns = [
  {
    label: "\u7528\u6237",
    children: [
      {
        label: "\u59D3\u540D",
        prop: "name",
        width: 140,
        filter: {
          component: "input"
        },
        form: {
          rules: [
            {
              required: true,
              trigger: "blur",
              message: "\u8BF7\u8F93\u5165\u7528\u6237\u59D3\u540D"
            }
          ]
        }
      },
      {
        label: "\u767B\u5F55\u8D26\u53F7",
        prop: "account",
        width: 120,
        filter: {
          component: "input"
        },
        form: {
          rules: [
            {
              required: true,
              trigger: "blur",
              message: "\u8BF7\u8F93\u5165\u767B\u5F55\u8D26\u53F7"
            }
          ]
        }
      }
    ]
  },
  {
    label: "\u624B\u673A\u53F7",
    prop: "phone",
    width: 130,
    filter: {
      component: "input"
    },
    sortable: true,
    form: {
      component: "input",
      rules: [
        {
          required: true,
          trigger: "blur",
          message: "\u8BF7\u8F93\u5165\u624B\u673A\u53F7"
        },
        {
          len: 11,
          message: "\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801",
          trigger: "blur"
        }
      ]
    }
  },
  {
    label: "\u90AE\u7BB1",
    prop: "email",
    width: 200,
    form: {
      component: "input",
      rules: [
        {
          required: true,
          message: "\u8BF7\u8F93\u5165\u90AE\u7BB1",
          trigger: "blur"
        },
        {
          type: "email",
          message: "\u8BF7\u586B\u5199\u6B63\u786E\u7684\u90AE\u7BB1",
          trigger: "blur"
        }
      ]
    }
  },
  {
    label: "\u89D2\u8272",
    prop: "role",
    width: 120,
    align: "center",
    options: [
      { label: "\u8D85\u7EA7\u7BA1\u7406\u5458", value: 1 },
      { label: "\u666E\u901A\u7BA1\u7406\u5458", value: 2 }
    ],
    form: {
      component: "select",
      rules: [
        {
          required: true,
          trigger: "change",
          message: "\u8BF7\u9009\u62E9\u7528\u6237\u89D2\u8272"
        }
      ],
      value: 1
    }
  },
  {
    label: "\u6027\u522B",
    prop: "gender",
    width: 100,
    align: "center",
    options: [
      { label: "\u7537", value: 1 },
      { label: "\u5973", value: 2 }
    ],
    form: {
      component: "radio",
      value: 1
    }
  },
  {
    label: "\u72B6\u6001",
    prop: "status",
    align: "center",
    options: [
      { value: 1, label: "\u542F\u7528", className: "color-green", icon: "circle-check" },
      { value: 2, label: "\u7981\u7528", className: "color-red", icon: "remove" }
    ],
    filter: {
      component: "select"
    },
    form: {
      component: "radio",
      value: 1
    }
  },
  {
    label: "\u521B\u5EFA\u65F6\u95F4",
    prop: "createTime",
    width: 170,
    form: {
      component: "date-picker",
      props: {
        format: "YYYY/MM/DD",
        valueFormat: "YYYY/MM/DD"
      },
      hidden: (form) => !form.id
    }
  },
  {
    label: "ID",
    prop: "id",
    width: 120,
    form: {
      component: "input",
      props: {
        disabled: true
      },
      hidden: (form) => !form.id
    }
  },
  {
    label: "\u4E2A\u4EBA\u4ECB\u7ECD",
    prop: "desc",
    width: 140,
    showOverflowTooltip: true,
    form: {
      component: "input",
      props: {
        type: "textarea",
        rows: 6
      },
      span: 24
    }
  }
];
const _sfc_main$y = {
  components: {},
  data() {
    return {
      pageOptions: {
        total: 0,
        pageSize: 10
      },
      data: [],
      columns
    };
  },
  methods: {
    fetchData({ pageIndex, pageSize, sortColumn, sortType, search }) {
      return new Promise((resolve) => {
        const params = __spreadValues({
          pageIndex,
          pageSize
        }, search);
        if (sortColumn) {
          params.sortColumn = sortColumn;
          params.sortType = sortType;
        }
        console.log("params", params);
        Promise.resolve().then((res) => {
          this.data = [
            {
              name: "\u5F20\u4E09",
              account: "ttt",
              phone: "13555555555",
              email: "admin@admin.com",
              role: 1,
              status: 1,
              desc: "\u65E0\u7236\u65E0\u6BCD\u7684\u4E24\u4E2A\u5B69\u5B50\uFF0C\u5C31\u8FD9\u6837\u987D\u5F3A\u751F\u6D3B\u5728\u957F\u57CE\u4E4B\u7554\u7684\u9547\u5B50\u4E0A\u3002\u5C11\u5E74\u5E26\u7740\u5F1F\u5F1F\uFF0C\u4EE5\u4F5C\u96F6\u5DE5\u4E3A\u751F\u3002\u5173\u5E02\u5F00\u542F\u662F\u4EBA\u4EEC\u6700\u5FEB\u6D3B\u7684\u65E5\u5B50\uFF0C\u56DB\u9762\u516B\u65B9\u7684\u5546\u4EBA\u548C\u8D27\u7269\u6C47\u96C6\u7740\u3002\u5C11\u5E74\u7A7F\u68AD\u5176\u4E2D\uFF0C\u773C\u660E\u624B\u5FEB\uFF0C\u7B11\u8138\u8FCE\u4EBA\uFF0C\u5546\u4EBA\u4EEC\u4E5F\u4E50\u610F\u5173\u7167"
            },
            {
              name: "\u5F20\u4E091",
              role: 2,
              status: 2
            }
          ];
          this.pageOptions.total = 2;
          resolve();
        });
      });
    },
    fetchCreate(params) {
      console.log("params", params);
      return new Promise((resolve, reject) => {
        Promise.resolve(() => {
          resolve();
        }).catch((err) => {
          reject(err);
        });
      });
    },
    fetchEdit(editedParams, fullParams) {
      console.log("editedParams", editedParams);
      editedParams.id = fullParams.id;
      return new Promise((resolve, reject) => {
        Promise.resolve(() => {
          resolve();
        }).catch((err) => {
          reject(err);
        });
      });
    },
    fetchRemove(row) {
      return new Promise((resolve, reject) => {
        Promise.resolve(() => {
          resolve(row);
        }).catch((err) => {
          reject(err);
        });
      });
    },
    selectionChange(rows) {
      console.log("row", rows);
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CurdTable = vue.resolveComponent("CurdTable");
  _push(`<!--[--><h2 id="\u57FA\u7840\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u57FA\u7840\u7528\u6CD5" aria-hidden="true">#</a> \u57FA\u7840\u7528\u6CD5</h2>`);
  _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
    data: $data.data,
    columns: $data.columns,
    "page-options": $data.pageOptions,
    index: "",
    selection: "",
    "click-row-to-view": "",
    "fetch-data": $options.fetchData,
    "fetch-create": $options.fetchCreate,
    "fetch-edit": $options.fetchEdit,
    "fetch-remove": $options.fetchRemove
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/table/index.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var index_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$2]]);
var index_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": index_html$4
});
const _sfc_main$x = {
  __ssrInlineRender: true,
  setup(__props) {
    const instance = vue.getCurrentInstance();
    const formSchema = {
      formItem: [
        {
          type: "input",
          label: "\u59D3\u540D",
          prop: "name",
          span: 24,
          eventObject: {
            change: (data2) => {
              instance.appContext.config.globalProperties.$message({
                type: "success",
                message: "change\u4E8B\u4EF6\u89E6\u53D1\u4E86"
              });
            },
            blur: (data2) => {
              instance.appContext.config.globalProperties.$message({
                type: "success",
                message: "blur\u4E8B\u4EF6\u89E6\u53D1\u4E86"
              });
            },
            focus: (data2) => {
              instance.appContext.config.globalProperties.$message({
                type: "success",
                message: "focus\u4E8B\u4EF6\u89E6\u53D1\u4E86"
              });
            },
            click: (data2) => {
              instance.appContext.config.globalProperties.$message({
                type: "success",
                message: "click\u4E8B\u4EF6\u89E6\u53D1\u4E86"
              });
            }
          }
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdForm = vue.resolveComponent("CurdForm");
      _push(`<!--[--><h2 id="\u7EC4\u4EF6\u4E8B\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u7EC4\u4EF6\u4E8B\u4EF6" aria-hidden="true">#</a> \u7EC4\u4EF6\u4E8B\u4EF6</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdForm, {
        ref: "dynamicForm",
        "form-schema": formSchema
      }, null, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>## \u7EC4\u4EF6\u4E8B\u4EF6
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      eventObject<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function-variable function">change</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">&quot;change\u4E8B\u4EF6\u89E6\u53D1\u4E86&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">blur</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">&quot;blur\u4E8B\u4EF6\u89E6\u53D1\u4E86&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">focus</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">&quot;focus\u4E8B\u4EF6\u89E6\u53D1\u4E86&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">click</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
          instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
              type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
              message<span class="token operator">:</span> <span class="token string">&quot;click\u4E8B\u4EF6\u89E6\u53D1\u4E86&quot;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span> 
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/events/base.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var base_html$7 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$x
});
const _sfc_main$w = {
  __ssrInlineRender: true,
  setup(__props) {
    const asyncOptions = function() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            { label: "\u670D\u88C5", value: 1 },
            { label: "\u6570\u7801", value: 2 },
            { label: "\u6BCD\u5A74", value: 3 }
          ]);
        }, 1e3);
      });
    };
    const formSchema = vue.ref({
      formItem: [
        {
          type: "select",
          label: "\u5206\u7C7B",
          prop: "sex",
          span: 24,
          asyncOptions
        },
        {
          type: "radio",
          label: "\u5206\u7C7B",
          prop: "type",
          span: 24,
          options: [],
          asyncOptions
        },
        {
          type: "checkbox",
          label: "\u6807\u7B7E",
          prop: "tags",
          span: 24,
          options: [],
          asyncOptions
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurnForm = vue.resolveComponent("CurnForm");
      _push(`<!--[--><h2 id="\u5F02\u6B65\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u5F02\u6B65\u6570\u636E" aria-hidden="true">#</a> \u5F02\u6B65\u6570\u636E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u914D\u7F6E<code>asyncOptions</code>\u53EF\u5B9E\u73B0\u5F02\u6B65\u83B7\u53D6\u6570\u636E\uFF0C\u6CE8\u610F\u8FD4\u56DE\u503C\u7C7B\u578B\u662Flabel\u3001value\u683C\u5F0F</p></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurnForm, {
        ref: "dynamicForm",
        "form-schema": formSchema.value
      }, null, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
  <span class="token keyword">const</span> <span class="token function-variable function">asyncOptions</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u670D\u88C5&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u7801&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u6BCD\u5A74&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u5206\u7C7B&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span> asyncOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u5206\u7C7B&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;type&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span> asyncOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;checkbox&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6807\u7B7E&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;tags&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span> asyncOptions<span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/options/async.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var async_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$w
});
const _sfc_main$v = {
  __ssrInlineRender: true,
  setup(__props) {
    const formSchema = {
      formItem: [
        {
          type: "radio",
          label: "\u6027\u522B",
          prop: "sex",
          span: 24,
          options: [
            { label: "\u7537", value: 1 },
            { label: "\u5973", value: 2 }
          ],
          value: 1
        },
        {
          type: "select",
          label: "\u8EAB\u4EFD",
          prop: "role",
          span: 24,
          options: [
            { label: "\u8D85\u7EA7\u7BA1\u7406\u5458", value: 1 },
            { label: "\u666E\u901A\u7BA1\u7406\u5458", value: 2 }
          ],
          value: 1
        }
      ]
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdForm = vue.resolveComponent("CurdForm");
      _push(`<!--[--><h2 id="\u666E\u901A\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7528\u6CD5" aria-hidden="true">#</a> \u666E\u901A\u7528\u6CD5</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdForm, {
        ref: "dynamicForm",
        "form-schema": formSchema
      }, null, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6027\u522B&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7537&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5973&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;select&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u8EAB\u4EFD&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;role&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u8D85\u7EA7\u7BA1\u7406\u5458&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u666E\u901A\u7BA1\u7406\u5458&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/options/base.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var base_html$6 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$v
});
const _sfc_main$u = {
  __ssrInlineRender: true,
  setup(__props) {
    const formModel = vue.ref({});
    const dynamicForm = vue.ref();
    const replicationModeOptions = {
      MySQL: [
        { label: "\u5F02\u6B65", value: "async" },
        { label: "\u540C\u6B65", value: "semisync" }
      ],
      PostgreSQL: [
        { label: "\u5F02\u6B65", value: "async" },
        { label: "\u540C\u6B65", value: "sync" }
      ],
      SQLServer: [{ label: "\u540C\u6B65", value: "sync" }]
    };
    const engineVersionOptions = {
      MySQL: [
        { label: "5.6", value: "5.6" },
        { label: "5.7", value: "5.7" },
        { label: "8.0", value: "8.0" }
      ],
      SQLServer: [
        { label: "2017_EE", value: "2017_EE" },
        { label: "2017_WEB", value: "2017_WEB" },
        { label: "2014_EE", value: "2014_EE" },
        { label: "2014_WEB", value: "2014_WEB" },
        { label: "2016_EE", value: "2016_EE" },
        { label: "2016_WEB", value: "2016_WEB" },
        { label: "2012_EE", value: "2012_EE" },
        { label: "2012_WEB", value: "2012_WEB" },
        { label: "2008_EE", value: "2008_EE" },
        { label: "2008_WEB", value: "2008_WEB" }
      ],
      PostgreSQL: [
        { label: "9.5", value: "9.5" },
        { label: "9.6", value: "9.6" },
        { label: "10", value: "10" },
        { label: "11", value: "11" }
      ]
    };
    const replicationModeAsync = (formItem, formInstance) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(replicationModeOptions[formInstance.ctx.modelRef.engine] || []);
        }, 1e3);
      });
    };
    const engineVersionOptionsAsync = (formItem, formInstance) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(engineVersionOptions[formInstance.ctx.modelRef.engine] || []);
        }, 1e3);
      });
    };
    const formSchema = vue.ref({
      formItem: [
        {
          type: "radio",
          label: "\u6570\u636E\u5E93\u5F15\u64CE",
          prop: "engine",
          span: 24,
          options: [
            { value: "MySQL", label: "MySQL" },
            { value: "PostgreSQL", label: "PostgreSQL" },
            { value: "SQLServer", label: "SQLServer" }
          ],
          value: "MySQL",
          eventObject: {
            async change(data2) {
              const cur = await dynamicForm.value.loadOptions("engineVersion");
              formModel.value["engineVersion"] = cur.options[0].value;
              const cur1 = await dynamicForm.value.loadOptions("replicationMode");
              formModel.value["replicationMode"] = cur1.options[0].value;
            }
          }
        },
        {
          type: "radio",
          label: "\u6570\u636E\u5E93\u7248\u672C",
          prop: "engineVersion",
          span: 24,
          options: [],
          asyncOptions: engineVersionOptionsAsync,
          value: "5.6"
        },
        {
          type: "radio",
          label: "\u540C\u6B65\u53C2\u6570",
          prop: "replicationMode",
          span: 24,
          asyncOptions: replicationModeAsync,
          value: "async"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdForm = vue.resolveComponent("CurdForm");
      _push(`<!--[--><h2 id="\u7EA7\u8054\u5F02\u6B65\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u7EA7\u8054\u5F02\u6B65\u6570\u636E" aria-hidden="true">#</a> \u7EA7\u8054\u5F02\u6B65\u6570\u636E</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>curdform\u5B9E\u4F8B\u63D0\u4F9B<code>loadOptions</code>\u51FD\u6570\uFF0C\u7528\u6765\u91CD\u65B0\u8C03\u7528\u67D0\u4E2AformItem\u7684<code>asyncOptions</code>\u5F02\u6B65\u51FD\u6570\u3002\u8981\u6C42<code>asyncOptions</code>\u5FC5\u987B\u914D\u7F6E\uFF0C\u5426\u5219\u4F1A\u51FA\u9519\u3002</p></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdForm, {
        ref_key: "dynamicForm",
        ref: dynamicForm,
        modelValue: formModel.value,
        "onUpdate:modelValue": ($event) => formModel.value = $event,
        "form-schema": formSchema.value
      }, null, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> formModel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> dynamicForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> replicationModeOptions <span class="token operator">=</span>  <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5F02\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;semisync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5F02\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;sync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;sync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> engineVersionOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;5.7&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;5.7&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;8.0&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;8.0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2017_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2017_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2017_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2017_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2014_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2014_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2014_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2014_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2016_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2016_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2016_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2016_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2012_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2012_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2012_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2012_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2008_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2008_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2008_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2008_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;9.5&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;9.5&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;9.6&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;9.6&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;10&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;11&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">replicationModeAsync</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formItem<span class="token punctuation">,</span> formInstance</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>replicationModeOptions<span class="token punctuation">[</span>formInstance<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>modelRef<span class="token punctuation">.</span>engine<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">engineVersionOptionsAsync</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">formItem<span class="token punctuation">,</span> formInstance</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
      <span class="token function">resolve</span><span class="token punctuation">(</span>engineVersionOptions<span class="token punctuation">[</span>formInstance<span class="token punctuation">.</span>ctx<span class="token punctuation">.</span>modelRef<span class="token punctuation">.</span>engine<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token number">1000</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93\u5F15\u64CE&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;engine&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;PostgreSQL&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;PostgreSQL&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;SQLServer&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;SQLServer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">,</span>
      eventObject<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token keyword">async</span> <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">const</span> cur <span class="token operator">=</span> <span class="token keyword">await</span> dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">loadOptions</span><span class="token punctuation">(</span><span class="token string">&#39;engineVersion&#39;</span><span class="token punctuation">)</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">&quot;engineVersion&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

          <span class="token keyword">const</span> cur1 <span class="token operator">=</span> <span class="token keyword">await</span> dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">loadOptions</span><span class="token punctuation">(</span><span class="token string">&#39;replicationMode&#39;</span><span class="token punctuation">)</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">&quot;replicationMode&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur1<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93\u7248\u672C&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;engineVersion&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span> engineVersionOptionsAsync<span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65\u53C2\u6570&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;replicationMode&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      asyncOptions<span class="token operator">:</span>replicationModeAsync<span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/options/cascade-async.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var cascadeAsync_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$u
});
const _sfc_main$t = {
  __ssrInlineRender: true,
  setup(__props) {
    const formModel = vue.ref({});
    const replicationModeOptions = {
      MySQL: [
        { label: "\u5F02\u6B65", value: "async" },
        { label: "\u540C\u6B65", value: "semisync" }
      ],
      PostgreSQL: [
        { label: "\u5F02\u6B65", value: "async" },
        { label: "\u540C\u6B65", value: "sync" }
      ],
      SQLServer: [{ label: "\u540C\u6B65", value: "sync" }]
    };
    const engineVersionOptions = {
      MySQL: [
        { label: "5.6", value: "5.6" },
        { label: "5.7", value: "5.7" },
        { label: "8.0", value: "8.0" }
      ],
      SQLServer: [
        { label: "2017_EE", value: "2017_EE" },
        { label: "2017_WEB", value: "2017_WEB" },
        { label: "2014_EE", value: "2014_EE" },
        { label: "2014_WEB", value: "2014_WEB" },
        { label: "2016_EE", value: "2016_EE" },
        { label: "2016_WEB", value: "2016_WEB" },
        { label: "2012_EE", value: "2012_EE" },
        { label: "2012_WEB", value: "2012_WEB" },
        { label: "2008_EE", value: "2008_EE" },
        { label: "2008_WEB", value: "2008_WEB" }
      ],
      PostgreSQL: [
        { label: "9.5", value: "9.5" },
        { label: "9.6", value: "9.6" },
        { label: "10", value: "10" },
        { label: "11", value: "11" }
      ]
    };
    const formSchema = vue.ref({
      formItem: [
        {
          type: "radio",
          label: "\u6570\u636E\u5E93\u5F15\u64CE",
          prop: "engine",
          span: 24,
          options: [
            { value: "MySQL", label: "MySQL" },
            { value: "PostgreSQL", label: "PostgreSQL" },
            { value: "SQLServer", label: "SQLServer" }
          ],
          value: "MySQL",
          eventObject: {
            change(data2) {
              const cur = formSchema.value.formItem.find((a) => a.prop == "engineVersion");
              cur.options = engineVersionOptions[data2];
              formModel.value["engineVersion"] = cur.options[0].value;
              const cur1 = formSchema.value.formItem.find((a) => a.prop == "replicationMode");
              cur1.options = engineVersionOptions[data2];
              formModel.value["replicationMode"] = cur1.options[0].value;
            }
          }
        },
        {
          type: "radio",
          label: "\u6570\u636E\u5E93\u7248\u672C",
          prop: "engineVersion",
          span: 24,
          options: engineVersionOptions["MySQL"],
          value: "5.6"
        },
        {
          type: "radio",
          label: "\u540C\u6B65\u53C2\u6570",
          prop: "replicationMode",
          span: 24,
          options: replicationModeOptions["MySQL"],
          value: "async"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdForm = vue.resolveComponent("CurdForm");
      _push(`<!--[--><h2 id="\u666E\u901A\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7528\u6CD5" aria-hidden="true">#</a> \u666E\u901A\u7528\u6CD5</h2><div class="custom-container tip"><p class="custom-container-title">\u63D0\u793A</p><p>\u901A\u8FC7\u914D\u7F6E<code>eventObject</code>\u7684\u81EA\u5B9A\u4E49\u4E8B\u4EF6\u7684<code>change</code>\u53EF\u5B9E\u73B0\u7EA7\u8054\u63A7\u5236\uFF0C\u6CE8\u610F\u521D\u59CB\u503C\u4EE5\u53CA\u5224\u7A7A\u95EE\u9898\u3002</p></div>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdForm, {
        ref: "dynamicForm",
        modelValue: formModel.value,
        "onUpdate:modelValue": ($event) => formModel.value = $event,
        "form-schema": formSchema.value
      }, null, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">const</span> formModel <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> replicationModeOptions <span class="token operator">=</span>  <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5F02\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;semisync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5F02\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;sync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;sync&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> engineVersionOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  MySQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;5.7&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;5.7&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;8.0&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;8.0&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  SQLServer<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2017_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2017_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2017_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2017_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2014_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2014_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2014_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2014_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2016_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2016_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2016_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2016_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2012_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2012_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2012_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2012_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2008_EE&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2008_EE&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;2008_WEB&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;2008_WEB&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  PostgreSQL<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;9.5&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;9.5&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;9.6&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;9.6&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;10&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> label<span class="token operator">:</span> <span class="token string">&quot;11&quot;</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">&quot;11&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93\u5F15\u64CE&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;engine&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span><span class="token punctuation">[</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;PostgreSQL&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;PostgreSQL&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>value<span class="token operator">:</span> <span class="token string">&quot;SQLServer&quot;</span><span class="token punctuation">,</span>label<span class="token operator">:</span> <span class="token string">&quot;SQLServer&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">,</span>
      eventObject<span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token function">change</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">const</span> cur <span class="token operator">=</span> formSchema<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formItem<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token operator">=&gt;</span>a<span class="token punctuation">.</span>prop<span class="token operator">==</span><span class="token string">&#39;engineVersion&#39;</span><span class="token punctuation">)</span>
          cur<span class="token punctuation">.</span>options <span class="token operator">=</span> engineVersionOptions<span class="token punctuation">[</span>data<span class="token punctuation">]</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">&quot;engineVersion&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

          <span class="token keyword">const</span> cur1 <span class="token operator">=</span> formSchema<span class="token punctuation">.</span>value<span class="token punctuation">.</span>formItem<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">a</span><span class="token operator">=&gt;</span>a<span class="token punctuation">.</span>prop<span class="token operator">==</span><span class="token string">&#39;replicationMode&#39;</span><span class="token punctuation">)</span>
          cur1<span class="token punctuation">.</span>options <span class="token operator">=</span> engineVersionOptions<span class="token punctuation">[</span>data<span class="token punctuation">]</span>
          formModel<span class="token punctuation">.</span>value<span class="token punctuation">[</span><span class="token string">&quot;replicationMode&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> cur1<span class="token punctuation">.</span>options<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>value

        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u6570\u636E\u5E93\u7248\u672C&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;engineVersion&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span> engineVersionOptions<span class="token punctuation">[</span><span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;5.6&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> 
      type<span class="token operator">:</span> <span class="token string">&quot;radio&quot;</span><span class="token punctuation">,</span> 
      label<span class="token operator">:</span> <span class="token string">&quot;\u540C\u6B65\u53C2\u6570&quot;</span><span class="token punctuation">,</span>
      prop<span class="token operator">:</span> <span class="token string">&quot;replicationMode&quot;</span><span class="token punctuation">,</span> 
      span<span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span>
      options<span class="token operator">:</span>replicationModeOptions<span class="token punctuation">[</span><span class="token string">&quot;MySQL&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      value<span class="token operator">:</span> <span class="token string">&quot;async&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/options/cascade.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var cascade_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$t
});
const _sfc_main$s = {
  __ssrInlineRender: true,
  setup(__props) {
    const columns2 = vue.ref([
      { prop: "prop", label: "\u5C5E\u6027" },
      { prop: "desc", label: "\u8BF4\u660E" },
      { prop: "type", label: "\u7C7B\u578B" },
      { prop: "opValue", label: "\u53EF\u9009\u503C" },
      { prop: "deValue", label: "\u9ED8\u8BA4\u503C" }
    ]);
    const option = {
      hideMenu: true,
      hideOperation: true,
      hideBtnAdd: true,
      pageHide: true
    };
    const data2 = vue.ref([
      { prop: "model", desc: "\u8868\u5355\u6570\u636E\u5BF9\u8C61", type: "object", opValue: "--", deValue: "--" },
      { prop: "inline", desc: "\u884C\u5185\u8868\u5355\u6A21\u5F0F", type: "boolean", opValue: "--", deValue: "false" }
    ]);
    const data1 = vue.ref([
      { prop: "prop", desc: "\u8868\u5355\u57DFmodel\u5B57\u6BB5", type: "string", opValue: "--", deValue: "--" },
      { prop: "label", desc: "\u6807\u7B7E", type: "string", opValue: "--", deValue: "--" },
      { prop: "label-width", desc: "\u6807\u7B7E\u7684\u5BBD\u5EA6", type: "string|number", opValue: "--", deValue: "--" },
      { prop: "label", desc: "\u6807\u7B7E", type: "string", opValue: "--", deValue: "--" },
      { prop: "type", desc: "\u8868\u5355\u7C7B\u578B", type: "string", opValue: "input, select, radio, checkbox, input-number, input-range, switch, file, input-password, date-picker, color-picker, value", deValue: "--" },
      { prop: "span", desc: "\u6392\u7248\u4E2D\u5360\u4E00\u884C\u7684\u6BD4\u4F8B", type: "number", opValue: "1-24", deValue: "24" },
      { prop: "value", desc: "\u521D\u59CB\u503C", type: "string|number|array", opValue: "--", deValue: "--" },
      { prop: "options", desc: "\u9009\u9879\u6570\u7EC4", type: "array", opValue: "--", deValue: "--" },
      { prop: "asyncOptions", desc: "\u5F02\u6B65\u83B7\u53D6\u9009\u9879\u7684\u51FD\u6570\uFF0C\u9700\u8FD4\u56DEpromise", type: "function", opValue: "--", deValue: "--" },
      { prop: "props", desc: "\u7ED1\u5B9A\u5728\u8F93\u5165\u7EC4\u4EF6\u4E0A\u7684\u5C5E\u6027", type: "object", opValue: "--", deValue: "--" },
      { prop: "eventObject", desc: "\u7ED1\u5B9A\u5728\u7EC4\u4EF6\u4E0A\u7684\u4E8B\u4EF6", type: "object", opValue: "blur,click,change,focus", deValue: "--" }
    ]);
    const data22 = vue.ref([
      { prop: "action", desc: "\u4E0A\u4F20\u5730\u5740", type: "string", opValue: "--", deValue: "--" },
      { prop: "maxsize", desc: "\u6587\u4EF6\u5927\u5C0F\u6700\u5927\u503C", type: "number", opValue: "--", deValue: "--" },
      { prop: "fileType", desc: "\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B", type: "string", opValue: "image/video", deValue: "image" },
      { prop: "success", desc: "\u4E0A\u4F20\u6210\u529F\u7684\u56DE\u8C03", type: "(res: AxiosResponse,file: File)=>{}", opValue: "--", deValue: "--" }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdTable = vue.resolveComponent("CurdTable");
      _push(`<!--[--><p>Form\u5C5E\u6027</p>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
        data: data2.value,
        columns: columns2.value,
        option
      }, null, _parent));
      _push(`<p>FormItem \u5C5E\u6027</p>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
        data: data1.value,
        columns: columns2.value,
        option
      }, null, _parent));
      _push(`<p>type\u4E3Afile\u7684FormItem \u5C5E\u6027</p>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
        data: data22.value,
        columns: columns2.value,
        option
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/props/base.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var base_html$5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$s
});
const _sfc_main$r = {
  __ssrInlineRender: true,
  setup(__props) {
    var validatePass1 = (rule, value, callback) => {
      if (value !== 0 && !value) {
        callback(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801"));
      } else {
        callback();
      }
    };
    const formSchema = {
      formItem: [
        { type: "input", label: "\u7528\u6237\u540D", prop: "username", span: 24 },
        { type: "input", label: "\u59D3\u540D", prop: "name", span: 24 },
        { type: "input-password", label: "\u5BC6\u7801", prop: "password", span: 24 }
      ],
      rules: {
        username: [{ required: true, message: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A", trigger: "trigger" }],
        password: [{ validator: validatePass1, trigger: "blur" }]
      }
    };
    const fields = {};
    const dynamicForm = vue.ref();
    const instance = vue.getCurrentInstance();
    const submit = () => {
      dynamicForm.value.validate((valid) => {
        if (valid) {
          instance.appContext.config.globalProperties.$message({
            type: "success",
            message: "\u63D0\u4EA4\u6210\u529F"
          });
        }
      });
    };
    const clear = () => {
      dynamicForm.value.schemaFormRef.resetFields();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdForm = vue.resolveComponent("CurdForm");
      const _component_el_button = vue.resolveComponent("el-button");
      _push(`<!--[--><h2 id="\u666E\u901A\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u666E\u901A\u7528\u6CD5" aria-hidden="true">#</a> \u666E\u901A\u7528\u6CD5</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdForm, {
        modelValue: _ctx.formModel,
        "onUpdate:modelValue": ($event) => _ctx.formModel = $event,
        class: "center-form",
        ref_key: "dynamicForm",
        ref: dynamicForm,
        fields,
        "form-schema": formSchema,
        "label-width": formSchema.labelWidth || "110px"
      }, {
        "operate-button": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, { type: "primary" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u63D0 \u4EA4`);
                } else {
                  return [
                    vue.createTextVNode("\u63D0 \u4EA4")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, { type: "default" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6E05 \u7A7A`);
                } else {
                  return [
                    vue.createTextVNode("\u6E05 \u7A7A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { style: { "text-align": "center" } }, [
                vue.createVNode(_component_el_button, {
                  type: "primary",
                  onClick: submit
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u63D0 \u4EA4")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_button, {
                  type: "default",
                  onClick: clear
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u6E05 \u7A7A")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formModel<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fields<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema.labelWidth || <span class="token punctuation">&#39;</span>110px<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>operate-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0 \u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6E05 \u7A7A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">var</span> <span class="token function-variable function">validatePass1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> formSchema <span class="token operator">=</span> <span class="token punctuation">{</span>
  formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input-password&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">24</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  rules<span class="token operator">:</span><span class="token punctuation">{</span>
    username<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>message<span class="token operator">:</span><span class="token string">&quot;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">&quot;trigger&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    password<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> validator<span class="token operator">:</span> validatePass1<span class="token punctuation">,</span> trigger<span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fields <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dynamicForm <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">submit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      instance<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
        message<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4\u6210\u529F&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">clear</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  dynamicForm<span class="token punctuation">.</span>value<span class="token punctuation">.</span>schemaFormRef<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/rules/base.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var base_html$4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$r
});
const _sfc_main$q = {
  __ssrInlineRender: true,
  setup(__props) {
    vue.ref({});
    var validatePass = (rule, value, callback) => {
      if (value !== 0 && !value) {
        callback(new Error("\u8BF7\u8F93\u5165\u5BC6\u7801"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value !== 0 && !value) {
        callback(new Error("\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801"));
      } else if (value !== this.obj.password) {
        callback(new Error("\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!"));
      } else {
        callback();
      }
    };
    const formSchema1 = {
      formItem: [
        { type: "input", label: "\u7528\u6237\u540D", prop: "username", span: 12 },
        { type: "input", label: "\u59D3\u540D", prop: "name", span: 12 },
        { type: "input-password", label: "\u5BC6\u7801", prop: "password", span: 12 },
        { type: "input-password", label: "\u786E\u8BA4\u5BC6\u7801", prop: "repassword", span: 12 }
      ],
      rules: {
        username: [{ required: true, message: "\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A", trigger: "trigger" }],
        password: [{ validator: validatePass, trigger: "blur" }],
        repassword: [{ validator: validatePass2, trigger: "blur" }]
      }
    };
    const fields1 = {};
    const dynamicForm1 = vue.ref();
    const instance1 = vue.getCurrentInstance();
    const submit1 = () => {
      dynamicForm1.value.validate((valid) => {
        if (valid) {
          instance1.appContext.config.globalProperties.$message({
            type: "success",
            message: "\u63D0\u4EA4\u6210\u529F"
          });
        }
      });
    };
    const clear1 = () => {
      dynamicForm1.value.schemaFormRef.resetFields();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdForm = vue.resolveComponent("CurdForm");
      const _component_el_button = vue.resolveComponent("el-button");
      _push(`<!--[--><h2 id="\u81EA\u5B9A\u4E49\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u9A8C\u8BC1" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u9A8C\u8BC1</h2>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdForm, {
        class: "center-form",
        ref_key: "dynamicForm1",
        ref: dynamicForm1,
        fields: fields1,
        "form-schema": formSchema1,
        "label-width": formSchema1.labelWidth || "110px"
      }, {
        "operate-button": vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, { type: "primary" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u63D0 \u4EA4`);
                } else {
                  return [
                    vue.createTextVNode("\u63D0 \u4EA4")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, { type: "default" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u6E05 \u7A7A`);
                } else {
                  return [
                    vue.createTextVNode("\u6E05 \u7A7A")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { style: { "text-align": "center" } }, [
                vue.createVNode(_component_el_button, {
                  type: "primary",
                  onClick: submit1
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u63D0 \u4EA4")
                  ]),
                  _: 1
                }),
                vue.createVNode(_component_el_button, {
                  type: "default",
                  onClick: clear1
                }, {
                  default: vue.withCtx(() => [
                    vue.createTextVNode("\u6E05 \u7A7A")
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CurdForm</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>center-form<span class="token punctuation">&quot;</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>dynamicForm1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:fields</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fields1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:form-schema</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:label-width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>formSchema1.labelWidth || <span class="token punctuation">&#39;</span>110px<span class="token punctuation">&#39;</span><span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name"><span class="token namespace">v-slot:</span>operate-button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value css language-css"><span class="token property">text-align</span><span class="token punctuation">:</span> center</span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u63D0 \u4EA4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>el-button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>default<span class="token punctuation">&quot;</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>clear1<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6E05 \u7A7A<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>el-button</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CurdForm</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>


<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref<span class="token punctuation">,</span> getCurrentInstance <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vue&quot;</span>
<span class="token keyword">var</span> <span class="token function-variable function">validatePass</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u8F93\u5165\u5BC6\u7801&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> <span class="token function-variable function">validatePass2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">rule<span class="token punctuation">,</span> value<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">!==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>obj<span class="token punctuation">.</span>password<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E24\u6B21\u8F93\u5165\u5BC6\u7801\u4E0D\u4E00\u81F4!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">callback</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
            
<span class="token keyword">const</span> formSchema1 <span class="token operator">=</span> <span class="token punctuation">{</span>
    formItem<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u7528\u6237\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;username&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u59D3\u540D&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input-password&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u5BC6\u7801&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token string">&quot;input-password&quot;</span><span class="token punctuation">,</span> label<span class="token operator">:</span> <span class="token string">&quot;\u786E\u8BA4\u5BC6\u7801&quot;</span><span class="token punctuation">,</span> prop<span class="token operator">:</span> <span class="token string">&quot;repassword&quot;</span><span class="token punctuation">,</span> span<span class="token operator">:</span> <span class="token number">12</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    rules<span class="token operator">:</span><span class="token punctuation">{</span>
        username<span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>required<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>message<span class="token operator">:</span><span class="token string">&quot;\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A&quot;</span><span class="token punctuation">,</span>trigger<span class="token operator">:</span> <span class="token string">&quot;trigger&quot;</span><span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        password<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> validator<span class="token operator">:</span> validatePass<span class="token punctuation">,</span> trigger<span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        repassword<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> validator<span class="token operator">:</span> validatePass2<span class="token punctuation">,</span> trigger<span class="token operator">:</span> <span class="token string">&#39;blur&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> fields1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">const</span> dynamicForm1 <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> instance1 <span class="token operator">=</span> <span class="token function">getCurrentInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token function-variable function">submit1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    dynamicForm1<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">valid</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>valid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        instance1<span class="token punctuation">.</span>appContext<span class="token punctuation">.</span>config<span class="token punctuation">.</span>globalProperties<span class="token punctuation">.</span><span class="token function">$message</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            type<span class="token operator">:</span> <span class="token string">&quot;success&quot;</span><span class="token punctuation">,</span>
            message<span class="token operator">:</span> <span class="token string">&quot;\u63D0\u4EA4\u6210\u529F&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token function-variable function">clear1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    dynamicForm1<span class="token punctuation">.</span>value<span class="token punctuation">.</span>schemaFormRef<span class="token punctuation">.</span><span class="token function">resetFields</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><!--]-->`);
    };
  }
};
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/form/rules/validator.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var validator_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$q
});
const _sfc_main$p = {
  __ssrInlineRender: true,
  setup(__props) {
    const data2 = [
      {
        name: "\u5F20\u4E09",
        img: "https://www.talklee.com/api/bing?rand=true"
      },
      {
        name: "\u674E\u56DB",
        img: "https://www.talklee.com/api/bing?rand=true"
      }
    ];
    const columns2 = [
      { prop: "name", label: "\u59D3\u540D" },
      { prop: "img", label: "\u5355\u56FE", form: { component: "file" } }
    ];
    const option = {
      menuWidth: 200,
      menuBtnTitle: "\u81EA\u5B9A\u4E49\u540D\u79F0"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdTable = vue.resolveComponent("CurdTable");
      const _component_el_tag = vue.resolveComponent("el-tag");
      _push(`<!--[--><h4 id="\u56FE\u7247\u663E\u793A\u4E0E\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u663E\u793A\u4E0E\u4E0A\u4F20" aria-hidden="true">#</a> \u56FE\u7247\u663E\u793A\u4E0E\u4E0A\u4F20</h4>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
        data: data2,
        columns: columns2,
        option,
        height: "200px"
      }, {
        nameHeader: vue.withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_el_tag, null, {
              default: vue.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(scope)}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(scope), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_el_tag, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(scope), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/table/file/image.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var image_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$p
});
const _sfc_main$o = {
  __ssrInlineRender: true,
  setup(__props) {
    const data2 = [
      {
        name: "\u5F20\u4E09",
        sex: "\u7537"
      },
      {
        name: "\u674E\u56DB",
        sex: "\u5973"
      },
      {
        name: "\u738B\u4E94",
        sex: "\u5973"
      },
      {
        name: "\u8D75\u516D",
        sex: "\u7537"
      }
    ];
    const columns2 = [
      { prop: "name", label: "\u59D3\u540D" },
      { prop: "sex", label: "\u6027\u522B" }
    ];
    const option = {
      menuWidth: 200,
      menuBtnTitle: "\u81EA\u5B9A\u4E49\u540D\u79F0"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdTable = vue.resolveComponent("CurdTable");
      const _component_el_tag = vue.resolveComponent("el-tag");
      _push(`<!--[--><h4 id="\u81EA\u5B9A\u4E49\u5934\u90E8" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5934\u90E8" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5934\u90E8</h4>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
        data: data2,
        columns: columns2,
        option,
        height: "200px"
      }, {
        nameHeader: vue.withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_el_tag, null, {
              default: vue.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${serverRenderer.ssrInterpolate(scope.column)}`);
                } else {
                  return [
                    vue.createTextVNode(vue.toDisplayString(scope.column), 1)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_el_tag, null, {
                default: vue.withCtx(() => [
                  vue.createTextVNode(vue.toDisplayString(scope.column), 1)
                ]),
                _: 2
              }, 1024)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/table/slots/header.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var header_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$o
});
const _sfc_main$n = {
  __ssrInlineRender: true,
  setup(__props) {
    const data2 = [
      {
        name: "\u5F20\u4E09",
        sex: "\u7537"
      },
      {
        name: "\u674E\u56DB",
        sex: "\u5973"
      },
      {
        name: "\u738B\u4E94",
        sex: "\u5973"
      },
      {
        name: "\u8D75\u516D",
        sex: "\u7537"
      }
    ];
    const columns2 = [
      { prop: "name", label: "\u59D3\u540D" },
      { prop: "sex", label: "\u6027\u522B" }
    ];
    const option = {
      menuWidth: 200
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdTable = vue.resolveComponent("CurdTable");
      const _component_el_button = vue.resolveComponent("el-button");
      _push(`<!--[--><h4 id="\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6309\u94AE" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6309\u94AE" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u5DE6\u4FA7\u6309\u94AE</h4>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
        ref: "table",
        data: data2,
        columns: columns2,
        option,
        height: "200px"
      }, {
        menuLeft: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, {
              type: "danger",
              size: "mini",
              plain: ""
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u65B0\u589E`);
                } else {
                  return [
                    vue.createTextVNode("\u65B0\u589E")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_el_button, {
                type: "danger",
                size: "mini",
                plain: "",
                onClick: vue.withModifiers(($event) => _ctx.$refs.table.rowAdd(), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u65B0\u589E")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/table/slots/menu-left.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var menuLeft_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$n
});
const _sfc_main$m = {
  __ssrInlineRender: true,
  setup(__props) {
    const data2 = [
      {
        name: "\u5F20\u4E09",
        sex: "\u7537"
      },
      {
        name: "\u674E\u56DB",
        sex: "\u5973"
      },
      {
        name: "\u738B\u4E94",
        sex: "\u5973"
      },
      {
        name: "\u8D75\u516D",
        sex: "\u7537"
      }
    ];
    const columns2 = [
      { prop: "name", label: "\u59D3\u540D" },
      { prop: "sex", label: "\u6027\u522B" }
    ];
    const option = {
      menuWidth: 200,
      menuBtnTitle: "\u81EA\u5B9A\u4E49\u540D\u79F0"
    };
    const tip1 = (scope) => {
      console.log("tip1", scope);
    };
    const tip2 = (scope) => {
      console.log("tip2", scope);
    };
    const tip3 = (scope) => {
      console.log("tip3", scope);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CurdTable = vue.resolveComponent("CurdTable");
      const _component_el_dropdown_item = vue.resolveComponent("el-dropdown-item");
      const _component_el_button = vue.resolveComponent("el-button");
      _push(`<!--[--><h4 id="\u81EA\u5B9A\u4E49\u64CD\u4F5C\u83DC\u5355" tabindex="-1"><a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u64CD\u4F5C\u83DC\u5355" aria-hidden="true">#</a> \u81EA\u5B9A\u4E49\u64CD\u4F5C\u83DC\u5355</h4>`);
      _push(serverRenderer.ssrRenderComponent(_component_CurdTable, {
        data: data2,
        columns: columns2,
        option,
        height: "200px"
      }, {
        menuBtn: vue.withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_el_dropdown_item, null, {
              default: vue.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u81EA\u5B9A\u4E49\u6309\u94AE1`);
                } else {
                  return [
                    vue.createTextVNode("\u81EA\u5B9A\u4E49\u6309\u94AE1")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(serverRenderer.ssrRenderComponent(_component_el_dropdown_item, { divided: "" }, {
              default: vue.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u81EA\u5B9A\u4E49\u6309\u94AE2`);
                } else {
                  return [
                    vue.createTextVNode("\u81EA\u5B9A\u4E49\u6309\u94AE2")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_el_dropdown_item, {
                onClick: vue.withModifiers(($event) => tip1(scope), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u81EA\u5B9A\u4E49\u6309\u94AE1")
                ]),
                _: 2
              }, 1032, ["onClick"]),
              vue.createVNode(_component_el_dropdown_item, {
                divided: "",
                onClick: vue.withModifiers(($event) => tip2(scope), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u81EA\u5B9A\u4E49\u6309\u94AE2")
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        menu: vue.withCtx((scope, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_el_button, {
              style: { "margin-left": "10px" },
              type: "text",
              icon: vue.unref(iconsVue.User)
            }, {
              default: vue.withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u81EA\u5B9A\u4E49\u6309\u94AE`);
                } else {
                  return [
                    vue.createTextVNode("\u81EA\u5B9A\u4E49\u6309\u94AE")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_el_button, {
                style: { "margin-left": "10px" },
                type: "text",
                icon: vue.unref(iconsVue.User),
                onClick: vue.withModifiers(($event) => tip3(scope), ["stop"])
              }, {
                default: vue.withCtx(() => [
                  vue.createTextVNode("\u81EA\u5B9A\u4E49\u6309\u94AE")
                ]),
                _: 2
              }, 1032, ["icon", "onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/table/slots/operation-menu.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var operationMenu_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$m
});
const _sfc_main$l = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../pages/404.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var _404_html$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$1]]);
var _404_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _404_html$1
});
const data$g = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "README.md"
};
var index_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$g
});
const data$f = {
  "key": "v-14948c92",
  "path": "/form/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u57FA\u7840\u8868\u5355",
      "slug": "\u57FA\u7840\u8868\u5355",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/README.md"
};
var index_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$f
});
const data$e = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5B89\u88C5",
      "slug": "\u5B89\u88C5",
      "children": []
    },
    {
      "level": 2,
      "title": "\u4F7F\u7528",
      "slug": "\u4F7F\u7528",
      "children": [
        {
          "level": 3,
          "title": "\u8868\u683C",
          "slug": "\u8868\u683C",
          "children": []
        },
        {
          "level": 3,
          "title": "\u8868\u5355",
          "slug": "\u8868\u5355",
          "children": []
        },
        {
          "level": 3,
          "title": "\u5F39\u7A97\u8868\u5355",
          "slug": "\u5F39\u7A97\u8868\u5355",
          "children": []
        }
      ]
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "guide/README.md"
};
var index_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$e
});
const data$d = {
  "key": "v-d5d75b4c",
  "path": "/table/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u57FA\u7840\u7528\u6CD5",
      "slug": "\u57FA\u7840\u7528\u6CD5",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "table/README.md"
};
var index_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$d
});
const data$c = {
  "key": "v-1f14d7c4",
  "path": "/form/events/base.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7EC4\u4EF6\u4E8B\u4EF6",
      "slug": "\u7EC4\u4EF6\u4E8B\u4EF6",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/events/base.md"
};
var base_html$3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$c
});
const data$b = {
  "key": "v-f0935800",
  "path": "/form/options/async.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u5F02\u6B65\u6570\u636E",
      "slug": "\u5F02\u6B65\u6570\u636E",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/options/async.md"
};
var async_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$b
});
const data$a = {
  "key": "v-1404dc25",
  "path": "/form/options/base.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u666E\u901A\u7528\u6CD5",
      "slug": "\u666E\u901A\u7528\u6CD5",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/options/base.md"
};
var base_html$2 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$a
});
const data$9 = {
  "key": "v-3d59248e",
  "path": "/form/options/cascade-async.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u7EA7\u8054\u5F02\u6B65\u6570\u636E",
      "slug": "\u7EA7\u8054\u5F02\u6B65\u6570\u636E",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/options/cascade-async.md"
};
var cascadeAsync_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$9
});
const data$8 = {
  "key": "v-41e9b608",
  "path": "/form/options/cascade.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u666E\u901A\u7528\u6CD5",
      "slug": "\u666E\u901A\u7528\u6CD5",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/options/cascade.md"
};
var cascade_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$8
});
const data$7 = {
  "key": "v-15f8d3f7",
  "path": "/form/props/base.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/props/base.md"
};
var base_html$1 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$7
});
const data$6 = {
  "key": "v-4f1dd6be",
  "path": "/form/rules/base.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u666E\u901A\u7528\u6CD5",
      "slug": "\u666E\u901A\u7528\u6CD5",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/rules/base.md"
};
var base_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$6
});
const data$5 = {
  "key": "v-8085571e",
  "path": "/form/rules/validator.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "\u81EA\u5B9A\u4E49\u9A8C\u8BC1",
      "slug": "\u81EA\u5B9A\u4E49\u9A8C\u8BC1",
      "children": []
    }
  ],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "form/rules/validator.md"
};
var validator_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$5
});
const data$4 = {
  "key": "v-3dcc7d37",
  "path": "/table/file/image.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "table/file/image.md"
};
var image_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$4
});
const data$3 = {
  "key": "v-11f46678",
  "path": "/table/slots/header.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "table/slots/header.md"
};
var header_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$3
});
const data$2 = {
  "key": "v-131b96b8",
  "path": "/table/slots/menu-left.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "table/slots/menu-left.md"
};
var menuLeft_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$2
});
const data$1 = {
  "key": "v-5cddbe00",
  "path": "/table/slots/operation-menu.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {},
  "excerpt": "",
  "headers": [],
  "git": {
    "updatedTime": 164093765e4,
    "contributors": [
      {
        "name": "tuchongyang",
        "email": "779311998@qq.com",
        "commits": 1
      }
    ]
  },
  "filePathRelative": "table/slots/operation-menu.md"
};
var operationMenu_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data: data$1
});
const data = {
  "key": "v-3706649a",
  "path": "/404.html",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "layout": "404"
  },
  "excerpt": "",
  "headers": []
};
var _404_html = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  data
});
const _sfc_main$k = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const messages = (_a = themeLocale.value.notFound) != null ? _a : ["Not Found"];
    const getMsg = () => messages[Math.floor(Math.random() * messages.length)];
    const homeLink = (_b = themeLocale.value.home) != null ? _b : routeLocale.value;
    const homeText = (_c = themeLocale.value.backToHome) != null ? _c : "Back to home";
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-container" }, _attrs))}><div class="theme-default-content"><h1>404</h1><blockquote>${serverRenderer.ssrInterpolate(getMsg())}</blockquote>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: vue.unref(homeLink) }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${serverRenderer.ssrInterpolate(vue.unref(homeText))}`);
          } else {
            return [
              vue.createTextVNode(vue.toDisplayString(vue.unref(homeText)), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/404.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var _404 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main$k
});
const _sfc_main$j = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Content = vue.resolveComponent("Content");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "theme-default-content custom" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeContent.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var HomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$i = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (isArray(frontmatter.value.features)) {
        return frontmatter.value.features;
      }
      return [];
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(features).length) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "features" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(features), (feature) => {
          _push(`<div class="feature"><h2>${serverRenderer.ssrInterpolate(feature.title)}</h2><p>${serverRenderer.ssrInterpolate(feature.details)}</p></div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFeatures.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const _sfc_main$h = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const footer = vue.computed(() => frontmatter.value.footer);
    const footerHtml = vue.computed(() => frontmatter.value.footerHtml);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(footer)) {
        _push(`<!--[-->`);
        if (vue.unref(footerHtml)) {
          _push(`<div class="footer">${vue.unref(footer)}</div>`);
        } else {
          _push(`<div class="footer">${serverRenderer.ssrInterpolate(vue.unref(footer))}</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeFooter.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const __default__ = vue.defineComponent({
  inheritAttrs: false
});
const _sfc_main$g = /* @__PURE__ */ vue.defineComponent(__spreadProps(__spreadValues({}, __default__), {
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const { item } = vue.toRefs(props);
    const hasHttpProtocol = vue.computed(() => isLinkHttp(item.value.link));
    const hasNonHttpProtocol = vue.computed(() => isLinkMailto(item.value.link) || isLinkTel(item.value.link));
    const linkTarget = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.target)
        return item.value.target;
      if (hasHttpProtocol.value)
        return "_blank";
      return void 0;
    });
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const isRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocol.value && !isBlankTarget.value);
    const linkRel = vue.computed(() => {
      if (hasNonHttpProtocol.value)
        return void 0;
      if (item.value.rel)
        return item.value.rel;
      if (isBlankTarget.value)
        return "noopener noreferrer";
      return void 0;
    });
    const linkAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      const localeKeys = Object.keys(site.value.locales);
      if (localeKeys.length) {
        return !localeKeys.some((key) => key === item.value.link);
      }
      return item.value.link !== "/";
    });
    const isActiveInSubpath = vue.computed(() => {
      if (!shouldBeActiveInSubpath.value) {
        return false;
      }
      return route.path.startsWith(item.value.link);
    });
    const isActive = vue.computed(() => {
      if (!isRouterLink.value) {
        return false;
      }
      if (item.value.activeMatch) {
        return new RegExp(item.value.activeMatch).test(route.path);
      }
      return isActiveInSubpath.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
      if (vue.unref(isRouterLink)) {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
          class: { "router-link-active": vue.unref(isActive) },
          to: vue.unref(item).link,
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs), {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push2, _parent2, _scopeId);
              _push2(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
              serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "before"),
                vue.createTextVNode(" " + vue.toDisplayString(vue.unref(item).text) + " ", 1),
                vue.renderSlot(_ctx.$slots, "after")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<a${serverRenderer.ssrRenderAttrs(vue.mergeProps({
          class: "external-link",
          href: vue.unref(item).link,
          rel: vue.unref(linkRel),
          target: vue.unref(linkTarget),
          "aria-label": vue.unref(linkAriaLabel)
        }, _ctx.$attrs, _attrs))}>`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
        _push(` ${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(isBlankTarget)) {
          _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
        _push(`</a>`);
      }
    };
  }
}));
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/AutoLink.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const _sfc_main$f = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const isDarkMode = useDarkMode();
    const heroImage = vue.computed(() => {
      if (isDarkMode.value && frontmatter.value.heroImageDark !== void 0) {
        return frontmatter.value.heroImageDark;
      }
      return frontmatter.value.heroImage;
    });
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === null) {
        return null;
      }
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === null) {
        return null;
      }
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const actions = vue.computed(() => {
      if (!isArray(frontmatter.value.actions)) {
        return [];
      }
      return frontmatter.value.actions.map(({ text, link, type = "primary" }) => ({
        text,
        link,
        type
      }));
    });
    const HomeHeroImage = () => {
      if (!heroImage.value)
        return null;
      const img = vue.h("img", {
        src: withBase(heroImage.value),
        alt: heroAlt.value
      });
      if (frontmatter.value.heroImageDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "hero" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(HomeHeroImage, null, null, _parent));
      if (vue.unref(heroText)) {
        _push(`<h1 id="main-title">${serverRenderer.ssrInterpolate(vue.unref(heroText))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(tagline)) {
        _push(`<p class="description">${serverRenderer.ssrInterpolate(vue.unref(tagline))}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(actions).length) {
        _push(`<p class="actions"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(actions), (action) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
            key: action.text,
            class: ["action-button", [action.type]],
            item: action
          }, null, _parent));
        });
        _push(`<!--]--></p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</header>`);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/HomeHero.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const _sfc_main$e = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "home" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$f, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$i, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(HomeContent, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$h, null, null, _parent));
      _push(`</main>`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Home.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const _sfc_main$d = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    const navbarBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const navbarBrandTitle = vue.computed(() => siteLocale.value.title);
    const navbarBrandLogo = vue.computed(() => {
      if (isDarkMode.value && themeLocale.value.logoDark !== void 0) {
        return themeLocale.value.logoDark;
      }
      return themeLocale.value.logo;
    });
    const NavbarBrandLogo = () => {
      if (!navbarBrandLogo.value)
        return null;
      const img = vue.h("img", {
        class: "logo",
        src: withBase(navbarBrandLogo.value),
        alt: navbarBrandTitle.value
      });
      if (themeLocale.value.logoDark === void 0) {
        return img;
      }
      return vue.h(ClientOnly, img);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({ to: vue.unref(navbarBrandLink) }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(NavbarBrandLogo, null, null, _parent2, _scopeId));
            if (vue.unref(navbarBrandTitle)) {
              _push2(`<span class="${serverRenderer.ssrRenderClass([{ "can-hide": vue.unref(navbarBrandLogo) }, "site-name"])}"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(navbarBrandTitle))}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode(NavbarBrandLogo),
              vue.unref(navbarBrandTitle) ? (vue.openBlock(), vue.createBlock("span", {
                key: 0,
                class: ["site-name", { "can-hide": vue.unref(navbarBrandLogo) }]
              }, vue.toDisplayString(vue.unref(navbarBrandTitle)), 3)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarBrand.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const normalizePath = (path) => decodeURI(path).replace(/#.*$/, "").replace(/(index)?\.(md|html)$/, "");
const isActiveLink = (link, route) => {
  if (route.hash === link) {
    return true;
  }
  const currentPath = normalizePath(route.path);
  const targetPath = normalizePath(link);
  return currentPath === targetPath;
};
const isActiveSidebarItem = (item, route) => {
  if (item.link && isActiveLink(item.link, route)) {
    return true;
  }
  if (item.children) {
    return item.children.some((child) => isActiveSidebarItem(child, route));
  }
  return false;
};
const resolveRepoType = (repo) => {
  if (!isLinkHttp(repo) || /github\.com/.test(repo))
    return "GitHub";
  if (/bitbucket\.org/.test(repo))
    return "Bitbucket";
  if (/gitlab\.com/.test(repo))
    return "GitLab";
  if (/gitee\.com/.test(repo))
    return "Gitee";
  return null;
};
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLinkPatterns = ({ docsRepo, editLinkPattern }) => {
  if (editLinkPattern) {
    return editLinkPattern;
  }
  const repoType = resolveRepoType(docsRepo);
  if (repoType !== null) {
    return editLinkPatterns[repoType];
  }
  return null;
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const pattern = resolveEditLinkPatterns({ docsRepo, editLinkPattern });
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, removeLeadingSlash(`${removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const _sfc_main$c = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/DropdownTransition.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const _sfc_main$b = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const { item } = vue.toRefs(props);
    const dropdownAriaLabel = vue.computed(() => item.value.ariaLabel || item.value.text);
    const open = vue.ref(false);
    const route = vueRouter.useRoute();
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item2, arr) => arr[arr.length - 1] === item2;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["navbar-dropdown-wrapper", { open: open.value }]
      }, _attrs))}><button class="navbar-dropdown-title" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="arrow down"></span></button><button class="navbar-dropdown-title-mobile" type="button"${serverRenderer.ssrRenderAttr("aria-label", vue.unref(dropdownAriaLabel))}><span class="title">${serverRenderer.ssrInterpolate(vue.unref(item).text)}</span><span class="${serverRenderer.ssrRenderClass([open.value ? "down" : "right", "arrow"])}"></span></button>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<ul style="${serverRenderer.ssrRenderStyle(open.value ? null : { display: "none" })}" class="navbar-dropdown"${_scopeId}><!--[-->`);
            serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
              _push2(`<li class="navbar-dropdown-item"${_scopeId}>`);
              if (child.children) {
                _push2(`<!--[--><h4 class="navbar-dropdown-subtitle"${_scopeId}>`);
                if (child.link) {
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
                } else {
                  _push2(`<span${_scopeId}>${serverRenderer.ssrInterpolate(child.text)}</span>`);
                }
                _push2(`</h4><ul class="navbar-dropdown-subitem-wrapper"${_scopeId}><!--[-->`);
                serverRenderer.ssrRenderList(child.children, (grandchild) => {
                  _push2(`<li class="navbar-dropdown-subitem"${_scopeId}>`);
                  _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: grandchild }, null, _parent2, _scopeId));
                  _push2(`</li>`);
                });
                _push2(`<!--]--></ul><!--]-->`);
              } else {
                _push2(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: child }, null, _parent2, _scopeId));
              }
              _push2(`</li>`);
            });
            _push2(`<!--]--></ul>`);
          } else {
            return [
              vue.withDirectives(vue.createVNode("ul", { class: "navbar-dropdown" }, [
                (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                  return vue.openBlock(), vue.createBlock("li", {
                    key: child.text,
                    class: "navbar-dropdown-item"
                  }, [
                    child.children ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 0 }, [
                      vue.createVNode("h4", { class: "navbar-dropdown-subtitle" }, [
                        child.link ? (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                          key: 0,
                          item: child,
                          onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && child.children.length === 0 && (open.value = false)
                        }, null, 8, ["item", "onFocusout"])) : (vue.openBlock(), vue.createBlock("span", { key: 1 }, vue.toDisplayString(child.text), 1))
                      ]),
                      vue.createVNode("ul", { class: "navbar-dropdown-subitem-wrapper" }, [
                        (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(child.children, (grandchild) => {
                          return vue.openBlock(), vue.createBlock("li", {
                            key: grandchild.link,
                            class: "navbar-dropdown-subitem"
                          }, [
                            vue.createVNode(_sfc_main$g, {
                              item: grandchild,
                              onFocusout: ($event) => isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                            }, null, 8, ["item", "onFocusout"])
                          ]);
                        }), 128))
                      ])
                    ], 64)) : (vue.openBlock(), vue.createBlock(_sfc_main$g, {
                      key: 1,
                      item: child,
                      onFocusout: ($event) => isLastItemOfArray(child, vue.unref(item).children) && (open.value = false)
                    }, null, 8, ["item", "onFocusout"]))
                  ]);
                }), 128))
              ], 512), [
                [vue.vShow, open.value]
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarDropdown.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useNavbarSelectLanguage = () => {
      const router = vueRouter.useRouter();
      const routeLocale = useRouteLocale();
      const siteLocale = useSiteLocaleData();
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => {
        var _a, _b;
        const localePaths = Object.keys(siteLocale.value.locales);
        if (localePaths.length < 2) {
          return [];
        }
        const currentPath = router.currentRoute.value.path;
        const currentFullPath = router.currentRoute.value.fullPath;
        const languageDropdown = {
          text: (_a = themeLocale.value.selectLanguageText) != null ? _a : "unknown language",
          ariaLabel: (_b = themeLocale.value.selectLanguageAriaLabel) != null ? _b : "unkown language",
          children: localePaths.map((targetLocalePath) => {
            var _a2, _b2, _c, _d, _e, _f;
            const targetSiteLocale = (_b2 = (_a2 = siteLocale.value.locales) == null ? void 0 : _a2[targetLocalePath]) != null ? _b2 : {};
            const targetThemeLocale = (_d = (_c = themeLocale.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
            const targetLang = `${targetSiteLocale.lang}`;
            const text = (_e = targetThemeLocale.selectLanguageName) != null ? _e : targetLang;
            let link;
            if (targetLang === siteLocale.value.lang) {
              link = currentFullPath;
            } else {
              const targetLocalePage = currentPath.replace(routeLocale.value, targetLocalePath);
              if (router.getRoutes().some((item) => item.path === targetLocalePage)) {
                link = targetLocalePage;
              } else {
                link = (_f = targetThemeLocale.home) != null ? _f : targetLocalePath;
              }
            }
            return {
              text,
              link
            };
          })
        };
        return [languageDropdown];
      });
    };
    const useNavbarRepo = () => {
      const themeLocale = useThemeLocaleData();
      const repo = vue.computed(() => themeLocale.value.repo);
      const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
      const repoLink = vue.computed(() => {
        if (repo.value && !isLinkHttp(repo.value)) {
          return `https://github.com/${repo.value}`;
        }
        return repo.value;
      });
      const repoLabel = vue.computed(() => {
        if (!repoLink.value)
          return null;
        if (themeLocale.value.repoLabel)
          return themeLocale.value.repoLabel;
        if (repoType.value === null)
          return "Source";
        return repoType.value;
      });
      return vue.computed(() => {
        if (!repoLink.value || !repoLabel.value) {
          return [];
        }
        return [
          {
            text: repoLabel.value,
            link: repoLink.value
          }
        ];
      });
    };
    const resolveNavbarItem = (item) => {
      if (isString(item)) {
        return useNavLink(item);
      }
      if (item.children) {
        return __spreadProps(__spreadValues({}, item), {
          children: item.children.map(resolveNavbarItem)
        });
      }
      return item;
    };
    const useNavbarConfig = () => {
      const themeLocale = useThemeLocaleData();
      return vue.computed(() => (themeLocale.value.navbar || []).map(resolveNavbarItem));
    };
    const navbarConfig = useNavbarConfig();
    const navbarSelectLanguage = useNavbarSelectLanguage();
    const navbarRepo = useNavbarRepo();
    const navbarLinks = vue.computed(() => [
      ...navbarConfig.value,
      ...navbarSelectLanguage.value,
      ...navbarRepo.value
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(navbarLinks).length) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "navbar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(navbarLinks), (item) => {
          _push(`<div class="navbar-item">`);
          if (item.children) {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$b, { item }, null, _parent));
          } else {
            _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item }, null, _parent));
          }
          _push(`</div>`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/NavbarItems.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const isDarkMode = useDarkMode();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-dark-button",
        title: vue.unref(themeLocale).toggleDarkMode
      }, _attrs))}><svg style="${serverRenderer.ssrRenderStyle(!vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M16 12.005a4 4 0 1 1-4 4a4.005 4.005 0 0 1 4-4m0-2a6 6 0 1 0 6 6a6 6 0 0 0-6-6z" fill="currentColor"></path><path d="M5.394 6.813l1.414-1.415l3.506 3.506L8.9 10.318z" fill="currentColor"></path><path d="M2 15.005h5v2H2z" fill="currentColor"></path><path d="M5.394 25.197L8.9 21.691l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 25.005h2v5h-2z" fill="currentColor"></path><path d="M21.687 23.106l1.414-1.415l3.506 3.506l-1.414 1.414z" fill="currentColor"></path><path d="M25 15.005h5v2h-5z" fill="currentColor"></path><path d="M21.687 8.904l3.506-3.506l1.414 1.415l-3.506 3.505z" fill="currentColor"></path><path d="M15 2.005h2v5h-2z" fill="currentColor"></path></svg><svg style="${serverRenderer.ssrRenderStyle(vue.unref(isDarkMode) ? null : { display: "none" })}" class="icon" focusable="false" viewBox="0 0 32 32"><path d="M13.502 5.414a15.075 15.075 0 0 0 11.594 18.194a11.113 11.113 0 0 1-7.975 3.39c-.138 0-.278.005-.418 0a11.094 11.094 0 0 1-3.2-21.584M14.98 3a1.002 1.002 0 0 0-.175.016a13.096 13.096 0 0 0 1.825 25.981c.164.006.328 0 .49 0a13.072 13.072 0 0 0 10.703-5.555a1.01 1.01 0 0 0-.783-1.565A13.08 13.08 0 0 1 15.89 4.38A1.015 1.015 0 0 0 14.98 3z" fill="currentColor"></path></svg></button>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleDarkModeButton.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "toggle-sidebar-button",
        title: vue.unref(themeLocale).toggleSidebar,
        "aria-expanded": "false",
        role: "button",
        tabindex: "0"
      }, _attrs))}><div class="icon" aria-hidden="true"><span></span><span></span><span></span></div></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/ToggleSidebarButton.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  emits: ["toggle-sidebar"],
  setup(__props) {
    const themeLocale = useThemeLocaleData();
    const navbar = vue.ref(null);
    const navbarBrand = vue.ref(null);
    const linksWrapperMaxWidth = vue.ref(0);
    const linksWrapperStyle = vue.computed(() => {
      if (!linksWrapperMaxWidth.value) {
        return {};
      }
      return {
        maxWidth: linksWrapperMaxWidth.value + "px"
      };
    });
    const enableDarkMode = vue.computed(() => themeLocale.value.darkMode);
    vue.onMounted(() => {
      const MOBILE_DESKTOP_BREAKPOINT = 719;
      const navbarHorizontalPadding = getCssValue(navbar.value, "paddingLeft") + getCssValue(navbar.value, "paddingRight");
      const handleLinksWrapWidth = () => {
        var _a;
        if (window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT) {
          linksWrapperMaxWidth.value = 0;
        } else {
          linksWrapperMaxWidth.value = navbar.value.offsetWidth - navbarHorizontalPadding - (((_a = navbarBrand.value) == null ? void 0 : _a.offsetWidth) || 0);
        }
      };
      handleLinksWrapWidth();
      window.addEventListener("resize", handleLinksWrapWidth, false);
      window.addEventListener("orientationchange", handleLinksWrapWidth, false);
    });
    function getCssValue(el, property) {
      var _a, _b, _c;
      const val = (_c = (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) == null ? void 0 : _b.getComputedStyle(el, null)) == null ? void 0 : _c[property];
      const num = Number.parseInt(val, 10);
      return Number.isNaN(num) ? 0 : num;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NavbarSearch = vue.resolveComponent("NavbarSearch");
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        ref_key: "navbar",
        ref: navbar,
        class: "navbar"
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$8, null, null, _parent));
      _push(`<span>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$d, null, null, _parent));
      _push(`</span><div class="navbar-items-wrapper" style="${serverRenderer.ssrRenderStyle(vue.unref(linksWrapperStyle))}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "before", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, { class: "can-hide" }, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "after", {}, null, _push, _parent);
      if (vue.unref(enableDarkMode)) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$9, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_NavbarSearch, null, null, _parent));
      _push(`</div></header>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Navbar.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const useEditNavLink = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c;
        const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : themeLocale2.value.editLink) != null ? _b : true;
        if (!showEditLink) {
          return null;
        }
        const {
          repo,
          docsRepo = repo,
          docsBranch = "main",
          docsDir = "",
          editLinkText
        } = themeLocale2.value;
        if (!docsRepo)
          return null;
        const editLink = resolveEditLink({
          docsRepo,
          docsBranch,
          docsDir,
          filePathRelative: page.value.filePathRelative,
          editLinkPattern: (_c = frontmatter.value.editLinkPattern) != null ? _c : themeLocale2.value.editLinkPattern
        });
        if (!editLink)
          return null;
        return {
          text: editLinkText != null ? editLinkText : "Edit this page",
          link: editLink
        };
      });
    };
    const useLastUpdated = () => {
      useSiteLocaleData();
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale2.value.lastUpdated) != null ? _b : true;
        if (!showLastUpdated)
          return null;
        if (!((_c = page.value.git) == null ? void 0 : _c.updatedTime))
          return null;
        const updatedDate = new Date((_d = page.value.git) == null ? void 0 : _d.updatedTime);
        return updatedDate.toLocaleString();
      });
    };
    const useContributors = () => {
      const themeLocale2 = useThemeLocaleData();
      const page = usePageData();
      const frontmatter = usePageFrontmatter();
      return vue.computed(() => {
        var _a, _b, _c, _d;
        const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale2.value.contributors) != null ? _b : true;
        if (!showContributors)
          return null;
        return (_d = (_c = page.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
      });
    };
    const themeLocale = useThemeLocaleData();
    const editNavLink = useEditNavLink();
    const lastUpdated = useLastUpdated();
    const contributors = useContributors();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = vue.resolveComponent("ClientOnly");
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-meta" }, _attrs))}>`);
      if (vue.unref(editNavLink)) {
        _push(`<div class="meta-item edit-link">`);
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: "meta-item-label",
          item: vue.unref(editNavLink)
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(lastUpdated)) {
        _push(`<div class="meta-item last-updated"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).lastUpdatedText)}: </span>`);
        _push(serverRenderer.ssrRenderComponent(_component_ClientOnly, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="meta-item-info"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(lastUpdated))}</span>`);
            } else {
              return [
                vue.createVNode("span", { class: "meta-item-info" }, vue.toDisplayString(vue.unref(lastUpdated)), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(contributors) && vue.unref(contributors).length) {
        _push(`<div class="meta-item contributors"><span class="meta-item-label">${serverRenderer.ssrInterpolate(vue.unref(themeLocale).contributorsText)}: </span><span class="meta-item-info"><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(contributors), (contributor, index2) => {
          _push(`<!--[--><span class="contributor"${serverRenderer.ssrRenderAttr("title", `email: ${contributor.email}`)}>${serverRenderer.ssrInterpolate(contributor.name)}</span>`);
          if (index2 !== vue.unref(contributors).length - 1) {
            _push(`<!--[-->, <!--]-->`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageMeta.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const resolveFromFrontmatterConfig = (conf) => {
      if (conf === false) {
        return null;
      }
      if (isString(conf)) {
        return useNavLink(conf);
      }
      if (isPlainObject(conf)) {
        return conf;
      }
      return false;
    };
    const resolveFromSidebarItems = (sidebarItems2, currentPath, offset) => {
      const index2 = sidebarItems2.findIndex((item) => item.link === currentPath);
      if (index2 !== -1) {
        const targetItem = sidebarItems2[index2 + offset];
        if (!(targetItem == null ? void 0 : targetItem.link)) {
          return null;
        }
        return targetItem;
      }
      for (const item of sidebarItems2) {
        if (item.children) {
          const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
          if (childResult) {
            return childResult;
          }
        }
      }
      return null;
    };
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      if (prevConfig !== false) {
        return prevConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, -1);
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      if (nextConfig !== false) {
        return nextConfig;
      }
      return resolveFromSidebarItems(sidebarItems.value, route.path, 1);
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(prevNavLink) || vue.unref(nextNavLink)) {
        _push(`<nav${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page-nav" }, _attrs))}><p class="inner">`);
        if (vue.unref(prevNavLink)) {
          _push(`<span class="prev">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(prevNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(nextNavLink)) {
          _push(`<span class="next">`);
          _push(serverRenderer.ssrRenderComponent(_sfc_main$g, { item: vue.unref(nextNavLink) }, null, _parent));
          _push(`</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/PageNav.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = vue.resolveComponent("Content");
      _push(`<main${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "page" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(`<div class="theme-default-content">`);
      _push(serverRenderer.ssrRenderComponent(_component_Content, null, null, _parent));
      _push(`</div>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_sfc_main$5, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</main>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Page.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  props: {
    item: {
      type: Object,
      required: true
    },
    depth: {
      type: Number,
      required: false,
      default: 0
    }
  },
  setup(__props) {
    const props = __props;
    const { item, depth } = vue.toRefs(props);
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const isActive = vue.computed(() => isActiveSidebarItem(item.value, route));
    const itemClass = vue.computed(() => ({
      "sidebar-item": true,
      "sidebar-heading": depth.value === 0,
      "active": isActive.value,
      "collapsible": item.value.collapsible
    }));
    const isOpen = vue.ref(true);
    const onClick = vue.ref(void 0);
    if (item.value.collapsible) {
      isOpen.value = isActive.value;
      onClick.value = () => {
        isOpen.value = !isOpen.value;
      };
      router.afterEach(() => {
        isOpen.value = isActive.value;
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_SidebarItem = vue.resolveComponent("SidebarItem", true);
      _push(`<li${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (vue.unref(item).link) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$g, {
          class: vue.unref(itemClass),
          item: vue.unref(item)
        }, null, _parent));
      } else {
        _push(`<p class="${serverRenderer.ssrRenderClass(vue.unref(itemClass))}">${serverRenderer.ssrInterpolate(vue.unref(item).text)} `);
        if (vue.unref(item).collapsible) {
          _push(`<span class="${serverRenderer.ssrRenderClass([isOpen.value ? "down" : "right", "arrow"])}"></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      }
      if ((_a = vue.unref(item).children) == null ? void 0 : _a.length) {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$c, null, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<ul style="${serverRenderer.ssrRenderStyle(isOpen.value ? null : { display: "none" })}" class="sidebar-item-children"${_scopeId}><!--[-->`);
              serverRenderer.ssrRenderList(vue.unref(item).children, (child) => {
                _push2(serverRenderer.ssrRenderComponent(_component_SidebarItem, {
                  key: `${vue.unref(depth)}${child.text}${child.link}`,
                  item: child,
                  depth: vue.unref(depth) + 1
                }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></ul>`);
            } else {
              return [
                vue.withDirectives(vue.createVNode("ul", { class: "sidebar-item-children" }, [
                  (vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(vue.unref(item).children, (child) => {
                    return vue.openBlock(), vue.createBlock(_component_SidebarItem, {
                      key: `${vue.unref(depth)}${child.text}${child.link}`,
                      item: child,
                      depth: vue.unref(depth) + 1
                    }, null, 8, ["item", "depth"]);
                  }), 128))
                ], 512), [
                  [vue.vShow, isOpen.value]
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</li>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const sidebarItems = useSidebarItems();
    return (_ctx, _push, _parent, _attrs) => {
      if (vue.unref(sidebarItems).length) {
        _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar-items" }, _attrs))}><!--[-->`);
        serverRenderer.ssrRenderList(vue.unref(sidebarItems), (item) => {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$3, {
            key: item.link || item.text,
            item
          }, null, _parent));
        });
        _push(`<!--]--></ul>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/SidebarItems.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "sidebar" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$a, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "top", {}, null, _push, _parent);
      _push(serverRenderer.ssrRenderComponent(_sfc_main$2, null, null, _parent));
      serverRenderer.ssrRenderSlot(_ctx.$slots, "bottom", {}, null, _push, _parent);
      _push(`</aside>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/components/Sidebar.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __ssrInlineRender: true,
  setup(__props) {
    const page = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const shouldShowNavbar = vue.computed(() => frontmatter.value.navbar !== false && themeLocale.value.navbar !== false);
    const sidebarItems = useSidebarItems();
    const isSidebarOpen = vue.ref(false);
    const toggleSidebar = (to) => {
      isSidebarOpen.value = typeof to === "boolean" ? to : !isSidebarOpen.value;
    };
    const containerClass = vue.computed(() => [
      {
        "no-navbar": !shouldShowNavbar.value,
        "no-sidebar": !sidebarItems.value.length,
        "sidebar-open": isSidebarOpen.value
      },
      frontmatter.value.pageClass
    ]);
    let unregisterRouterHook;
    vue.onMounted(() => {
      const router = vueRouter.useRouter();
      unregisterRouterHook = router.afterEach(() => {
        toggleSidebar(false);
      });
    });
    vue.onUnmounted(() => {
      unregisterRouterHook();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["theme-container", vue.unref(containerClass)]
      }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar", {}, () => {
        if (vue.unref(shouldShowNavbar)) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$7, null, {
            before: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-before", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-before")
                ];
              }
            }),
            after: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "navbar-after", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "navbar-after")
                ];
              }
            }),
            _: 3
          }, _parent));
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      _push(`<div class="sidebar-mask"></div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar", {}, () => {
        _push(serverRenderer.ssrRenderComponent(_sfc_main$1, null, {
          top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-top")
              ];
            }
          }),
          bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "sidebar-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                vue.renderSlot(_ctx.$slots, "sidebar-bottom")
              ];
            }
          }),
          _: 3
        }, _parent));
      }, _push, _parent);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "page", {}, () => {
        if (vue.unref(frontmatter).home) {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$e, null, null, _parent));
        } else {
          _push(serverRenderer.ssrRenderComponent(_sfc_main$4, vue.mergeProps({
            key: vue.unref(page).path
          }, _attrs), {
            top: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-top")
                ];
              }
            }),
            bottom: vue.withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                serverRenderer.ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
              } else {
                return [
                  vue.renderSlot(_ctx.$slots, "page-bottom")
                ];
              }
            }),
            _: 3
          }, _parent));
        }
      }, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = new Set())).add("../../../../node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var Layout = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module",
  "default": _sfc_main
});
exports.createVueApp = createVueApp;
