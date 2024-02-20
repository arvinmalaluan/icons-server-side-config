const userAuth = require("../../Helpers/userAuthentication");
const textFormatter = require("../../Helpers/textFormatter");
const services = require("../services/sql.services");
const errorHandling = require("../../Helpers/errorHandling");

module.exports = {
  authSignup: async (req, res) => {
    try {
      const formatValues = {
        email: req.body.email,
        pass: await userAuth.hashing(req.body.pass),
        role_fkid: req.body.role,
      };

      const queryVariables = {
        fields: "email, password, role_fkid",
        table_name: "tbl_account",
        values: textFormatter
          .parseValues(Object.values(formatValues))
          .join(", "),
      };

      // Call the post_ service function
      services.post_(queryVariables, (error, results) => {
        if (error) {
          // Handle error and send response
          return res.status(500).json({
            success: 0,
            message: "Error occurred during signup",
            error: error.message,
          });
        }

        // Handle success and send response
        res.status(200).json({
          success: 1,
          message: "Signup successful",
          data: results,
        });
      });
    } catch (error) {
      return res.status(500).json({
        success: 0,
        message: "Error occurred during signup",
        error: error.message,
      });
    }
  },

  authSignin: async (req, res) => {
    try {
      const queryVariables = {
        fields: "username, email, password, role_fkid",
        table_name: "tbl_account",
        condition: `email = '${req.body.email}' OR username = '${req.body.email}'`,
      }
  
      try {
        services.get_w_condition(queryVariables, async (error, results) => {
          try {
            errorHandling.check_results(res, error, results);
            
            if (results.length !== 0) {
              const response = await userAuth.signin(results, req.body);
              console.log(response);
              if (response !== "valid") {
                return res.status(200).json({
                  success: 0,
                  message: response,
                });
              } else {
                return res.status(200).json({
                  success: 1,
                  message: response,
                });
              }
            }
          } catch (error) {
            console.error("Error occurred during sign in:", error);
            return res.status(500).json({
              success: 0,
              message: "Error occurred during sign in",
              error: error.message,
            });
          }
        });
      } catch (error) {
        return res.status(500).json({
          success: 0,
          message: "Error occurred during sign in",
          error: error.message,
        });
      }
    } catch (error) {
      return res.status(500).json({
        success: 0,
        message: "Error occurred during sign in",
        error: error.message,
      });
    }
  }};
  