const User = require("../Models/user");

exports.getUserById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: "No user was found in DB"
      });
    }
    req.profile = user;
    next();
  });
};



exports.getUser =(req, res)=>{
  id= req.params.userId;
  console.log(id);
  User.find(({_id:id}),(err,val)=>{
    
    res.json(val);
  })
}
  
exports.updateUser = (req, res) => {
  User.findByIdAndUpdate(
    { _id: req.profile._id },
    { $set: req.body },
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) {
        return res.status(400).json({
          error: "You are not authorized to update this user"
        });
      }
      user.salt = undefined;
      user.encry_password = undefined;
      res.json(user);
    }
  );
};

exports.getAllUserFalse = (req, res) => {
  User.find({status : false}).exec((err, user)=> {
    if(err){
      return res.status(400).json({
        error: "unable to fetch user"
      });
    }
    else{
      res.json(user);
    }
  });
}

exports.getAllUserTrue = (req, res) => {
  User.find({status : true}).exec((err, user)=> {
    if(err){
      return res.status(400).json({
        error: "unable to fetch user"
      });
    }
    else{
      res.json(user);
    }
  });
}

exports.deleteUser = (req, res) => {
  id= req.params.userId;
  console.log(id);
  User.findByIdAndDelete(id).exec((err, user)=> {
    if(err){
      return res.status(400).json({
        error: "unable to delete user"
      });
    }
    else{
      res.json(user);
    }
  });
}

exports.approveUser=(req, res)=>{
  id= req.params.userId;
  console.log(typeof id);
  console.log(id);
  console.log("entered");

    User.findByIdAndUpdate(id,{ $set: {
      status : true
    } },(err,user)=>{
      if(err){
        res.status(400).json({
          error: "unable to approve"
        })
      }
      else{
        res.json(user);
      }
    } )
}



