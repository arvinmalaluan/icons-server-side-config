const bcrypt = require("bcrypt");

module.exports = {
  signin: async (fetched, payload) => {
    if (fetched.length !== 0) {
      if (
        payload.email === fetched[0].email ||
        payload.email === fetched[0].username
      ) {
        bcrypt.compare(payload.pass, fetched[0].pass, (error, response) => {
          if (error) {
            return "wrong password";
          } else {
            return "valid";
          }
        });
      } else {
        return "something went wrong";
      }
    }
  },

  hashing: async (password) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
  },
};
