const UserSchema = `
  type User {
    _id: ID!
    roles: [String!]
    videos: [String!]
    first_name: String!
    last_name: String!
    email: String!
  }
  input UserInput {
    email: String!
    body: String!
  }
  type Query {
    user: [User!]
    getUserVideos(user: UserInput): User
  }
  type Mutation {
    getUserVideos(user: UserInput): User
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;

export default UserSchema;
