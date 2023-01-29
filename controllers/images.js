const Image = require('../models/image')

module.exports = {
    show,
}

app.get("/", function show(req, res) {
    Image.findById(req.params.id, function(err, book) {
        res.render('images/show', { image })
    })
  })