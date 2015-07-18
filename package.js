Package.describe({
  name: "redcap3000:bitfinex-api",
  summary: "Wrapper to interface with the bitfinex cryptocurrency exchange.",
  version: "0.0.1",
  git: "https://github.com/redcap3000/bitfinex-api"
});

Package.onUse(function(api) {
  api.versionsFrom("0.9.0");
  api.use('http', 'server');
  api.addFiles('bitfinex.js', 'server');
  api.export('Bfx','server');
});

Package.onTest(function(api) {
  api.use(["redcap3000:bitfinex-api",'http']);
  api.use('tinytest@1.0.0');
  api.addFiles(['bitfinex-tests.js'], ['server']);
});