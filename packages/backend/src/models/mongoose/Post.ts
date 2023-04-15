import { Schema, Document, model } from 'mongoose';

export interface IPost extends Document {
  title: string;
  description: string;
  author: string;
  published: boolean;
  image: string;
  data: Date;
  tags: string[];
}

const PostSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: false },
    author: { type: String, required: false },
    published: { type: Boolean, required: false },
    image: { type: String, required: false },
    tags: { type: Array, required: false },
    data: { type: Date, required: true },
  },
  {
    timestamps: true,
  },
);

export default model<IPost>('Post', PostSchema);
