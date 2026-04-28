import mongoose, { Schema, Document } from 'mongoose';

interface IProject extends Document {
    title: string;
    xp: number;
    level: number;
    progress: number;
    status: {
        type: String,
        enum: ['Não Iniciado', 'admin', 'moderator'], // Only these values are allowed
        default: 'user'
    }
}

const projectSchema: Schema = new Schema({
});

const Project = mongoose.model<IProject>('Project', projectSchema, "Project");

export default Project;