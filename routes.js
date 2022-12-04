const UrlPrettifier = require("next-url-prettifier").default;
const memoizeOne = require("memoize-one");
const { isEqual } = require("lodash");
const aaRoutes = require("./config/router.config").routes;

// Conversion router to menu.
function formatter(data, parentAuthority, parentName) {
  return data
    .map((item) => {
      if (!item.path && !item.prettyUrl) {
        return null;
      }

      let locale = "menu";
      if (parentName) {
        locale = `${parentName}.${item.name}`;
      } else {
        locale = `menu.${item.name}`;
      }

      const result = {
        ...item,
        name: item.name,
        locale,
        authority: item.authority || parentAuthority,
      };
      if (item.routes) {
        const children = formatter(item.routes, item.authority, locale);
        // Reduce memory usage
        result.children = children;
      }
      delete result.routes;
      return result;
    })
    .filter((item) => item);
}

const memoizeOneFormatter = memoizeOne(formatter, isEqual);

const makeFlatten = (data) =>
  data.reduce((acc, record) => {
    if (
      record.component &&
      record.component !== null &&
      record.component !== ""
    ) {
      let prettyPatterns = [];
      if (record.patterns) {
        prettyPatterns = record.patterns;
      } else if (record.prettyPatterns) {
        // eslint-disable-next-line prefer-destructuring
        prettyPatterns = record.prettyPatterns;
      }

      acc.push({
        page: record.component,
        prettyUrl: record.path || record.prettyUrl,
        prettyPatterns,
      });
    }
    if (record.children) {
      const routesChild = makeFlatten(record.children);
      // console.log("routesChild: ", routesChild)
      routesChild.map((item) => acc.push(item));
      /* record.children.forEach(item => {
        if (item.component && item.component !== null && item.component !== '') {
          acc.push({
            page: item.component,
            prettyUrl: item.path,
            prettyUrlPatterns: item.patterns ? item.patterns : []
          })
        }
      }) */
    }
    return acc;
  }, []);

let routes = [];
try {
  const authority = ["admin", "user"];
  const routerError = [
    {
      path: "/:name*",
      component: "exception/404",
      name: "exception_404",
    },
  ];
  const menuRoutes = makeFlatten(
    memoizeOneFormatter(aaRoutes.dashboard, authority)
  );
  const siteRoutes = makeFlatten(memoizeOneFormatter(aaRoutes.web, authority));
  const error = makeFlatten(memoizeOneFormatter(routerError, authority));
  routes = [...menuRoutes, ...siteRoutes, ...error];
  // console.log("routes: %o \n __dirname: %o", routes, __dirname);
  /* if(typeof window === "undefined"){
    fs.ensureDir(`${__dirname}/logs`).then(() => {
      fs.outputFileSync(`${__dirname}/logs/routes.js`, JSON.stringify(routes));
      fs.outputJsonSync(`${__dirname}/logs/routes.json`, routes);
    })
  } */
} catch (error) {
  // console.log("MenuRouter error: ", new Error(error).message)
}
// console.log("MenuRouter: %o \nsiteRoutes: %o", routes)
const urlPrettifier = new UrlPrettifier(routes);
exports.default = routes;
exports.Router = urlPrettifier;
