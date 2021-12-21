const mongodb = require('mongodb')

module.exports = {
  load: async function (collection) {
    const client = await mongodb.MongoClient.connect('mongodb://localhost:27017', { useUnifiedTopology: true })
    return client.db('frugalio').collection(collection)
  }
}
