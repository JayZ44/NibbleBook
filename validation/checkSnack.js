const checkSnack = (req, res, next) => {
    // Check if name and description are present in the request body
    if (!req.body.name) {
        return res.status(400).json({ error: 'Name is required.' });
    }
    if (!req.body.description) {
        return res.status(400).json({ error: 'Description is required.' });
    }

    // All required fields are present, move to the next middleware
    next();
};

module.exports = { checkSnack };