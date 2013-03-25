function upcaseFirstLetter(string){  
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function isString(obj){
  return (typeof obj  == 'string' || obj instanceof String);
}
