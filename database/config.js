const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN);
        console.log('BD!!');
    } catch (error) {
        console.error(error);
        throw new Error('Error en la conexión de la BD');
    }
}

module.exports = {
    dbConnect
}