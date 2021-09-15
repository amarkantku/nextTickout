function print(){
  console.log('hi');
}

// setInterval(callback, delay)


function _setInterval(fn, delay) {
  let id;
  const loop = () => {
    clearTimeout(id);
    fn();
    id = setTimeout(loop, delay);
  }
  id = setTimeout(loop, delay);
}

_setInterval(print, 1000);
