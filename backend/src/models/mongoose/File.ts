import { Schema, Document, model } from 'mongoose';

export interface IFile extends Document {
  name: string;
}

const FileSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    user: { type: String, required: true },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IFile>('File', FileSchema);
