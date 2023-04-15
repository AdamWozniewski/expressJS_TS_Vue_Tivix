import { Schema, Document, model } from 'mongoose';
import { MAX_AGE } from '../../static/values';

export interface IAccess extends Document {
  refreshToken: String;
  createdAt: any;
  expireAt: any;
}

const AccessSchema: Schema = new Schema(
  {
    refreshToken: { type: String, required: true },
    expireAt: {
      type: Date,
      default: Date.now,
      expires: MAX_AGE,
    },
  },
  {
    timestamps: true,
  },
);

export default model<IAccess>('Access', AccessSchema);
