class queue{
    constructor(){
        this.stack=[];
        this.index=0;
    }

    enQueue(element){
        
this.stack[this.index]=element;
this.index++;
   
    }


    deQueue(){
        this.stack.splice(0,1);
        this.index--;
    }

    length(){
        return  this.index;
    }

    
    enQueueThree(...element){
        element.forEach((ele) => {
            this.stack[this.index]=ele;
            this.index++;
                    });
    }

    deQueueThree(){

        if(this.index>=3)
        {
            var i=0;
            while(i<3)
            {
                this.stack.splice(0,1);
                this.index--;
                i++;
            }
           
        }
        else if(this.length<3 && this.index>0)
        {
            while(this.length>0)
            {
                this.stack.splice(0,1);
                this.index--;
            }
        }
        else{
            console.log("Queue is Empty");
        }
    }
}


let s1=new queue();
s1.enQueue(5);
s1.enQueueThree(5,6,7);

console.log(s1);
s1.deQueueThree();
console.log(s1);
console.log(s1.length());
