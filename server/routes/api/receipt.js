const express = require('express')
const router = express.Router()

const loadCollection = require('../../common/loadCollection')

router.get('/all', async (req, res) => {
  
  const receipts = await loadCollection.load('receipts')

  receipts.find().toArray((err, receipts) => {
    if (err) { console.log('Could not query database.'); return }
    res.send(receipts)
  })
})

module.exports = router
