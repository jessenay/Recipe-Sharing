
const typeDefs = `
type Profile {
  _id: ID
  username: String
  email: String
  recipes: [Recipe]
}

type Recipe {
  _id: ID
    title: String
    description: String
    image: String
    prepTime: String
    cookTime: String
    ingredients: [String]
    instructions: [String]
}

type AuthPayload {
  token: String
  user: Profile
}

type Query {
  profiles: [Profile]!
  profile: Profile
}

type Mutation {
  createAccount(username: String!, email: String!, password: String!): AuthPayload
  login(email: String!, password: String!): AuthPayload
  addRecipe(title: String, description: String, image: String, prepTime: String, cookTime: String, ingredients: [String], instructions: [String]): Profile
  #removeAccount(profileId: ID!): Profile
  removeRecipe(profileId: ID!, recipeId: ID!): Profile
}
`;

module.exports = typeDefs;
