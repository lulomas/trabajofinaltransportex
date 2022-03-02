var express = require('express');
var router = express.Router();
var { agregar } = require('./../../controller/agregarControllers');


router.post('/agregar', async (req, res, next) => {

  try {
    agregar()
    res.send('console')
    // var usuario = req.body.usuario;
    // var password = req.body.password;

    // var data = await usuariosmodelos.getUserByUsernameAndPassword(usuario, password);
    
    // if (data != undefined) {
    //   // Verificar esto en el video, para que llena en req session
    //   req.session.id_usuario = data.ID;
    //   req.session.nombre = data.usuario;
    
    //   res.redirect('/admin/novedades');
    // } else {
    //   res.render('admin/login', {
    //     layout: 'admin/layout',
    //     error: true
    //   });
    // }
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;