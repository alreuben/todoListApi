const {MongoClient} = require("mongodb");

const url = "mongodb://root:password@localhost:27017"

const DbService = async () => {

    const connection = await MongoClient.connect(url)
    const db = connection.db('todo')

    return db.collection('tasks')
}

module.exports = DbService