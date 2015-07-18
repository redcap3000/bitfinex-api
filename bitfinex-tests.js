Tinytest.add('bitfinex-api - init', function(test) {
  test.equal(typeof Bfx,'object','Bfx is not an object');
  test.equal(typeof Bfx.ticker,'function','Bfx.ticker not available.');
  test.equal(typeof Bfx.symbols,'function','Bfx.symbols not a function');
});

Tinytest.add('bitfinex-api - ticker lookups',function(test){
  var markets = Bfx.symbols();
  // get last prices?
  // expect to fail since we do not have process.env variables for authentication
  test.length(markets, 5, "Bfx.symbols() did not return 5 responses. Did the api change?");
  test.isTrue(Bfx.last_price(markets[0]),'number','Last Quote did not return a valid response.');
  test.isTrue(Bfx.ticker(markets[1]),'object','Ticker lookup did not return a valid response.');
});
