const bcrypt = require("bcrypt");

module.exports = {
  signin: async (fetched, payload) => {
    if (fetched.length !== 0) {
      if (
        payload.email === fetched[0].email ||
        payload.email === fetched[0].username
      ) {
        try {
          const match = await bcrypt.compare(payload.pass, fetched[0].password);
          if (match) {
            return "valid";
          } else {
            return "wrong password";
          }
        } catch (error) {
          console.error("Error comparing passwords:", error);
          return "something went wrong";
        }
      } else {
        return "something went wrong";
      }
    } else {
      return "something went wrong"; // Handle the case where fetched is empty
    }
  },

  hashing: async (password) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  },
};
