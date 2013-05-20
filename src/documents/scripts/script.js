//Get Fonts
WebFontConfig = {
    google: { families: [ 'Alfa+Slab+One::latin', 'Source+Sans+Pro::latin', 'Unkempt:700:latin', 'Fredericka+the+Great::latin', 'Merriweather:400,900:latin', 'Love+Ya+Like+A+Sister::latin', 'Amatic+SC:700:latin', 'Luckiest+Guy::latin', 'Piedra::latin' ] }
 };

(function() {
  var wf = document.createElement('script');
  wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
    '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
  wf.type = 'text/javascript';
  wf.async = 'true';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(wf, s);
})(); 
