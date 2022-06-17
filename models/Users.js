import mongoose from 'mongoose'

/* PetSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
    username: {

        type: String,
        required: [true, 'Please provide a name.'],
    },
    userid:{
        type:String,
        required: [true, 'Please provide a userid.'],
    },
    hash:{
        type:String,
        required: [true, 'Please provide a hash.'],
    },
    grade:{
        type:Number,
        required: [true, 'Please provide a grade.'],
    },
    class:{
        type:Number,
        required: [true, 'Please provide a class.'],
    },
    usernum:{
        type:Number,
        required: [true, 'Please provide a usernum.'],
    }
},{
    timestamps: {createdAt:'dateCreated',updatedAt:'dateUpdated'}
    }
)

export default mongoose.models.Users || mongoose.model('Users', UserSchema)
