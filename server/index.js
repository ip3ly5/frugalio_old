const express = require('express')
const path = require('path')
const app = express()
const port = 3000
// Imports the Google Cloud client library.
const {Storage} = require('@google-cloud/storage');

// Instantiates a client. If you don't specify credentials when constructing
// the client, the client library will look for credentials in the
// environment.
const storage = new Storage();
// Makes an authenticated API request.
async function listBuckets() {
  try {
    const results = await storage.getBuckets();

    const [buckets] = results;

    console.log('Buckets:');
    buckets.forEach(bucket => {
      console.log(bucket.name);
    });
  } catch (err) {
    console.error('ERROR:', err);
  }
}
listBuckets();


async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
  const [result] = await client.labelDetection('./public/banner.PNG');
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => console.log(label.description));
}
quickstart();


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})

app.use('/static', express.static(path.join(__dirname, 'public')))

const receipts = require('./routes/api/receipt')

app.use('/api/receipts', receipts)

