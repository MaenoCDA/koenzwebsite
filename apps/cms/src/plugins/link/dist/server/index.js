"use strict";
const bootstrap = ({ strapi }) => {
};
const destroy = ({ strapi }) => {
};
const PLUGIN_ID = "link";
const register = ({ strapi }) => {
  strapi.customFields.register({
    name: "link",
    plugin: PLUGIN_ID,
    type: "json"
  });
};
const config = {
  default: {},
  validator() {
  }
};
const contentTypes = {};
const controller = ({ strapi }) => ({
  async routes(ctx) {
    const routes2 = await strapi.plugin("link").service("service").routes(ctx);
    ctx.body = { data: { routes: routes2 } };
  }
});
const controllers = {
  controller
};
const replaceLinks = async (obj, routes2, strapi) => {
  if (typeof obj !== "object" || obj === null) {
    return;
  }
  for (const key in obj) {
    if (obj[key] && typeof obj[key] === "object") {
      if (obj[key].link && typeof obj[key].link === "object" && obj[key].link.link) {
        const { type, target, link } = obj[key].link;
        const { id, uid, kind, slug } = obj[key].link.link;
        const findRoute = routes2.find(
          (route) => route.uid === uid && (route.slug === slug || route.id === Number(id)) && route.kind === kind
        );
        if (findRoute) {
          obj[key].link.href = findRoute.route;
          obj[key].link.target = obj[key].link.target === "blank" ? "_blank" : "_self";
        } else if (type === "external" || type === "custom") {
          obj[key].link.href = obj[key].link.link;
          obj[key].link.target = obj[key].link.target === "blank" ? "_blank" : "_self";
        } else {
          obj[key].link.href = "/";
          obj[key].link.target = "_self";
        }
        delete obj[key].link.link;
      }
      await replaceLinks(obj[key], routes2);
    }
  }
};
const traverseAndReplaceLinks = async (data, routes2, strapi) => {
  if (Array.isArray(data)) {
    for (const item of data) {
      await replaceLinks(item, routes2);
    }
  } else if (typeof data === "object" && data !== null) {
    await replaceLinks(data, routes2);
  }
};
const TransformLinks = async (strapi, ctx) => {
  const routes2 = await strapi.plugin("link").service("service").routes(ctx);
  const { body, request } = ctx;
  const { locale } = request.query;
  if (!body || !body.data) {
    return;
  }
  body.data = Array.isArray(body.data) ? body.data : [body.data];
  if (!locale || !routes2[locale]) {
    return;
  }
  await traverseAndReplaceLinks(body.data, routes2[locale]);
};
const policies = {};
const contentApi = [
  {
    method: "GET",
    path: "/routes",
    handler: "controller.routes",
    config: {
      policies: []
    }
  }
];
const admin = [
  {
    method: "GET",
    path: "/routes",
    handler: "controller.routes",
    config: {
      policies: []
    }
  }
];
const routes = {
  "content-api": {
    type: "content-api",
    routes: [...contentApi]
  },
  admin: {
    type: "admin",
    routes: [...admin]
  }
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var pluralize$1 = { exports: {} };
(function(module2, exports2) {
  (function(root, pluralize2) {
    if (typeof commonjsRequire === "function" && true && true) {
      module2.exports = pluralize2();
    } else {
      root.pluralize = pluralize2();
    }
  })(commonjsGlobal, function() {
    var pluralRules = [];
    var singularRules = [];
    var uncountables = {};
    var irregularPlurals = {};
    var irregularSingles = {};
    function sanitizeRule(rule) {
      if (typeof rule === "string") {
        return new RegExp("^" + rule + "$", "i");
      }
      return rule;
    }
    function restoreCase(word, token) {
      if (word === token) return token;
      if (word === word.toLowerCase()) return token.toLowerCase();
      if (word === word.toUpperCase()) return token.toUpperCase();
      if (word[0] === word[0].toUpperCase()) {
        return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
      }
      return token.toLowerCase();
    }
    function interpolate(str, args) {
      return str.replace(/\$(\d{1,2})/g, function(match, index2) {
        return args[index2] || "";
      });
    }
    function replace(word, rule) {
      return word.replace(rule[0], function(match, index2) {
        var result = interpolate(rule[1], arguments);
        if (match === "") {
          return restoreCase(word[index2 - 1], result);
        }
        return restoreCase(match, result);
      });
    }
    function sanitizeWord(token, word, rules) {
      if (!token.length || uncountables.hasOwnProperty(token)) {
        return word;
      }
      var len = rules.length;
      while (len--) {
        var rule = rules[len];
        if (rule[0].test(word)) return replace(word, rule);
      }
      return word;
    }
    function replaceWord(replaceMap, keepMap, rules) {
      return function(word) {
        var token = word.toLowerCase();
        if (keepMap.hasOwnProperty(token)) {
          return restoreCase(word, token);
        }
        if (replaceMap.hasOwnProperty(token)) {
          return restoreCase(word, replaceMap[token]);
        }
        return sanitizeWord(token, word, rules);
      };
    }
    function checkWord(replaceMap, keepMap, rules, bool) {
      return function(word) {
        var token = word.toLowerCase();
        if (keepMap.hasOwnProperty(token)) return true;
        if (replaceMap.hasOwnProperty(token)) return false;
        return sanitizeWord(token, token, rules) === token;
      };
    }
    function pluralize2(word, count, inclusive) {
      var pluralized = count === 1 ? pluralize2.singular(word) : pluralize2.plural(word);
      return (inclusive ? count + " " : "") + pluralized;
    }
    pluralize2.plural = replaceWord(
      irregularSingles,
      irregularPlurals,
      pluralRules
    );
    pluralize2.isPlural = checkWord(
      irregularSingles,
      irregularPlurals,
      pluralRules
    );
    pluralize2.singular = replaceWord(
      irregularPlurals,
      irregularSingles,
      singularRules
    );
    pluralize2.isSingular = checkWord(
      irregularPlurals,
      irregularSingles,
      singularRules
    );
    pluralize2.addPluralRule = function(rule, replacement) {
      pluralRules.push([sanitizeRule(rule), replacement]);
    };
    pluralize2.addSingularRule = function(rule, replacement) {
      singularRules.push([sanitizeRule(rule), replacement]);
    };
    pluralize2.addUncountableRule = function(word) {
      if (typeof word === "string") {
        uncountables[word.toLowerCase()] = true;
        return;
      }
      pluralize2.addPluralRule(word, "$0");
      pluralize2.addSingularRule(word, "$0");
    };
    pluralize2.addIrregularRule = function(single, plural) {
      plural = plural.toLowerCase();
      single = single.toLowerCase();
      irregularSingles[single] = plural;
      irregularPlurals[plural] = single;
    };
    [
      // Pronouns.
      ["I", "we"],
      ["me", "us"],
      ["he", "they"],
      ["she", "they"],
      ["them", "them"],
      ["myself", "ourselves"],
      ["yourself", "yourselves"],
      ["itself", "themselves"],
      ["herself", "themselves"],
      ["himself", "themselves"],
      ["themself", "themselves"],
      ["is", "are"],
      ["was", "were"],
      ["has", "have"],
      ["this", "these"],
      ["that", "those"],
      // Words ending in with a consonant and `o`.
      ["echo", "echoes"],
      ["dingo", "dingoes"],
      ["volcano", "volcanoes"],
      ["tornado", "tornadoes"],
      ["torpedo", "torpedoes"],
      // Ends with `us`.
      ["genus", "genera"],
      ["viscus", "viscera"],
      // Ends with `ma`.
      ["stigma", "stigmata"],
      ["stoma", "stomata"],
      ["dogma", "dogmata"],
      ["lemma", "lemmata"],
      ["schema", "schemata"],
      ["anathema", "anathemata"],
      // Other irregular rules.
      ["ox", "oxen"],
      ["axe", "axes"],
      ["die", "dice"],
      ["yes", "yeses"],
      ["foot", "feet"],
      ["eave", "eaves"],
      ["goose", "geese"],
      ["tooth", "teeth"],
      ["quiz", "quizzes"],
      ["human", "humans"],
      ["proof", "proofs"],
      ["carve", "carves"],
      ["valve", "valves"],
      ["looey", "looies"],
      ["thief", "thieves"],
      ["groove", "grooves"],
      ["pickaxe", "pickaxes"],
      ["passerby", "passersby"]
    ].forEach(function(rule) {
      return pluralize2.addIrregularRule(rule[0], rule[1]);
    });
    [
      [/s?$/i, "s"],
      [/[^\u0000-\u007F]$/i, "$0"],
      [/([^aeiou]ese)$/i, "$1"],
      [/(ax|test)is$/i, "$1es"],
      [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, "$1es"],
      [/(e[mn]u)s?$/i, "$1s"],
      [/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, "$1"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1i"],
      [/(alumn|alg|vertebr)(?:a|ae)$/i, "$1ae"],
      [/(seraph|cherub)(?:im)?$/i, "$1im"],
      [/(her|at|gr)o$/i, "$1oes"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i, "$1a"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i, "$1a"],
      [/sis$/i, "ses"],
      [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, "$1$2ves"],
      [/([^aeiouy]|qu)y$/i, "$1ies"],
      [/([^ch][ieo][ln])ey$/i, "$1ies"],
      [/(x|ch|ss|sh|zz)$/i, "$1es"],
      [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, "$1ices"],
      [/\b((?:tit)?m|l)(?:ice|ouse)$/i, "$1ice"],
      [/(pe)(?:rson|ople)$/i, "$1ople"],
      [/(child)(?:ren)?$/i, "$1ren"],
      [/eaux$/i, "$0"],
      [/m[ae]n$/i, "men"],
      ["thou", "you"]
    ].forEach(function(rule) {
      return pluralize2.addPluralRule(rule[0], rule[1]);
    });
    [
      [/s$/i, ""],
      [/(ss)$/i, "$1"],
      [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, "$1fe"],
      [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, "$1f"],
      [/ies$/i, "y"],
      [/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i, "$1ie"],
      [/\b(mon|smil)ies$/i, "$1ey"],
      [/\b((?:tit)?m|l)ice$/i, "$1ouse"],
      [/(seraph|cherub)im$/i, "$1"],
      [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, "$1"],
      [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, "$1sis"],
      [/(movie|twelve|abuse|e[mn]u)s$/i, "$1"],
      [/(test)(?:is|es)$/i, "$1is"],
      [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, "$1us"],
      [/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i, "$1um"],
      [/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i, "$1on"],
      [/(alumn|alg|vertebr)ae$/i, "$1a"],
      [/(cod|mur|sil|vert|ind)ices$/i, "$1ex"],
      [/(matr|append)ices$/i, "$1ix"],
      [/(pe)(rson|ople)$/i, "$1rson"],
      [/(child)ren$/i, "$1"],
      [/(eau)x?$/i, "$1"],
      [/men$/i, "man"]
    ].forEach(function(rule) {
      return pluralize2.addSingularRule(rule[0], rule[1]);
    });
    [
      // Singular words with no plurals.
      "adulthood",
      "advice",
      "agenda",
      "aid",
      "aircraft",
      "alcohol",
      "ammo",
      "analytics",
      "anime",
      "athletics",
      "audio",
      "bison",
      "blood",
      "bream",
      "buffalo",
      "butter",
      "carp",
      "cash",
      "chassis",
      "chess",
      "clothing",
      "cod",
      "commerce",
      "cooperation",
      "corps",
      "debris",
      "diabetes",
      "digestion",
      "elk",
      "energy",
      "equipment",
      "excretion",
      "expertise",
      "firmware",
      "flounder",
      "fun",
      "gallows",
      "garbage",
      "graffiti",
      "hardware",
      "headquarters",
      "health",
      "herpes",
      "highjinks",
      "homework",
      "housework",
      "information",
      "jeans",
      "justice",
      "kudos",
      "labour",
      "literature",
      "machinery",
      "mackerel",
      "mail",
      "media",
      "mews",
      "moose",
      "music",
      "mud",
      "manga",
      "news",
      "only",
      "personnel",
      "pike",
      "plankton",
      "pliers",
      "police",
      "pollution",
      "premises",
      "rain",
      "research",
      "rice",
      "salmon",
      "scissors",
      "series",
      "sewage",
      "shambles",
      "shrimp",
      "software",
      "species",
      "staff",
      "swine",
      "tennis",
      "traffic",
      "transportation",
      "trout",
      "tuna",
      "wealth",
      "welfare",
      "whiting",
      "wildebeest",
      "wildlife",
      "you",
      /pok[eé]mon$/i,
      // Regexes.
      /[^aeiou]ese$/i,
      // "chinese", "japanese"
      /deer$/i,
      // "deer", "reindeer"
      /fish$/i,
      // "fish", "blowfish", "angelfish"
      /measles$/i,
      /o[iu]s$/i,
      // "carnivorous"
      /pox$/i,
      // "chickpox", "smallpox"
      /sheep$/i
    ].forEach(pluralize2.addUncountableRule);
    return pluralize2;
  });
})(pluralize$1);
var pluralizeExports = pluralize$1.exports;
const pluralize = /* @__PURE__ */ getDefaultExportFromCjs(pluralizeExports);
const service = ({ strapi }) => ({
  async routes(ctx) {
    return await fetchRoutes(
      strapi.config.contentTypes,
      strapi,
      ctx.request ? ctx.request.query : {}
    );
  }
});
const fetchRoutes = async (collectionTypes, strapi, params) => {
  const searchParams = {
    status: params.status || "published",
    where: {},
    fields: ["slug", "locale", "title", "documentId", "id"]
  };
  if (params) {
    if (params.id) {
      searchParams.where.id = { $eq: params.id };
    }
    if (params.documentId) {
      searchParams.where.documentId = params.documentId;
    }
    if (params.locale) {
      searchParams.where.locale = params.locale;
    }
    if (params.slug) {
      searchParams.where.slug = params.slug;
    }
    if (params.title) {
      searchParams.where.title = { $contains: params.title };
    }
    if (params.route) {
      searchParams.where.route = params.route;
    }
  }
  const promises = collectionTypes.map(async (collectionType) => {
    if (collectionType.uid === "api::home-page.home-page") {
      if (params.slug) {
        return;
      }
      const where = { locale: params.locale ?? "nl" };
      if (params.title) {
        where.title = { $contains: params.title };
      }
      const homepage = await strapi.documents(collectionType.uid).findFirst({
        status: searchParams.status || "published",
        where,
        fields: ["locale", "title", "documentId", "id"]
      });
      if (!homepage || params.id) {
        return {};
      }
      return {
        [collectionType.uid]: [
          {
            ...homepage,
            isHome: true,
            slug: "",
            kind: collectionType.kind
          }
        ]
      };
    }
    let givenSlugs = [];
    const { parent, parentUid, childrenUid } = collectionType.attributes;
    if (parent) {
      givenSlugs = await strapi.documents(collectionType.uid).findMany({ ...searchParams, populate: "parent" });
    } else if (parentUid) {
      givenSlugs = await strapi.documents(collectionType.uid).findMany({
        ...searchParams,
        fields: ["slug", "locale", "title", "documentId", "parentUid"]
      });
    } else if (childrenUid) {
      givenSlugs = await strapi.documents(collectionType.uid).findMany({
        ...searchParams,
        fields: ["slug", "locale", "title", "documentId", "childrenUid"]
      });
    } else {
      givenSlugs = await strapi.documents(collectionType.uid).findMany(searchParams);
    }
    if (!givenSlugs) {
      return {};
    }
    return {
      [collectionType.uid]: givenSlugs.map((slug) => ({ ...slug, kind: collectionType.kind }))
    };
  });
  const results = await Promise.all(promises);
  const routes2 = results.reduce((acc, result) => {
    return { ...acc, ...result };
  }, {});
  const routesWithSlugs = await Promise.all(
    Object.entries(routes2).map(async ([uid, routeArray]) => {
      const updatedRoutes = await Promise.all(
        routeArray.map(async (route) => {
          let fullSlug = route.slug ? `/${route.locale}/${route.slug}` : `/${route.locale}`;
          if (route.parent) {
            fullSlug = `/${route.locale}/${route.parent.slug}/${route.slug}`;
            route.parent = { ...route.parent, route: `/${route.locale}/${route.parent.slug}` };
          }
          if (route.parentUid) {
            const parent = await strapi.documents(route.parentUid).findFirst({
              status: "published",
              fields: ["slug", "locale", "title", "childrenUid"]
            });
            route.parent = {
              ...parent,
              route: `/${route.locale}/${parent.slug}`
            };
            if (parent.length === 0) {
              fullSlug = `/${route.locale}/${route.slug}`;
            } else {
              fullSlug = `/${route.locale}/${parent.slug}/${route.slug}`;
            }
          }
          if (route.childrenUid) {
            route.endpoint = convertUidToEndpoint(route.childrenUid);
          }
          return { ...route, uid, slug: route.slug, route: fullSlug };
        })
      );
      return { [uid]: updatedRoutes };
    })
  );
  const flattenedRoutesWithSlugs = routesWithSlugs.reduce((acc, curr) => {
    return { ...acc, ...curr };
  }, {});
  return groupRoutesByLocale(flattenedRoutesWithSlugs);
};
const groupRoutesByLocale = (routes2) => {
  const groupedRoutes = {};
  for (const [uid, routeArray] of Object.entries(routes2)) {
    routeArray.forEach((route) => {
      if (!groupedRoutes[route.locale]) {
        groupedRoutes[route.locale] = [];
      }
      groupedRoutes[route.locale].push(route);
    });
  }
  return groupedRoutes;
};
const convertUidToEndpoint = (uid) => {
  if (!uid) {
    return;
  }
  const match = uid.match(/^api::([\w-]+)\.[\w-]+$/);
  if (match) {
    const name = match[1];
    return `api/${pluralize(name)}`;
  }
};
const services = {
  service
};
const index = {
  register,
  bootstrap,
  destroy,
  config,
  controllers,
  routes,
  services,
  contentTypes,
  policies,
  middlewares: TransformLinks
};
module.exports = index;
