Array.prototype.nextTickout = function(interval) {
  let i = 0;
  (function loop() {
    console.log(this[i]);
    if (this[++i]) {
    	setTimeout(loop.bind(this), interval);
    } 
  }.bind(this))();
};

[1, 2, 3, 4, , , , 5].filter(Boolean).nextTickout(1000);
