function MyArray(){
    this.size=0;
}

MyArray.prototype.push=function(elem)
{
    this[this.size]=elem;
    this.size++;
    return this.size;
}


MyArray.prototype.pop=function()
{
    this.size--;
    var remove=this[this.size]
    delete this[this.size];
    return remove;
}

MyArray.prototype.top=function()
{
    var remove=this[this.size-1]
    return remove;
}
MyArray.prototype.length=function()
{ 
  
    return this.size;
}

MyArray.prototype.printReverse=function()
{
    var cos="";
    for(var i=1;i<=this.size;i++)
    {
        cos+=this[this.size-i]+" ";
    }
    console.log(cos);

}

MyArray.prototype.print=function()
{
    var cos="";
    for(var i=this.size;i>0;i--)
    {
        cos+=this[this.size-i]+" ";
    }
    console.log(cos);

}

var arr= new MyArray();
arr.push(23);
arr.push(24);
arr.push(72);
console.log(arr);
console.log(arr.top());
console.log(arr.length());
arr.printReverse();
arr.print();
