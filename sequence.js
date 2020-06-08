for (var i = 0; i < 3; i++) {
  setTimeout(function(i){
    console.log(i);
  }.bind(this, i),1000);
}


for (var i = 0; i < 3; i++) {
  (function(n){
    console.log(n);
  })(i);
}


for (var i = 0; i < 3; i++) {
  (function(n){
    setTimeout(function() {
      console.log(n);
    },1000);
  })(i);
}


for (var i = 0; i < 3; i++) {
  setTimeout(function(j) { 
  	console.log(j);
    }(i), 1000);
}


