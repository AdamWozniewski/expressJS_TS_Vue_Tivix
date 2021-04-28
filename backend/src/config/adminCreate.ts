import User, { IUser } from './../models/User';
const admin = 'admin'

export default {
  async adminCreate() {
    let adminExist: object = {}
    const userAdmin: IUser = new User({
      first_name: admin,
      last_name: admin,
      email: 'admin@admin.admin',
      roles: ['user', admin],
    });
    User.findOne({ first_name: 'admin', last_name: 'admin' }, async (err, doc) => {
      if (doc) adminExist = doc;
      else await User.register(userAdmin, admin);
    });
  }
}
