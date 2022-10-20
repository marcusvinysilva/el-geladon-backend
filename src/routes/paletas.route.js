const router = require("express").Router();

const paletasController = require("../controllers/paletas.controller");
const sacolaController = require("../controllers/sacola.controller");

router.get("/find-paletas", paletasController.findPaletasController);
router.get("/find-paleta/:id", paletasController.findPaletaByIdController);
router.post("/create", paletasController.createPaletaController);
router.put("/update/:id", paletasController.updatePaletaController);
router.delete("/delete/:id", paletasController.deletePaletaController);

router.get("/all-sacola", sacolaController.findAllSacola);
router.post("/create-sacola", sacolaController.createManyItemsSacola);
router.delete("/finish-sacola", sacolaController.deleteAllItemsSacola);

module.exports = router;
