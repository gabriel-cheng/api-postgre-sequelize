(async() => {
    const app = require('./app');
    const port = process.env.PORT || 3000;
    const database = require('./database/database');

    await database.sync({force: false});
    app.listen(port, console.log(`Server is running on port ${port}`));
})();