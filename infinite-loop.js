// infinite loop using if statement...

(function loop() {
    console.log(i);
    if (++i) {
        setTimeout(loop, 1000);
    }
})(i=0);
