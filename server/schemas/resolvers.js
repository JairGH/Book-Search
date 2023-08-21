const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models/User")
const { signToken } = require("../utils/auth")

const resolvers = {
    Query: {
        user: async () => {
            return 
        }
    }
}