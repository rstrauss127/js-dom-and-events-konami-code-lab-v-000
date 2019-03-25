const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
    let index = 0;
  //const body = document.querySelector('body');
    document.body.addEventListener('keydown', function(e) {
    const key = parseInt(e.which);
    debugger
      if (key === alphabet[index]) {
        index++;

        if (index === alphabet.length) {
          window.alert("Hurray!");

          index = 0;
        }
      } else {
        index = 0;
      }
  });
}


