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



function nextTick (delay) {
  let i = 1;
  (function loop(){
    console.log(i);
    if(++i) {
      if(i>50) {
        i =1;
      }
      setTimeout(loop, delay);
    }
  })();
} 

nextTick(1000);
