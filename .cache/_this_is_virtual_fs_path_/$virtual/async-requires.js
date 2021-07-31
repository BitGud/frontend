// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-app-jsx": () => import("./../../../src/pages/App.jsx" /* webpackChunkName: "component---src-pages-app-jsx" */),
  "component---src-pages-not-found-jsx": () => import("./../../../src/pages/NotFound.jsx" /* webpackChunkName: "component---src-pages-not-found-jsx" */)
}

