Bitfinex API 
==========================
Wrapper to interface with the bitfinex cryptocurrency exchange. This package is not offically supported by Bitfinex. Not responsible for loss of your data or money by using this package.

See https://www.bitfinex.com/pages/api  for more information.

##Functions##

**Bfx.symbols()**

Returns a list of symbols that are compatable with the 'ticker' functions.

**Bfx.ticker(symbol,fieldname,AsFloat)**

When fieldname is specified returns that field; if 'AsFloat' is passed as true returns the specified fieldname as a float. Otherwise returns entire response from bitfinex.

**Bfx.last_quote**

Shortcut from Bfx.ticker(symbol,'last_quote',true);


