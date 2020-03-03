module.exports = function(rslt, res, res, next) {
    return res.status(rslt.status).json({
        code: '',
        message: rslt.err,
        erro: rslt.err ? true : false
    })
}