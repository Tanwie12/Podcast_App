const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
const User=require('../models/userModel');
const asyncHandler=require('express-async-handler');





const registerUser = asyncHandler(async (req, res, next) => {
  console.log(req.body)
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        res.status(400);
        throw new Error("Please add all fields");
    }
    //check if user exists
    const userExists=await User.findOne({email});
    if(userExists){
        res.status(400);
        throw new Error("User already exists");
    }
    //hash password
        // found in usermodel
    //create user
    const user=await User.create({
        name,
        email,
        password
    });
    if(user){
      generateToken(res,user._id)
        res.status(201).json({
            _id:user.id,
            name:user.name,
            email:user.email,
           
        
        
            
        });
    }else{
        res.status(400);
        throw new Error("Invalid user data");
    }
    
  
  next();
});

// login user
// /api/user/login
const loginUser = asyncHandler(async (req, res, next) => {

    const {email,password}=req.body;

  const user=await User.findOne({email});
  if(user && (await bcrypt.compare(password,user.password))){
   const token= generateToken(res,user._id)
    console.log(token)
      res.json({
          // _id:user.id,
          name:user.name,
          email:user.email,
          token:token,
          
      });
  }else{
      res.status(400);
      throw new Error("Invalid credentials");}
});
  

// get user
// /api/users/profile
const getUser = asyncHandler(async (req, res) => {
  console.log(req.user)
  const  {_id, name, email} = await User.findById(req.user.id);

  res.status(200).json({
    id:_id,
    name,
    email,
  });
  
})
// update user profile
//route put /api/users/profile
/// private
const updateUserProfile=asyncHandler(async(req,res)=>{
  console.log(req.user)
    const user=await User.findById(req.user.id);
    if(user){
        user.name=req.body.name || user.name;
        user.email=req.body.email || user.email;
        if(req.body.password){
            user.password=req.body.password;
        }
        const updatedUser=await user.save();
        res.json({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
   
        })
    }else{
        res.status(404);
        throw new Error('User not found');
    }
  res.status(200).json({message:'update  User'});
})






// route  /api/users/logout
// desc logout user
// access private
const logoutUser = asyncHandler(async (req, res, next) => {
    res.cookie("jwt", "", {
      httpOnly: true,
      expires: new Date(0),
    });
  

  res.status(200).json({
    message: "Logged out successfully",
  });
  next();
});




//GENERATE JWT
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: "30d",
  });
  res.cookie("jwt", token, {
    path: "/",
    sameSite: "None",
    httpOnly: true,
    secure: true,
      maxAge: 30 * 24 * 24 * 60 * 60 * 1000,
      
  });
  return token; 
};








module.exports = { registerUser, loginUser, getUser, updateUserProfile,logoutUser };

