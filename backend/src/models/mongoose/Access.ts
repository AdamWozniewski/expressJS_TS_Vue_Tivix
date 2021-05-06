import { Schema, Document, model } from 'mongoose';

export interface IAccess extends Document {
  refreshToken: String,
  createdAt: any,
  expireAt: any
}

const AccessSchema: Schema = new Schema({
  refreshToken: { type: String, required: true },
  expireAt: {
    type: Date,
    default: Date.now,
    expires: 525600,
  },
}, {
  timestamps: true,
});

export default model<IAccess>('Access', AccessSchema);