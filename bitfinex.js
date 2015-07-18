/*
 * bitfinex api wrapper
 * 
 * planned : perhaps a reactive data source/publication that stores data in a Bfx.quotes object 
 * that is queried at an interval specified in env variable
 *
 * authenticated paths
 */

Bfx = {};
// hmmm... not sure where to put this...
var getResponseData = function(url,field){
        var response = HTTP.get(url);
        if(response && typeof response.data != "undefined" && response.data && response.data != null){
                if(typeof field != "undefined" && field && field != null){
                        if(typeof response.data[field] != "undefined"){
                                return response.data[field];
                        }else{
                                return false;
                        }
                }
                return response.data;
        }
        return false;
};

Bfx.symbols = function(){
        if(typeof Bfx._symbols == "undefined"){
                Bfx._symbols = getResponseData("https://api.bitfinex.com/v1/symbols");
        }
        return Bfx._symbols;
};

Bfx.ticker = function(symbol,field,asFloat){
        if(typeof symbol == "undefined" || !symbol || symbol == null){
                symbol = 'btcusd';
        }
        if(Bfx._symbols.indexOf(symbol) > -1){
                if(typeof field == "string" && asFloat == true){
                        var response = getResponseData("https://api.bitfinex.com/v1/pubticker/" + symbol,field);
                        if(response){
                                return parseFloat(response);
                        }else{
                                return false;
                        }
                }
                return getResponseData("https://api.bitfinex.com/v1/pubticker/" + symbol,field);
        }else{
                console.log(symbol + '\t : not supported');
                console.log('\t ** Supported symbols **');
                console.log(bitfinexSymbols);
        }
        return false;
}

Bfx.last_price = function(symbol){
        return Bfx.ticker(symbol,'last_price',true);
}