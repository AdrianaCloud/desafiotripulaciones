require('dotenv').config()

const perfilQueries = {
    getPerfilByEmail: `SELECT * FROM ${process.env.PERFIL_TABLE} WHERE user_id = @user_id`,
    getPerfiles: `SELECT * FROM ${process.env.PERFIL_TABLE}`,
    createPerfil: `INSERT INTO ${process.env.PERFIL_TABLE} (perfil_id, ciudad, user_id, preferencias_deportivas, tipo_de_dieta, objetivo_entrenamiento, edad, sexo, peso, condicion, altura) VALUES (@perfil_id, @ciudad, @user_id, @preferencias_deportivas, @tipo_de_dieta, @objetivo_entrenamiento, @edad, @sexo, @peso, @condicion, @altura)`,
    updatePerfil: `UPDATE ${process.env.PERFIL_TABLE} SET preferencias_deportivas = @preferencias_deportivas, tipo_de_dieta = @tipo_de_dieta, objetivo_entrenamiento = @objetivo_entrenamiento, edad = @edad, sexo = @sexo, peso = @peso, condicion = @condicion, altura = @altura  WHERE user_id = @user_id`
}

module.exports = perfilQueries;