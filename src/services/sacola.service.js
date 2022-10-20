const Sacola = require('../models/Sacola');

const findAllSacola = async () => {
  const allSacola = await Sacola.find();
  return allSacola;
};

const createManyItemsSacola = async (newSacola) => {
  const createdSacola = await Sacola.insertMany(newSacola);
  return createdSacola;
};

const deleteAllItemsSacola = async () => {
  return await Sacola.deleteMany();
};

module.exports = {
  findAllSacola,
  createManyItemsSacola,
  deleteAllItemsSacola,
};
