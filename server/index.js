const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const tesseract = require("node-tesseract-ocr")

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`)
})

app.use('/static', express.static(path.join(__dirname, 'public')))

const receipts = require('./routes/api/receipt')

app.use('/api/receipts', receipts)

const img = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.heritagechristiancollege.com%2Fwp-content%2Fuploads%2F2019%2F05%2Ffree-walmart-receipt-template-of-need-walmart-receipt-template-of-free-walmart-receipt-template.jpg&f=1&nofb=1"

const config = {
  lang: "eng",
  oem: 1,
  psm: 3
}

tesseract
  .recognize(img, config)
  .then((text) => {
    console.log("Result:", text)
  })
  .catch((error) => {
    console.log(error.message)
  })