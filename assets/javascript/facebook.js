window.fbAsyncInit = function() {
  FB.init({
    appId      : 'wildcatoffroadpark',
    xfbml      : true,
    version    : 'v2.8'
  });
};

(function(d, s, id){
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {return;}
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

var response = FB.api(
    "/wildcatoffroadpark/events",
    function (response) {
      if (response && !response.error) {
        return response.map(results);
      }
    }
);

function listOfEvents(response) {
  console.log(response);
}
