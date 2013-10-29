var assert = require("assert");
var User = require('../../../models/api/User.js');

//Syncronous example
describe('Array', function(){
  describe('#indexOf()', function(){
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(5));
      assert.equal(-1, [1,2,3].indexOf(0));
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
        console.log(user);
        assert.equal(mockUser.name.first, user.name.first);
        assert.equal(mockUser.name.last, user.name.last);
        done();
      });
    });
  });
});