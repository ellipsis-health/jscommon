function urlWithoutParams(){
  return window.location.href.split('?')[0];
}

function paramsFromUrl(url){
  if(url === undefined) url = window.location.href;
  if(url.indexOf('=') == -1) return {};
  var paramString = url.split('?')[1];
  var paramStrings = paramString.split('&');
  var params = {};
  for(var i = 0; i < paramStrings.length; i++){
    var paramAndValue = paramStrings[i].split('=');
    params[paramAndValue[0]] = paramAndValue[1];
  }
  return params;
}

function stringFromParams(params){
  var paramStrings = new Array;
  for(var param in params){
    paramStrings.push(param + "=" + params[param]);
  }
  return paramStrings.join('&');
}

function urlWithParams(url, newParams){
  if(newParams === undefined){
    newParams = url;
    url = window.location.href;
  }
  newParams = merge(paramsFromUrl(url), newParams);
  return url.split('?')[0] + '?' + stringFromParams(newParams);
}

function urlWithParam(url, param, value){
  if(value === undefined){
    value = param;
    param = url;
    url = urlWithoutParams();
  }
  var newParam = new Object;
  newParam[param] = value;
  return urlWithParams(url, newParam);
}
