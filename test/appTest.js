const assert = require('chai').assert;
const app = reuire('../app');

describe('App',function(){
  it('app should return text file content',function(){
    let result = app.server;
    assert.typeOf(result,'string');
  });
});
