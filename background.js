chrome.runtime.onInstalled.addListener(() => {
  console.log("hello1");

});

  const EgHost =
    "https://echo.egybest.works/api?call=FUUUcwZWZVDicUcUFUcUdcEDsmShFUcFcUcsZWcUFUcSzUZoZIDnhZdNPsUcFcUcZsUUZGWZXcUFUcEFhUEFEEwUrEUhUcFcUcUZdWwsZIXcUFUcWEFEETjhUtEzNxcHDztyhEkstExxNZnsEDaFhEfEcUcFcUcwZWZGWZXcUFUcnnEFUBtUhjqkQXcFcUcDiNfhZdDXcUFEKfEKFEfEKrddOcUcZsUUZVDicUcUFUcUeDHhfFgFCBQSCcUf&auth=790e5316c38ad47d206fc48877718fa5";
chrome.runtime.onMessage.addListener(function() {
});	

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // 2. A page requested user data, respond with a copy of `user`
  if (message === 'get') {
    fetch(EgHost )
            .then(res => {
         const   x = JSON.stringify(res.json())
                  sendResponse(x);
                
            })
                  
 
  }
});