const typeDefs = `
type Profile {
  _id: ID
  username: String
  email: String
  password: String
}

type Query {
  profiles: [Profile]!
  profile(profileId: ID!): Profile
}

type Mutation {
  createAccount(username: String!, email: String!, password: String!): Profile
  addRecipe(profileId: ID!, recipe: String!): Profile
  removeAccount(profileId: ID!): Profile
  removeRecipe(profileId: ID!, recipe: String!): Profile
}

`;

module.exports = typeDefs;
