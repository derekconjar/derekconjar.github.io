document.getElementsByClassName('button')[0].onclick = function () {
  document.getElementsByClassName('popup-disabled')[0].className = 'popup-enabled';
};

document.getElementsByClassName('popup-exit')[0].onclick = function () {
  document.getElementsByClassName('popup-enabled')[0].className = 'popup-disabled';
};