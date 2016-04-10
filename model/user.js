var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var postSchema= Schema({
  id:{
    type:Number,
    required:true
  },
  name:{
    type:String,
    required:true
  },
  DOB:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  token:{
    type:String,
    required:true
  }
});

module.exports=mongoose.model('user',postSchema);
