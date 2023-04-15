import { Schema, Document, model } from 'mongoose';

export interface ITag extends Document {
  title: string;
}

const TagSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

export default model<ITag>('Tag', TagSchema);
