const alphabet = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
    let index = 0;
    document.addEventListener('keydown', function(e) {
      const key = parseInt(e.detail || e.which);
      if (key === alphabet[index]) {
        index++;
        if (index === alphabet.length) {
          alert("Wooooo!");
          index = 0;
        }
      } else {
        index = 0;
      }
  });
}


