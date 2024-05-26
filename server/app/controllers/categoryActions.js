// Some data to make the trick
const tables = require("../../database/tables");

const categories = [
  {
    id: 1,
    name: "Science-Fiction",
  },
  {
    id: 2,
    name: "Comédie",
  },
];

// Declare the actions

const browseCategory = async (req, res) => {
  const categoriesFromDB = await tables.category.readAll();
  res.json(categoriesFromDB);
};

const readCategory = (req, res) => {
  const parseId = parseInt(req.params.id, 10);

  const category = categories.find((cat) => cat.id === parseId);

  if (category != null) {
    res.json(category);
  } else {
    res.sendStatus(404);
  }
};

// Export them to import them somewhere else

module.exports = {
  browseCategory,
  readCategory,
};
