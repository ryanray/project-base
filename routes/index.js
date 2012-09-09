
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express', canonical: 'http://you.should.change.this' });
};