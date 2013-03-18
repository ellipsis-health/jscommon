function merge(a, b){
  for(prop in b){
    a[prop] = b[prop];
  }
  return a;
}
