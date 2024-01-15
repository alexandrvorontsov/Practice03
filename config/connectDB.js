const { connect } = require("mongoose");

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const connectDB = async () => {
    try {
        const DB = await connect(process.env.DB_STRING);
        console.log(
            `DB is connected. Name: ${DB.connection.name}. HOST: ${DB.connection.host}. PORT: ${DB.connection.port}`
                .green.bold
        );
    } catch (error) {
        console.log(error.message.red.bold.italic);
        process.exit(1);
    }
};

module.exports = connectDB;
