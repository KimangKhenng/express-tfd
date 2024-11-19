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

function handleError(error, req, res, next) {
    return res.status(500).json({ msg: error.message })
}

module.exports = { requestLogger, middlware, handleError }