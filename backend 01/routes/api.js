var express = require('express');
var router = express.Router();
var novedadesModel = require('../modelos/novedadesmodelos')
var cloudinary = require('cloudinary').v2;
const dotenv = require('dotenv').config()

router.get('/novedades', async (req, res, next)=>{
    let novedades = await novedadesModel.getNovedades();

    novedades = novedades.map(novedades => {
        if(novedades.img_id){
            const imagen = cloudinary.url(novedades.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return{
                ...novedades,
                imagen: 'upss'
            }
        }
    })

    res.json(novedades)
})

router.post('/contacto', async (req, res) =>{
    try{
        console.log(req.body)
        const mail = {
            to: 'carusogabriel9@gmail.com',
            subject: 'Página de Transporte X',
            html: `${ req.body.nombre } te mandó un mensaje desde la web. <br>
            El mail es: ${req.body.email}. <br>
            El mensaje que dejó: <br>
            ${req.body.mensaje} <br>
            Teléfono de contacto: ${req.body.telefono }
            `
        }
        const transport = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        })
    
        await transport.sendMail(mail)

    }
    catch(err){
        res.status(357).jsonp({
            error: false,
            message: `   Seguimos sin body ${req}`
        })

    }

})

module.exports = router;