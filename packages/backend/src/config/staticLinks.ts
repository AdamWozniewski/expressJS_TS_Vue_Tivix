type ILink = {
  [key: string]: { [key: string]: string };
};

export const links: ILink = {
  endpointType: {
    admin: '/admin',
    auth: '/auth',
    file: '/file',
    find: '/find',
    graphQL: '/graphQL',
  },
  actions: {
    register: '/register',
    refresh: '/refresh',
    login: '/login',
    logout: '/logout',
    userInformation: '/user-information',
    save: '/save',
    getFile: '/get-file',
    upload: '/upload',
    deleteFile: '/delete-file',
  },
} as const;
