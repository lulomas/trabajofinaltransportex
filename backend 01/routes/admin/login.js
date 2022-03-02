var express = require('express');
var router = express.Router();
var usuariosmodelos = require('./../../modelos/usuariosmodelos');
/* GET home page. */
router.get('/', function(req, res, next) { 
  res.render('admin/login',{
    layout:'admin/layout'
  });
});

router.post('/', async (req, res, next) => {

  try {
    var usuario = req.body.usuario;
    var password = req.body.password;

    var data = await usuariosmodelos.getUserByUsernameAndPassword(usuario, password);
    
    if (data != undefined) {
      // Verificar esto en el video, para que llena en req session
      req.session.id_usuario = data.ID;
      req.session.nombre = data.usuario;
    
      res.redirect('/admin/novedades');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
})
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});
module.exports = router;