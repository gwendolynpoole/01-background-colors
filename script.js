let index = 0;

function changeColors() {
  let colors = [
    "aquamarine",
    "aqua",
    "antiquewhite",
    "coral",
    "deepskyblue",
    "salmon",
  ];

  document.getElementsByTagName("body")[0].style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
