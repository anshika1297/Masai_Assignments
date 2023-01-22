function UserInfo(name, location) {
this.name=name;
this.location=location;
}

function serveFood(food) {
    var str="Serving " +food+ " to "+this.name+" in "+this.location
    return str;
}

function serveIn(name,location,food) {
    var new_userinfo= new UserInfo(name,location);
    var obj= serveFood.bind(new_userinfo,food);
    return obj();
}
function billNote(total) {

    var str=this.name+"'s bill is INR "+total;
    return str;
}
function generateInVoice(name,location,quantity,price) 
{
    var new_userinfo= new UserInfo(name,location);
    var obj= billNote.bind(new_userinfo,quantity*price);
    return obj();
}

export { UserInfo, serveIn, serveFood, billNote, generateInVoice };
