Array.prototype.nextTickout = function(interval) {
  let i = 0;
  (function loop() {
    console.log(this[i]);
    if (++i < this.length) {
      setTimeout(loop.bind(this), interval);
    }
  }.bind(this))();
};

[1, 2, 3, 4, 5].nextTickout(1000);
