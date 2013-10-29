// Example User class

var createUser = function(firstName, lastName){
  return {
    name: {
      first: firstName,
      last: lastName
    }
  };
};

exports.create = function(first, last, next){
  next(createUser(first, last));
};