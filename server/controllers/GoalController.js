const Goal = require('../models/goalModel.js');
const asyncHandler = require('express-async-handler');
const User=require('../models/userModel.js');


// get goals
// GET /api/goals
// private
const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user:req.user.id});
    res.status(200).json(goals);
});
// set goals
// POST /api/goals
// private
const setGoals = asyncHandler(async (req, res) => {
    const {title,description}=req.body
    if(!req.body.title){
        res.status(400);
        throw new Error('Please add a text field');
    }
    //if goal exist
    const goalexist=await Goal.findOne({title})
    if(goalexist){
        throw new Error("goals exist")

    }else{

        const goal = await Goal.create({
            user: req.user.id,
            title,
            description,
           
        });
        res.status(200).json(goal);
    }

   
    
});
// deletegoals
// DELETE /api/goals
// private
const deleteGoals = asyncHandler(async (req, res) => {
    
    const goal = await Goal.findById(req.params.id);
   
    // console.log(goal.user.toString())
    // console.log(req.user.id)
    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    const user=await User.findById({_id:goal.user.toString()})

     if(goal.user.toString()!==req.user.id){


        res.status(400);
        res.json({message:`this goals belongs to user ${user.name}`})
        throw new Error('not the user');

    }


    await Goal.deleteOne({ _id: req.params.id });

    res.status(200).json({id: req.params.id});
});
//updategoals
// PUT /api/goals
// private
const updateGoals = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if(!goal){
        res.status(400);
        throw new Error('Goal not found');
    }
    const user= await User.findById(req.user.id)
    
    // check user
    if(!user){
        res.status(401)
        throw new Error('User not found')

    }

    //make sure logged in user atches the goal user
    if(goal.user.toString() !==user.id){
        res.status(401);
        throw new Error('User not authorized');
    }   
    
    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updatedGoal);
});

module.exports = {
    getGoals,
    setGoals,
    deleteGoals,
    updateGoals, 
};