var pool = require('./bd');
var md5 = require('md5');

async function getNovedades() {
    var query = "select * from novedades order by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function insertNovedades(obj ) {
    try {
        var query = `insert into novedades set titulo='${obj.titulo}', subtitulo='${ obj.subtitulo}', cuerpo='${obj.cuerpo}', img_id='${obj.img_id}'`;
        var rows = await pool.query(query, [obj]);
        return rows;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deleteNovedadesById(id) {
    var query ="delete from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadesById(id) {
    var query = "select * from novedades where id = ? ";
    var rows = await pool.query(query, [id]);
    return rows[0];
} 

async function modificarNovedadesById(obj, id) {
    try {
        var query = "update novedades set ? where id=?";
        var rows = await pool.query(query, [obj, id]);
        return rows;
    } catch (error) {
        throw error;
    }
}

module.exports = 
    { 
        getNovedades,
        deleteNovedadesById,
        insertNovedades,
        getNovedadesById,
        modificarNovedadesById 
    }