import User, { IUser } from '../models/mongoose/User';
const admin: string = 'admin';

export class Admin {
  static async adminCreate() {
    const userAdmin: IUser = new User({
      first_name: admin,
      last_name: admin,
      email: `${admin}@${admin}.${admin}`,
      roles: ['user', admin],
    });
    User.findOne({ first_name: admin, last_name: admin }, async (err, doc) => {
      if (!doc) await User.register(userAdmin, admin);
    });
  }
}
