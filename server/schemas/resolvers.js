const { AuthenticationError } = require("apollo-server-express");
const { User } = require("../models/User")
const { signToken } = require("../utils/auth")

const resolvers = {
    // ? Is this correct?
    Query: {
        users: async () => {
            return User.find()
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId })
        },

        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id})
            }
            throw new AuthenticationError("Login sir.")
        }
    }
}