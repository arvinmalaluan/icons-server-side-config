const services = require("../services/sql.services");
const formatter = require("../../Helpers/textFormatter");
const computation = require("../../Helpers/computeValue");
const errorHandling = require("../../Helpers/errorHandling");

const handleView = (query_variables) => {
  services.patch_(query_variables, (error, results) => {
    if (error) {
      return res.status(500).json({
        success: 0,
        message: "Encountered Error",
        results: error,
      });
    } else {
      return res.status(201).json({
        success: 1,
        message: "Created Successfully",
        results: results,
      });
    }
  });
};

module.exports = {
  getPost: (req, res) => {
    const queryVariables = {
      fields: "*",
      table_name: "tbl_community_post",
    };

    services.get_community_posts_using_joins(
      queryVariables,
      (error, results) => {
        errorHandling.check_results(res, error, results);

        if (results.length !== 0) {
          return res.status(200).json({
            success: 1,
            message: "Fetched successfully",
            data: results,
          });
        }
      }
    );
  },

  getPostWCondition: (req, res) => {
    const queryVariables = {
      condition: req.params.condition,
    };

    services.get_community_posts_using_joins_with_condition(
      queryVariables,
      (error, results) => {
        errorHandling.check_results(res, error, results);

        if (results.length !== 0) {
          return res.status(200).json({
            success: 1,
            message: "Fetched successfully",
            data: results,
          });
        }
      }
    );
  },

  createPost: (req, res) => {
    const data = req.body;

    const query_variables = {
      table_name: "tbl_community_post",
      fields: Object.keys(data),
      values: formatter.parseValues(Object.values(data)),
    };

    services.post_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Created Successfully",
          results: results,
        });
      }
    });
  },

  updatePost: (req, res) => {
    const query_variables = {
      values: formatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_community_post",
      id: req.params.id,
    };

    services.patch_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },

  // ! ------> Not yet working
  getEngagement: (req, res) => {
    const query_variables = {
      fields: "",
      table_name: "tbl_engagement",
      condition: "",
    };
  },

  createEngagement: (req, res) => {
    const query_variables = {
      table_name: "tbl_engagement",
      fields: Object.keys(req.body),
      values: formatter.parseValues(Object.values(req.body)),
    };

    services.post_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Created Successfully",
          results: results,
        });
      }
    });
  },

  updateEngagement: (req, res) => {
    const query_variables = {
      values: formatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_engagement",
      id: req.params.id,
    };

    services.patch_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },

  // ! ------> Not yet working
  getComment: (req, res) => {
    const query_variables = {
      fields: "",
      table_name: "tbl_comment",
      condition: "",
    };
  },

  createComment: (req, res) => {
    const query_variables = {
      table_name: "tbl_comment",
      fields: Object.keys(req.body),
      values: formatter.parseValues(Object.values(req.body)),
    };

    services.post_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(201).json({
          success: 1,
          message: "Created Successfully",
          results: results,
        });
      }
    });
  },

  updateComment: (req, res) => {
    const query_variables = {
      values: formatter.formatUpdate(
        Object.keys(req.body),
        Object.values(req.body)
      ),
      table_name: "tbl_comment",
      id: req.params.id,
    };

    services.patch_(query_variables, (error, results) => {
      errorHandling.check_results(res, error, results);

      if (results.length !== 0) {
        return res.status(200).json({
          success: 1,
          message: "Updated Successfully",
          results: results,
        });
      }
    });
  },

  // ! ------> Not yet working
  updateViewCount: (req, res) => {
    const queryVariables = {
      fields: "name",
      table_name: "testingtable",
      condition: `id = ${req.params.id}`,
    };

    services.get_w_condition(queryVariables, (error, results) => {
      errorHandling.check_results(res, error, results);

      const query_variables = {
        fields: results,
        values: computation.increaseCount(1, 2),
        table_name: "testingtable",
        id: req.params.id,
      };

      if (results.length !== 0) {
        handleView(query_variables);
      }
    });
  },
};
