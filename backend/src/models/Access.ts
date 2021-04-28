import { Schema, Document, model } from 'mongoose';

export interface IAccess extends Document {
  access: String,
}

const AccessSchema: Schema = new Schema({
  access: { type: String, required: true },
}, {
  timestamps: true,
});

export default model<IAccess>('AccessSchema');