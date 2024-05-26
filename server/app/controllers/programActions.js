// Some data to make the trick
const tables = require("../../database/tables");

// Declare the action

const browse = async (req, res) => {
  const programsFromDB = await tables.program.readAll();

  res.json(programsFromDB);
};

// Export it to import it somewhere else

module.exports = { browse };
