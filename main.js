// alert that appears as soon as page loads
alert("Hi fellow Vefskóli student! Click OK to continue :)");

// changing text on button once you click it
startButton.addEventListener('click', () => {
  textChange ()
});

function textChange() {
  startButton.textContent = "The square doesn't want to move today :( Try hovering over it"
};

// adding colour change on hover
box.addEventListener('mouseover', () => {
  colourChange ()
});

function colourChange() {
  box.style.backgroundColor = 'blue';
};

box.addEventListener('mouseout', () => {
  colourChangeBack ()
});

function colourChangeBack() {
  box.style.backgroundColor = 'red';
};

// making box rotate on hover
var rotate = document.getElementById('box');

rotate.addEventListener('mouseover', function() {
  this.className = 'rotate over';
}, false);

rotate.addEventListener('mouseout', function() {
  this.className = 'rotate';
}, false);