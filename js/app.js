(function () {
  var worker = 'sw.js';
  
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register(worker)
  }

 	if ("serviceWorker" in navigator) {
  		window.addEventListener("load", function() {
    	navigator.serviceWorker
      		.register(worker)
  		})
	}

})();
