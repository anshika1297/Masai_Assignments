function MyArray(){
    this.size=0;
    Object.defineProperty(this,'size',{
        value:0,
        enumerable:false,
        writable:true,
    })
}

MyArray.prototype.push=function(elem)
{
    this[this.size]=elem;
    this.size++;
    return this.size;
}

MyArray.prototype.myMap=function(cback)
{
   var res=new MyArray();
    for(index in this)
    {
        if(this.hasOwnProperty(index))
        {
           res.push(cback(this[index],index,this));
        }
    }
    return res
}

MyArray.prototype.myForeach=function(cback){

  for (var i = 0; i < this.size; i++) {
    cback(this[i], i, this)
  }
}

MyArray.prototype.myReduce = function(cback, value){
  for (let i = 0; i < this.size; i++) {
    value = cback(value, this[i], i, this)
  }
  return value
}

MyArray.prototype.myFilter = function(cback){
    var res=new MyArray();
  for (let i = 0; i < this.size; i++) {
    let isFound = cback(this[i], i, this)
    if(isFound){
      res.push(this[i]);
      
    }
  }
  return res
}



var arr= new MyArray();
arr.push(23);
arr.push(24);
arr.push(72);
console.log(arr);
var res=arr.myMap(function(val){
    return val;
})
console.log(res);

arr.myForeach(function(elem)
{
    console.log(elem);
})

console.log(arr.myReduce(function(elem, total){
    return total+ elem;
},0))


var res=arr.myFilter(function(elem){
    return elem>=25;
});

console.log(res);