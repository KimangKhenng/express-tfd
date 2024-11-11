function requestLogger(req, res, next) {
    console.log(req.headers['user-agent'])
    next()
}

function middlware(req, res, next) {
    // Middleware to check if a request is authenticated or not?
    const login = true
    if (!login) {
        return res.send("Unanthenticated!")
    }
    next()
}

module.exports = { requestLogger, middlware }