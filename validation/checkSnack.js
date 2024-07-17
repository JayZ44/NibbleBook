const checkSnack = (req, res, next) => {
    // check the body to see if it has name
    if (req.body.name) {
        return next()
    } else {
        res.status(404).json({ error: 'Name not found.'})
    }
}


module.exports = { checkSnack }