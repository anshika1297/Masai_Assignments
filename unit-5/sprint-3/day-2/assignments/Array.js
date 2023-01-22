class Stack{
    constructor(){
        this.stack=[];
        this.index=0;
    }

    push(...element){
        element.forEach((ele) => {
this.stack[this.index]=ele;
this.index++;
        })
    }


    pop(){
        this.stack.splice(this.index-1,1);
        this.index--;
    }

    size(){
        return  this.index;
    }

    peek(){
        return this.stack[this.index-1];
       // return this.stack[0];
    }
}


let s1=new Stack();
s1.push(5);
s1.push(5,6,7);

console.log(s1);
s1.pop();
console.log(s1);
console.log(s1.size());
console.log(s1.peek());