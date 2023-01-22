var Automobile= {
     wheels:"alloy",
     engine:"200cc",
     Milage:100,
     type:"fourWheeler",
}


var obj= Object.create(Automobile);

function Auto(){
     this.wheels="alloy"
     this.engine="200cc"
     this.Milage=100
     this.type="fourWheeler"
}

var ovj=new Auto();

