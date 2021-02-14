(function () {
  var page = window.location.pathname;
  console.log(page);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function(registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function(error) {
      console.log('Service worker registration failed, error:', error);
    });
  }

 	if ("serviceWorker" in navigator) {
  		window.addEventListener("load", function() {
    	navigator.serviceWorker
      		.register("sw.js")
      		.then(res => console.log("service worker registered"))
      		.catch(err => console.log("service worker not registered", err))
  		})
	}
})();
