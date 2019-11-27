const puppies = require("../data.json");
let id = 2;

function findPuppyIndex(id) {
  return puppies.findIndex((puppy) => {
    return puppy.id === +id;
  });
}

module.exports = {
  getAllPuppies: (req, res, next) => {
    res.status(200).send(puppies);
  },
  
  getPuppyById: (req, res, next) => {
    const { id } = req.params;
    const index = findPuppyIndex(id);
    if (index !== -1){
      res.status(200).send(puppies[index]);
    } else {
      res.status(404).send("No puppy found with that ID.");
    }
  },

  postPuppy: (req, res, next) => {
    const{
      age,
      name,
      breed,
      temperment,
      size,
      color,
      gender,
      dateSmuggled
    } = req.body;

    const puppy = {
      id,
      age,
      name,
      breed,
      temperment,
      size,
      color,
      gender,
      dateSmuggled
    };

    puppies.push(puppy);
    id++;

    res.status(200).send(puppies);
  },

  updatePuppy: (req, res, next) => {
    const { id } = req.params;
    const { name, age, temperment, size } = req.body;
    const index = findPuppyIndex(id);

    if (index !== -1) {
      puppies[index].name = name || puppies[index].name;
      puppies[index].age = age || puppies[index].age;
      puppies[index].temperment = temperment || puppies[index].temperment;
      puppies[index].size = size || puppies[index].size;

      res.status(200).send(puppies);
    } else {
      res.status(404).send("No puppy found.");
    }
  },

  unsmugglePuppy: (req, res, next) => {
    const { id } = req.params;
    const index = findPuppyIndex(id);
    if (index !== -1) {
      puppies.splice(index, 1);
      res.status(200).send(puppies);
    } else {
      res.status(404).send("No puppy found.");
    }
  }
}