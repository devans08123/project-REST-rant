const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('places/index', { places })
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.send('POST /places')
  })
  
  router.get('/:id/edit', (req, res) => )
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/edit', { place })
    })
    router.get('/:id/edit', (req, res) => {
      db.Place.findById(req.params.id)
      .then(place => {
          res.render('places/edit', { place })
      })
      .catch(err => {
          res.render('error404')
      })
    

router.get('/new', (req, res) => {
    res.render('places/new')
  })
  
module.exports = router