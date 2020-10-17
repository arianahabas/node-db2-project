module.exports = {
    client: "sqlite3", //specify the DBMS
    useNullAsDefault: true, // a flag required for SQlite
    connection: {
        filename: "./data/car-dealer.db3" //location of the database file
    },

}