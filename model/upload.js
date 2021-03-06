//  mongodb schema to store the csv file uploaded by the professor

var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var postSchema= Schema({
  id:{
    type:Number
  },
  course:{
    type:String
  },
  std_id:{
    type:Number
  },
  insem1:{
    type:Number
  },
  insem2:{
    type:Number
  },
  endsem:{
    type:Number
  },
  lab:{
    type:Number
  },
  project:{
    type:Number
  },
  attendance:{
    type:Number
  },
  getgrade:{
    type:String
  }
});

module.exports=mongoose.model('upload',postSchema);
