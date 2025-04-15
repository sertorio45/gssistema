import { A as serialize, B as fetchDefaults, m as useAsyncData, C as useRequestFetch, n as useNuxtApp } from './server.mjs';
import { computed, toValue, reactive } from 'vue';
import { createHash } from 'node:crypto';

var _a, _b, _c;
const e = (_c = (_b = (_a = globalThis.process) == null ? void 0 : _a.getBuiltinModule) == null ? void 0 : _b.call(_a, "crypto")) == null ? void 0 : _c.hash, r = "sha256", s = "base64url";
function digest(t) {
  var _a2, _b2;
  if (e) return e(r, t, s);
  const o = createHash(r).update(t);
  return ((_b2 = (_a2 = globalThis.process) == null ? void 0 : _a2.versions) == null ? void 0 : _b2.webcontainer) ? o.digest().toString(s) : o.digest(s);
}

function hash(input) {
  return digest(serialize(input));
}

function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = typeof arg1 === "string" ? [{}, arg1] : [arg1, arg2];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}

function useArticle() {
  const { $toast } = useNuxtApp();
  const getArticles = async () => {
    var _a;
    try {
      const { data } = await useFetch("/api/articles", "$z84PxVLmL-");
      return ((_a = data.value) == null ? void 0 : _a.data) || [];
    } catch (error) {
      console.error("Erro ao buscar artigos:", error);
      $toast == null ? void 0 : $toast.error("Erro ao buscar artigos");
      return [];
    }
  };
  const getArticle = async (id) => {
    var _a;
    try {
      const { data } = await useFetch(`/api/articles/${id}`, "$Jyz0VL7hfH");
      return (_a = data.value) == null ? void 0 : _a.data;
    } catch (error) {
      console.error(`Erro ao buscar artigo ID ${id}:`, error);
      $toast == null ? void 0 : $toast.error("Erro ao buscar artigo");
      return null;
    }
  };
  const createArticle = async (article) => {
    var _a, _b;
    try {
      const { data, error } = await useFetch("/api/articles", {
        method: "POST",
        body: article
      }, "$YfbMiofThc");
      if (error.value) {
        throw new Error(error.value.message);
      }
      if ((_a = data.value) == null ? void 0 : _a.success) {
        $toast == null ? void 0 : $toast.success("Artigo criado com sucesso");
        return data.value.data;
      }
      throw new Error(((_b = data.value) == null ? void 0 : _b.error) || "Erro ao criar artigo");
    } catch (error) {
      console.error("Erro ao criar artigo:", error);
      $toast == null ? void 0 : $toast.error(error instanceof Error ? error.message : "Erro ao criar artigo");
      return null;
    }
  };
  const updateArticle = async (id, article) => {
    var _a, _b;
    try {
      const { data, error } = await useFetch(`/api/articles/${id}`, {
        method: "PUT",
        body: article
      }, "$6xNf4rxqcj");
      if (error.value) {
        throw new Error(error.value.message);
      }
      if ((_a = data.value) == null ? void 0 : _a.success) {
        $toast == null ? void 0 : $toast.success("Artigo atualizado com sucesso");
        return data.value.data;
      }
      throw new Error(((_b = data.value) == null ? void 0 : _b.error) || "Erro ao atualizar artigo");
    } catch (error) {
      console.error(`Erro ao atualizar artigo ID ${id}:`, error);
      $toast == null ? void 0 : $toast.error(error instanceof Error ? error.message : "Erro ao atualizar artigo");
      return null;
    }
  };
  const deleteArticle = async (id) => {
    var _a, _b;
    try {
      const { data, error } = await useFetch(`/api/articles/${id}`, {
        method: "DELETE"
      }, "$t51GiFBOzL");
      if (error.value) {
        throw new Error(error.value.message);
      }
      if ((_a = data.value) == null ? void 0 : _a.success) {
        $toast == null ? void 0 : $toast.success("Artigo excluído com sucesso");
        return true;
      }
      throw new Error(((_b = data.value) == null ? void 0 : _b.error) || "Erro ao excluir artigo");
    } catch (error) {
      console.error(`Erro ao excluir artigo ID ${id}:`, error);
      $toast == null ? void 0 : $toast.error(error instanceof Error ? error.message : "Erro ao excluir artigo");
      return false;
    }
  };
  const generateSlug = (title) => {
    return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim();
  };
  return {
    getArticles,
    getArticle,
    createArticle,
    updateArticle,
    deleteArticle,
    generateSlug
  };
}

const statuses = [
  {
    value: "draft",
    label: "Rascunho",
    icon: "i-radix-icons-pencil-1"
  },
  {
    value: "published",
    label: "Publicado",
    icon: "i-radix-icons-check"
  },
  {
    value: "archived",
    label: "Arquivado",
    icon: "i-radix-icons-archive"
  }
];

export { statuses as s, useArticle as u };
//# sourceMappingURL=data.mjs.map
