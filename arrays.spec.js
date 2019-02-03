describe('returnArray',function(){
   it('should return an array', function(){
      expect(Array.isArray(returnArray())).to.equal(true);
   });
   var arr = returnArray('item1', 'item2');
   it('should return an array containing the two arguments passed into returnArray', function(){
      expect(arr[0]).to.equal('item1');
   });
})