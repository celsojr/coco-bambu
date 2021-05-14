let router = require("express").Router();

router.get("/", function(req, res) {
  res.json({
    status: "API funcionando!",
    message: "Bem-vindo ao RESTHub feito com amor!"
  });
});


var userController = require("./controllers/users.controller");

router
  .route("/users")
  .get(userController.index)
  .post(userController.new);
router
  .route("/user/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);
router.route("/user/authenticate").post(userController.authenticate);
router
  .route("/user/changepassword/:user_id")
  .put(userController.changePassword);

var receitaController = require("./controllers/receita.controller");

router
  .route("/receitas")
  .get(receitaController.index);
router
  .route("/receita/:receita_id")
  .get(receitaController.view);


module.exports = router;
