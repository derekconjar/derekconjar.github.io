document.getElementsByClassName('button')[0].onclick = function () {
  var zdy085w0z48315;(function(d, t) {
    var s = d.createElement(t), options = {
    'userName':'newadventure',
    'formHash':'zdy085w0z48315',
    'autoResize':true,
    'height':'597',
    'async':true,
    'host':'wufoo.com',
    'header':'show',
    'ssl':true};
    s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
    s.onload = s.onreadystatechange = function() {
    var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
    try { zdy085w0z48315 = new WufooForm();zdy085w0z48315.initialize(options);zdy085w0z48315.display(); } catch (e) {}};
    var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
  })(document, 'script');

  document.getElementsByClassName('popup-disabled')[0].className = 'popup-enabled';
};

document.getElementsByClassName('popup-exit')[0].onclick = function () {
  document.getElementsByClassName('popup-enabled')[0].className = 'popup-disabled';
};