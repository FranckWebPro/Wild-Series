// Some data to make the trick

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

const browseCategory = (req, res) => {
  if (req.query.name != null) {
    const filteredCategories = categories.filter((category) =>
      category.name.includes(req.query.name)
    );
    res.json(filteredCategories);
  } else {
    res.json(categories);
  }
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
