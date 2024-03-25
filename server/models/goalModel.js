const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// goal schema
const goalSchema = new Schema({
    user:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'     

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    
    
}  );
module.exports = mongoose.model('Goal', goalSchema);