function MyArray(){
    this.length=0;
    Object.defineProperty(this,'length',{
        value:0,
        enumerable:false,
        writable:true,
    })
}

MyArray.prototype.push =function(elem)
{
    this[this.length]=elem;
    this.length++;
    return this.length;
}

MyArray.prototype.pop = function(){
    this.length--;
    var remove=this[this.length]
    delete this[this.length];
    return remove;
}

MyArray.prototype.map = function(cback)
{
    var res=new MyArray();
    for (let i = 0; i < this.length; i++) {
      let newItem = cback(this[i], i, this)
      res.push(newItem)
    }
    return res;
}

MyArray.prototype.filter =function(cback){
        var res=new MyArray();
      for (let i = 0; i < this.length; i++) {
        let isFound = cback(this[i], i, this)
        if(isFound){
          res.push(this[i]);
          
        }
      }
      return res
    }

MyArray.prototype.reduce = function(cback, value){
    var res=0;
    for (let i = 0; i < this.length; i++) {
      res = cback(res, this[i], i, this)
    }
    return res
}

export default MyArray