const sacolaService = require('../services/sacola.service');

const findAllSacola = async (req, res) => {
  const allSacola = await sacolaService.findAllSacola();
  if (!allSacola) {
    return res
      .status(404)
      .send({ message: 'Não existe nenhum item na sacola!' });
  }
  res.send(allSacola);
};

const createManyItemsSacola = async (req, res) => {
  const sacola = req.body;
  const newSacola = await sacolaService.createManyItemsSacola(sacola);
  res.status(201).send(newSacola);
};

const deleteAllItemsSacola = async (req, res) => {
  await sacolaService.deleteAllItemsSacola();
  res.send({ message: 'Sacola finalizada com sucesso!' });
};

module.exports = {
  findAllSacola,
  createManyItemsSacola,
  deleteAllItemsSacola,
};
