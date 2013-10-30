var should = require('should');
var User = require('../../../models/api/User.js');

//Syncronous example
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      (-1).should.equal([1,2,3].indexOf(5));
      (-1).should.equal([1,2,3].indexOf(0));
    });
  });
});


//Asyncournous example
describe('Create User', function(){
  describe('#create', function(){
    it('should create without error', function(done){
      var mockUser = {
        name: {
          first: 'John',
          last: 'Smith'
        }
      };
      User.create(mockUser.name.first, mockUser.name.last, function(user){
        (user.name.first).should.equal(mockUser.name.first);
        (user.name.last).should.equal(mockUser.name.last);
        done();
      });
    });
  });
});