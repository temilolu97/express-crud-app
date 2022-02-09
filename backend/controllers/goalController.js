const asyncHandler = require('express-async-handler')
//@desc Get goals
//@route GET /api/goals
//@access Private
const GetGoals =asyncHandler(async(req,res)=>{
    res.status(200).json({ message:'Get goals' });
})

//@desc Add goals
//@route POST /api/goals
//@access Private
const AddGoal = asyncHandler(async(req,res)=>{
    if(!req.body.text){
        res.status(400);
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message:'Create goal' });
})

//@desc  goals
//@route PUT /api/goals/:id
//@access Private
const UpdateGoal =asyncHandler(async(req,res)=>{
    res.status(200).json({ message:`Update goal ${req.params.id}` });
})

//@desc delete goals
//@route DELETE /api/goals/:id
//@access Private
const DeleteGoal =asyncHandler(async(req,res)=>{
    res.status(200).json({ message:`Delete goal ${req.params.id}` });
})

module.exports ={
    GetGoals,
    AddGoal,
    UpdateGoal,
    DeleteGoal
}