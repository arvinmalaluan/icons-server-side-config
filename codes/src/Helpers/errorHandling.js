module.exports = {
  check_results: (res, error, results) => {
    if (error) {
      return res.status(500).json({
        success: 0,
        message: "Error occured",
        error: error,
      });
    }

    if (results.length === 0) {
      return res.status(404).json({
        success: 0,
        message: "No records found",
      });
    }
  },
};
