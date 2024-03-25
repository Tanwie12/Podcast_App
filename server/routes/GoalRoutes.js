const express = require('express');

const router = express.Router();
const { setGoals,getGoals,deleteGoals,updateGoals } = require('../controllers/GoalController');
const {protect}=require('../middlerware/AuthMiddleware')

router.route('/').get(protect, getGoals).post(protect,setGoals);
router.route('/:id').delete(protect,deleteGoals).put(protect,updateGoals);


module.exports = router;
