import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please add a title'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please add a description'],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
}, {
    timestamps: true,
});

export default mongoose.models.Task || mongoose.model('Task', TaskSchema);
