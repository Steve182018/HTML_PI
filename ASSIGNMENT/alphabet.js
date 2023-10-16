function alphabet(name) {
    var split = name.split("");

    for(var i = 0; i < split.length; i++) {
      var n = split[i].charCodeAt() - 'a'.charCodeAt();
      n = (n + 1) % 26; 
      split[i] = String.fromCharCode(n + 'a'.charCodeAt());
    }
    return split;
  }
  
  console.log(alphabet("Steve"))



















































