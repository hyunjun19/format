/**
 * pathvaiable, querystring 파라미터를 추출하는 클래스
 * location.hash 정보를 '_hash'키 값으로 가지고 있다.
 *
 * @param router URL 패턴
 * @param location 테스트용 변수입니다. 사용하지 마세요.
 * @example
 * var params = Restful();
 * var params = Restful('/category/{code}/{deal}/edit');
 */
var Restful = function(router, location){

  var isArray = function(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
  };

  var error = function(message){
    if (window.console && window.console.error) {
      console.error(message);
    } else {
      alert(message);
    }
  };

  // default value setting
  router = router ||'';
  location = location || window.location;

  var params = {};
  (function() {
    if (!router) return;
    var routers = router.split('/');
    var urls = location.pathname.split('/');

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
  })();

  (function() {
    var queryString = location.search;
    if (!queryString) return params;

    var keyVals = queryString.substring(1).split('&');
    for (var i = 0; i < keyVals.length; i++) {
      var keyVal = keyVals[i].split('=');
      var key = keyVal[0];
      var val = keyVal[1];

      if (key in params) {
        var preVal = params[key];
        if (isArray(preVal)) {
          params[key] = preVal.push(val);
        } else {
          params[key] = [ preVal, val ];
        }
      } else {
        params[key] = val;
      }
    }
  })();

  params['_hash'] = (location.hash).replace('#', '') || '';

  return params;
};
