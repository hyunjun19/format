var restful = (function(){
  var error = function(message){
    if (window.console && window.console.error) {
      console.error(message);
    } else {
      alert(message);
    }
  };

  var getRestfulParams = function(router, url) {
    if (!router) {
      error('router parameter is required.');
      return null;
    }

    var params = {};
    url = url || window.location.pathname;
    var routers = router.split('/');
    var urls = url.split('/');

    // TODO context path는 어쩌지?
    if (routers.length != urls.length) {
      error('router and url not match~!');
    }

    for (var i = 0; i < routers.length; i++) {
      var matches = routers[i].match(/\{(\w+)\}/);
      if (matches) {
        params[matches[1]] = urls[i];
      }
    }

    return params;
  }

  return {
    /**
     * get restful params from router and url
     * @example var params = restful.getparams(router, url);
     * @param router String url pattern ex) '/category/{code}/{deal}/edit'
     * @param url String optional default is location.pathname ex) '/category/place/21/edit'
     * @return params Object ex) {code: "place", deal: "21"}
     */
    getParams: getRestfulParams
  };
})();
