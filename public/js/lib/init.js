jQuery(document).ready(function(){
  console.log($, 'WOOT!');

  var templateData = {title: '"Dynamic" heading generated by js using a server & client side friendly template.'};
  //jade template
  jQuery('.span12').append( window.JST['views/demo'](templateData));

});