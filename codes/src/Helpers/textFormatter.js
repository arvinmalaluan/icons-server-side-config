module.exports = {
  // Example input: "Good luck" -> Example output: "'Good luck'"
  // This is used to simplify the SQL statements, the GET method where you specify the fields
  parseValues: (values) => {
    const empty_array = [];

    values.map((value, index) => {
      empty_array.push(`'${value}'`);
    });

    return empty_array;
  },

  // Example input: "['Arvin'], ['Firstname'] -> Example output: Arvin = 'Firstname'"
  // This is used to simplify the update process in sql statements, the SET method where you specify the key and the values
  formatUpdate: (keys, values) => {
    const empty_array = [];

    if (keys.length === values.length) {
      keys.map((key, index) => {
        empty_array.push(`${key} = '${values[index]}'`);
      });
    } else {
      return "error";
    }

    return empty_array.join(", ");
  },
};
