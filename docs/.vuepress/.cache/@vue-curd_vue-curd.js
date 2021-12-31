import {
  createVNode,
  init_runtime_dom_esm_bundler,
  nextTick,
  render
} from "./chunk-HK5A3W3Q.js";
import {
  init_shared_esm_bundler,
  shared_esm_bundler_exports
} from "./chunk-WJGYSMQT.js";
import {
  __commonJS,
  __esm,
  __export,
  __spreadProps,
  __spreadValues,
  init_define_MZ_ZOOM_OPTIONS
} from "./chunk-UBQM56YP.js";

// node_modules/@vue-curd/vue-curd/src/utils/config.js
var require_config = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/utils/config.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var $VUECURD = {};
    var setConfig = (option) => {
      $VUECURD = option;
    };
    var getConfig = (key) => {
      return $VUECURD[key];
    };
    exports.getConfig = getConfig;
    exports.setConfig = setConfig;
  }
});

// node_modules/@vue-curd/vue-curd/src/version.js
var require_version = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/version.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var version = "1.2.0-beta.6";
    exports.version = version;
  }
});

// node_modules/@vue-curd/vue-curd/src/make-installer.js
var require_make_installer = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/make-installer.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var config = require_config();
    var version = require_version();
    var makeInstaller = (components = []) => {
      const apps = [];
      const install2 = (app, opts) => {
        const defaultInstallOpt = {
          size: "",
          zIndex: 2e3
        };
        const option = Object.assign(defaultInstallOpt, opts);
        if (apps.includes(app))
          return;
        apps.push(app);
        components.forEach((c) => app.use(c));
        if (option.locale) {
          const localeProvides = index.localeProviderMaker(opts.locale);
          app.provide(index.localeContextKey, localeProvides);
        }
        config.setConfig(option);
      };
      return {
        version: version.version,
        install: install2
      };
    };
    exports.makeInstaller = makeInstaller;
  }
});

// node_modules/@vue-curd/vue-curd/src/utils/with-install.js
var require_with_install = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/utils/with-install.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var shared = (init_shared_esm_bundler(), shared_esm_bundler_exports);
    var withInstall = (main, extra) => {
      ;
      main.install = (app) => {
        for (const comp of [main, ...Object.values(extra != null ? extra : {})]) {
          app.component(comp.name, comp);
        }
      };
      if (extra) {
        for (const [key, comp] of Object.entries(extra)) {
          ;
          main[key] = comp;
        }
      }
      return main;
    };
    var withInstallFunction = (fn, name) => {
      ;
      fn.install = (app) => {
        app.config.globalProperties[name] = fn;
      };
      return fn;
    };
    var withNoopInstall = (component) => {
      ;
      component.install = shared.NOOP;
      return component;
    };
    exports.withInstall = withInstall;
    exports.withInstallFunction = withInstallFunction;
    exports.withNoopInstall = withNoopInstall;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/CurdTable/src/index.js
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
import STable from "D:/packages/vue-curd/vue-curd/node_modules/@vue-curd/vue-curd/src/components/CurdTable/src/STable.vue";
var src_default;
var init_src = __esm({
  "node_modules/@vue-curd/vue-curd/src/components/CurdTable/src/index.js"() {
    init_define_MZ_ZOOM_OPTIONS();
    src_default = STable;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/CurdTable/index.js
var require_CurdTable = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/components/CurdTable/index.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var withInstall = require_with_install();
    var affix = (init_src(), src_exports);
    var CurdTable = withInstall.withInstall(affix["default"]);
    exports.CurdTable = CurdTable;
    exports["default"] = CurdTable;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/CurdForm/src/index.js
var src_exports2 = {};
__export(src_exports2, {
  CurdForm: () => CurdForm,
  default: () => src_default2
});
import CurdForm from "D:/packages/vue-curd/vue-curd/node_modules/@vue-curd/vue-curd/src/components/CurdForm/src/CurdForm.vue";
var src_default2;
var init_src2 = __esm({
  "node_modules/@vue-curd/vue-curd/src/components/CurdForm/src/index.js"() {
    init_define_MZ_ZOOM_OPTIONS();
    src_default2 = CurdForm;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/CurdForm/index.js
var require_CurdForm = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/components/CurdForm/index.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var withInstall = require_with_install();
    var affix = (init_src2(), src_exports2);
    var CurdForm2 = withInstall.withInstall(affix["default"]);
    exports.CurdForm = CurdForm2;
    exports["default"] = CurdForm2;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/ConstantStatus/src/index.js
var src_exports3 = {};
__export(src_exports3, {
  ConstantStatus: () => ConstantStatus,
  default: () => src_default3
});
import ConstantStatus from "D:/packages/vue-curd/vue-curd/node_modules/@vue-curd/vue-curd/src/components/ConstantStatus/src/ConstantStatus.vue";
var src_default3;
var init_src3 = __esm({
  "node_modules/@vue-curd/vue-curd/src/components/ConstantStatus/src/index.js"() {
    init_define_MZ_ZOOM_OPTIONS();
    src_default3 = ConstantStatus;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/ConstantStatus/index.js
var require_ConstantStatus = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/components/ConstantStatus/index.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var withInstall = require_with_install();
    var affix = (init_src3(), src_exports3);
    var ConstantStatus2 = withInstall.withInstall(affix["default"]);
    exports.ConstantStatus = ConstantStatus2;
    exports["default"] = ConstantStatus2;
  }
});

// node_modules/@vue-curd/vue-curd/src/component.js
var require_component = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/component.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index2 = require_CurdTable();
    var index$1 = require_CurdForm();
    var index$2 = require_ConstantStatus();
    var Components = [
      index2.CurdTable,
      index$1.CurdForm,
      index$2.ConstantStatus
    ];
    exports["default"] = Components;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/FormDialog/src/index.js
var src_exports4 = {};
__export(src_exports4, {
  FormDialog: () => FormDialog,
  default: () => src_default4
});
import FormModal from "D:/packages/vue-curd/vue-curd/node_modules/@vue-curd/vue-curd/src/components/FormDialog/src/FormDialog.vue";
var _app, FormDialog, install, src_default4;
var init_src4 = __esm({
  "node_modules/@vue-curd/vue-curd/src/components/FormDialog/src/index.js"() {
    init_define_MZ_ZOOM_OPTIONS();
    init_runtime_dom_esm_bundler();
    FormDialog = () => {
    };
    FormDialog.show = (options) => {
      let formModal;
      const container = document.createElement("div");
      const remove = () => {
        formModal = null;
        render(null, container);
        container.remove();
      };
      formModal = createVNode(FormModal, __spreadProps(__spreadValues({}, options), { remove }));
      nextTick(() => {
        var _a;
        _app && (formModal.appContext = (_a = _app._instance) == null ? void 0 : _a.appContext);
        render(formModal, container);
        document.body.appendChild(container);
      });
      return formModal;
    };
    install = (app) => {
      _app = app;
      app.config.globalProperties["$formDialog"] = FormDialog;
    };
    FormDialog.install = install;
    src_default4 = FormDialog;
  }
});

// node_modules/@vue-curd/vue-curd/src/components/FormDialog/index.js
var require_FormDialog = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/components/FormDialog/index.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var formDialog = (init_src4(), src_exports4);
    var FormDialog2 = formDialog["default"];
    exports.FormDialog = FormDialog2;
    exports["default"] = FormDialog2;
  }
});

// node_modules/@vue-curd/vue-curd/src/plugin.js
var require_plugin = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/plugin.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var index2 = require_FormDialog();
    var Plugins = [
      index2.FormDialog
    ];
    exports["default"] = Plugins;
  }
});

// node_modules/@vue-curd/vue-curd/src/defaults.js
var require_defaults = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/defaults.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var makeInstaller = require_make_installer();
    var component = require_component();
    var plugin = require_plugin();
    var installer = makeInstaller.makeInstaller([...component["default"], ...plugin["default"]]);
    exports["default"] = installer;
  }
});

// node_modules/@vue-curd/vue-curd/src/index.js
var require_src = __commonJS({
  "node_modules/@vue-curd/vue-curd/src/index.js"(exports) {
    init_define_MZ_ZOOM_OPTIONS();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var defaults = require_defaults();
    var makeInstaller = require_make_installer();
    var index2 = require_CurdTable();
    var index$1 = require_CurdForm();
    var index$2 = require_ConstantStatus();
    var index$3 = require_FormDialog();
    var install2 = defaults["default"].install;
    exports.CurdTable = index2.CurdTable;
    exports.CurdForm = index$1.CurdForm;
    exports.ConstantStatus = index$2.ConstantStatus;
    exports.FormDialog = index$3.FormDialog;
    exports["default"] = defaults["default"];
    exports.makeInstaller = makeInstaller.makeInstaller;
    exports.install = install2;
  }
});

// dep:@vue-curd_vue-curd
init_define_MZ_ZOOM_OPTIONS();
var vue_curd_vue_curd_default = require_src();
export {
  vue_curd_vue_curd_default as default
};
//# sourceMappingURL=@vue-curd_vue-curd.js.map
